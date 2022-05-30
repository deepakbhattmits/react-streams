/** @format */
const { validationResult } = require("express-validator");
const Stream = require("../models/stream.model");
const HttpError = require("../models/http-error");
// getStreams
const getStreams = async (req, res, next) => {
  let streams;
  try {
    streams = await Stream.find().exec();
  } catch (err) {
    const error = new HttpError("Something went wrong.", 400);
    return next(error);
  }
  res.json(streams);
};
const getStreamById = async (req, res, next) => {
  const streamId = req.params.id;
  let stream;
  try {
    stream = await Stream.findById(streamId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong , could not find stream",
      500
    );
    return next(error);
  }

  if (!stream) {
    const error = new HttpError(
      "could not find a stream for provided id !",
      404
    );
    return next(error);
  }
  res.json(stream);
};
const addStream = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(
      new HttpError("Invalid input passed, please check your data", 422)
    );
  }
  const { title, description, userId } = req.body;
  const createdStream = new Stream({
    title,
    description,
    userId,
  });
  try {
    await createdStream.save();
  } catch (err) {
    const error = new HttpError(
      "Creating stream failed, please try again..",
      500
    );
    return next(error);
  }
  res.status(201).json({ stream: createdStream.toObject({ getters: true }) });
};
const updateStream = (req, res, next) => {
  Stream.findById(req.params.id, function (err, stream) {
    if (!stream) res.status(404).send({ stream: "data is not found" });
    else stream.description = req.body.description;
    stream.id = req.body.id;
    stream.title = req.body.title;
    stream
      .save()
      .then((stream) => {
        res.json({ message: "Stream updated", stream });
        // res.json({ stream: "Stream updated" });
      })
      .catch((err) => {
        res.status(400).send({ stream: "Update not possible" });
      });
  });
};
const deleteStream = (req, res, next) => {
  Stream.findByIdAndDelete(req.params.id)
    .then(() => res.json({ stream: "Stream deleted." }))
    .catch((err) => res.status(400).json("Error: " + err));
};
exports.getStreams = getStreams;
exports.getStreams = getStreams;
exports.getStreamById = getStreamById;
exports.addStream = addStream;
exports.updateStream = updateStream;
exports.deleteStream = deleteStream;

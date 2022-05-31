/** @format */

import _ from "lodash";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);
  useEffect(() => {
    dispatch(fetchStream(id));
  }, [dispatch, id]);

  const onSubmit = (formValues) => {
    dispatch(editStream(id, formValues)).then((res) => {
      if (res.data.message?.match(/stream updated/i)) {
        navigate("/");
      }
    });
  };
  if (!stream) return <div>Loading...</div>;
  return (
    <div>
      <h3>Edit a stream</h3>
      <StreamForm
        initialValues={_.pick(stream, "title", "description")}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default StreamEdit;

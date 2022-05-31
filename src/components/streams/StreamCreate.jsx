/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SteramForm from "./StreamForm";
import { createStream } from "../../actions";
const StreamCreate = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (formValues) => {
    dispatch(createStream(formValues))?.then((res) => {
      if (!!res.statusText?.match(/created/i)) {
        navigate("/");
      }
    });
  };

  return (
    <div>
      <h3>Create Stream </h3>
      <SteramForm onSubmit={onSubmit} />
    </div>
  );
};

export default StreamCreate;

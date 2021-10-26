import React from "react";

export const ErrorMessage = (props) => {
  const style = {
    color: "red"
  };

  return <p style={style}>登録できるTODOは５つまでです。</p>;
};

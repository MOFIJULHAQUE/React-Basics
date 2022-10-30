import React, { forwardRef } from "react";

const Children = (props, reffs) => {
  return (
    <>
      <input type="text" placeholder="data....." ref={reffs} />
    </>
  );
};

export default forwardRef(Children);

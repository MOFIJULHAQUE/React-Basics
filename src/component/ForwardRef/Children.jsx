import React, { forwardRef } from "react";

const Children = (props, ref) => {
  return (
    <>
      <input type="text" placeholder="data....." ref={ref} />
    </>
  );
};

export default forwardRef(Children);

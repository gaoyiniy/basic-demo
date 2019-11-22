import React from "react";
import "./index.css";

const BoxShadow = props => {
  console.log("box-shadow");
  return (
    <div className="boxshadow">
      卡片或者弹框的box-shadow
      <pre>{"box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);"}</pre>
    </div>
  );
};

export default BoxShadow;

import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
export default function DescriptionComponent(props) {
  const [count, setCount] = useState(1);
  const handleClick = (status) => {
    if (status === "+") {
      let newCount = count + 1;
      setCount(newCount);
    } else if (status === "-") {
      if (count !== 0) {
        setCount(count - 1);
      }
    }
  };
  return (
    <>
      <div className="name-pd mt-2">
        <span>{props?.data?.name}</span>
      </div>
      <div className="price-pd mt-2">
        <span>Giá:</span>
        <span className="ml-2">
          {props?.data?.price?.toLocaleString("it-IT")}
        </span>
        <span className="ml-1">đ</span>
      </div>
      <hr />

      <div className="mt-3">
        <div
          dangerouslySetInnerHTML={{ __html: props?.data?.description }}
          style={{ fontSize: "16px" }}
        ></div>
      </div>
    </>
  );
}

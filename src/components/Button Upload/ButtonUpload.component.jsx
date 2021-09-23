import React, { useState, useEffect } from "react";
import Image from "material-ui-image";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
const ButtonUploadComponent = (props) => {
  return (
    <div className="mb-3">
      <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={props.handleChangeImage}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          style={{ textTransform: "none" }}
          component="span"
        >
          Chọn hình ảnh
        </Button>
      </label>
    </div>
  );
};

export default ButtonUploadComponent;

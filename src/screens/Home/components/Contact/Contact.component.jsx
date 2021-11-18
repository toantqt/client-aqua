import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import contact from "../../../../assets/image/contact/contact.jpg";
import "./contact.css";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export default function ContactComponent() {
  const history = useHistory();
  return (
    <Grid className="contact">
      <div className="contact-img">
        <img src={contact} width="100%" height="100%" />
      </div>
      <div className="contact-bg"></div>
      <div className="wrap-body contact-form">
        <div className="contact-title">
          <span>LIÊN HỆ TƯ VẤN</span>
        </div>
        <div className="mt-3">
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} xs={12}>
              <TextField
                variant="outlined"
                style={{ width: "100%" }}
                className="input-contact"
                placeholder="Họ tên"
              />
            </Grid>

            <Grid item lg={6} md={6} xs={12}>
              <TextField
                variant="outlined"
                style={{ width: "100%" }}
                className="input-contact"
                placeholder="Số điện thoại"
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                variant="outlined"
                style={{ width: "100%" }}
                className="input-contact"
                placeholder="Email"
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={6}
                variant="outlined"
                style={{ width: "100%" }}
                placeholder="Nội dung"
                className="input-contact"
              />
            </Grid>
          </Grid>
        </div>

        <div className="contact-btn">
          <span>GỬI THÔNG TIN</span>
        </div>
      </div>
    </Grid>
  );
}

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import contact from "../../../../assets/image/contact/contact.jpg";
import "./contact.css";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { sendContact } from "../../../../api/API";
import ModalSuccessComponent from "../../../../components/Modal/ModalSuccess.component";

export default function ContactComponent() {
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    note: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const handleClick = async () => {
    if (data.phoneNumber === "" || data.name === "") {
      alert(
        "Xin vui lòng nhập họ tên và số điện thoại để tổng đài liên hệ tư vấn"
      );
    } else {
      await sendContact(data).then(() => {
        setOpen(true);
      });
    }
  };

  const handleClose = () => {
    setOpen(!open);
    window.location.reload();
  };

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
                name="name"
                onChange={handleChange}
              />
            </Grid>

            <Grid item lg={6} md={6} xs={12}>
              <TextField
                variant="outlined"
                style={{ width: "100%" }}
                className="input-contact"
                placeholder="Số điện thoại"
                name="phoneNumber"
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                variant="outlined"
                style={{ width: "100%" }}
                className="input-contact"
                placeholder="Email"
                name="email"
                onChange={handleChange}
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
                name="note"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </div>

        <div className="contact-btn" onClick={handleClick}>
          <span>GỬI THÔNG TIN</span>
        </div>
      </div>
      <ModalSuccessComponent
        open={open}
        handleClose={handleClose}
        title="Gửi liên hệ tư vấn thành công !"
      />
    </Grid>
  );
}

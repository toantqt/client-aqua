import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./footer.css";

const FooterComponent = () => {
  return (
    <footer>
      <Grid container spacing={2} id="footer">
        <Grid item lg={8} md={8} xs={12}>
          <div>
            <div className="footer-title">
              <span>
                CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ XỬ LÝ NƯỚC SẠCH AQUA VIỆT NAM
              </span>
            </div>
            <div className="footer-lists">
              <ul>
                <li>
                  <span className="footer-lists-title">Địa chỉ:</span>
                  <span className="ml-2">
                    24/30 Lý Tự Trọng, Phường An Cư, Quận Ninh Kiều, TP Cần Thơ
                  </span>
                </li>
                <li>
                  <span className="footer-lists-title">Website:</span>
                  <span className="ml-2">maylocnuocaqua.vn</span>
                </li>
                <li>
                  <span className="footer-lists-title">Điện thoại:</span>
                  <span className="ml-2">0978 590 952</span>
                </li>

                <li className="footer-lists-title">
                  <span className="footer-lists-title">Email:</span>
                  <span className="ml-2">aquavietnam@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <div className="footer-title" style={{ textAlign: "center" }}>
            <span>BẢN ĐỒ</span>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7996848106322!2d105.78031441433212!3d10.033382475212655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a062a00f47a4fd%3A0x849d9f8219b3512d!2zMjQsIDMwIMSQLiBMw70gVOG7sSBUcuG7jW5nLCBBbiBM4bqhYywgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1637510161495!5m2!1svi!2s"
              width="100%"
              height="150"
              style={{ border: "none" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default FooterComponent;

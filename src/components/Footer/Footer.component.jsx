import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./footer.css";

const FooterComponent = () => {
  return (
    <footer>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} xs={12}>
          <div>
            <div className="footer-title">
              <span>CÔNG TY TNHH SX&TM TRÚC ANH</span>
            </div>
            <div className="footer-lists">
              <ul>
                <li>
                  <span>
                    <i class="fas fa-home"></i>
                    Ấp Công Điền, Xã Vĩnh Trạch, TP. Bạc Liêu, Bạc Liêu
                  </span>
                </li>
                <li>
                  <span>
                    {" "}
                    <i class="fas fa-phone"></i>1900 55 88 32
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-envelope"></i>trucanhkd@gmail.com
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-clipboard-list"></i>
                    M.S.D.N: 1900 29 5157, ngày cấp: 20/09/2004, Cấp tại Sở Kế
                    hoạch và Đầu tư tỉnh Bạc Liêu
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer-title">
                <span>CHI NHÁNH I</span>
              </div>
              <div className="footer-lists">
                <ul>
                  <li>
                    <span>
                      <i class="fas fa-home"></i>
                      53F/5 Tôn Đức Thắng, P.7, TP. Bạc Liêu, Bạc Liêu
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fas fa-phone"></i>(0291)3 959.959 - (Fax:
                      (0291)3 959.979)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.456042692093!2d105.7840540143279!3d9.292797087361222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a1a75937035059%3A0x56f3e605ead1e429!2zQ8O0bmcgdHkgVHLDumMgQW5o!5e0!3m2!1svi!2s!4v1630510859229!5m2!1svi!2s"
              width="100%"
              height="150"
              style={{ border: "none" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <div className="footer-title">
              <span className="footer-title">CHÍNH SÁCH</span>
            </div>
            <div className="footer-lists">
              <ul>
                <li>Chính sách thanh toán</li>
                <li>Chính sách vận chuyển giao nhận</li>
                <li>Chính sách đổi/trả và hoàn tiền</li>
                <li>Chính sách bảo vệ thông tin</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default FooterComponent;

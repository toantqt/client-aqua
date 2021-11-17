import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./details.css";
import LightBoxComponent from "../../../../components/Light Box/LightBox.component";
const Details = (props) => {
  return (
    <Grid>
      <div className="wrap-details">
        <div className="details-img">
          <LightBoxComponent
            url={props?.product?.product?.image[0].url}
            title={props?.product?.product?.name}
          />
        </div>

        <div className="details-content">
          {props?.product?.category?.slug === "tom-giong" ? (
            <></>
          ) : (
            <>
              <div className="details-name mb-3">
                <span>{props?.product?.product?.name}</span>
              </div>
              <div>
                <span className="details-title">THÀNH PHẦN:</span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: props?.product?.product?.ingredient,
                  }}
                  style={{ fontSize: "18px" }}
                ></div>
              </div>
              <div>
                <span className="details-title">CÔNG DỤNG:</span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: props?.product?.product?.uses,
                  }}
                  style={{ fontSize: "18px" }}
                ></div>
              </div>
              <div>
                <span className="details-title">LIỀU LƯỢNG:</span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: props?.product?.product?.dosage,
                  }}
                  style={{ fontSize: "18px" }}
                ></div>
              </div>
            </>
          )}

          <div className="details-btn">
            <a>
              {" "}
              <i className="fas fa-phone-alt fa-2x"></i>
              <span className="ml-3">ĐĂNG KÝ MUA HÀNG</span>
            </a>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Details;

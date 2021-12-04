import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import moment from "moment";
import Image from "material-ui-image";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
const DetailsNews = (props) => {
  const listsContent = props?.news?.news?.listContent.map((e) => {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: e.content }}
          style={{ fontSize: "16px !important" }}
          className="mt-5"
        ></div>
        <div>
          {e.library.map((el, index) => {
            if (el.type === "image") {
              return (
                <div
                  className="mt-5 mb-2"
                  title="Bấm vào để phóng to"
                  style={{ width: "70%", margin: "0 auto" }}
                >
                  <SimpleReactLightbox>
                    <SRLWrapper>
                      <a href={el.url}>
                        <img
                          src={el.url}
                          width="100%"
                          height="100%"
                          loading="lazy"
                        />
                      </a>
                    </SRLWrapper>
                  </SimpleReactLightbox>
                </div>
              );
            } else {
              return (
                <div>
                  <ReactPlayer
                    url={el.url}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  });
  return (
    <Grid className="details-news">
      <div className="header-title-news">
        <span>{props?.news?.news?.title}</span>
      </div>
      <div className="header-date-news mt-2 mb-2">
        <span>{moment(props?.news?.news?.created).format("DD/MM/YYYY")}</span>
      </div>
      <div className="header-border"></div>
      <div className="news-content mt-5">{listsContent}</div>
      <div className="news-author mt-5">
        <span>{props?.news?.news?.author}</span>
      </div>
    </Grid>
  );
};

export default DetailsNews;

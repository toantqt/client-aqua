import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import moment from "moment";
import Image from "material-ui-image";
const DetailsNews = (props) => {
  const listsContent = props?.news?.news?.listContent.map((e) => {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: e.content }}
          style={{ fontSize: "20px" }}
        ></div>
        <div>
          {e.library.map((el, index) => {
            if (el.type === "image") {
              return (
                <div className="mt-2 mb-2">
                  <Image
                    src={el.url}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "700px",
                      paddingTop: "none",
                    }}
                    imageStyle={{ width: "100%", height: "700px" }}
                  />
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
        <span>{props?.news?.news.title}</span>
      </div>
      <div className="header-date-news mt-2 mb-2">
        <span>{moment(props?.news?.news.created).format("DD/MM/YYYY")}</span>
      </div>
      <div className="header-border"></div>
      <div className="news-content mt-5">{listsContent}</div>
    </Grid>
  );
};

export default DetailsNews;
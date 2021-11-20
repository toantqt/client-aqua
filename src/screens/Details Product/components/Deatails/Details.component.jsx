import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import ReactPlayer from "react-player";

export default function DetailsComponent(props) {
  const listsContent = props?.data?.details?.map((e) => {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: e.content }}
          style={{ fontSize: "16px" }}
        ></div>
        <div>
          {e.library.map((el, index) => {
            if (el.type === "image") {
              return (
                <div
                  className="mt-5 mb-2"
                  title="Bấm vào để phóng to"
                  style={{ width: "80%", margin: "0 auto" }}
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
  return <>{listsContent}</>;
}

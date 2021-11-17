import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getNewsCategory } from "../../../../api/API";
import Image from "material-ui-image";
import ReactPlayer from "react-player";

const Education = (props) => {
  const [news, setNews] = useState([]);
  useEffect(async () => {
    if (props?.category?._id) {
      await getNewsCategory(props.category._id, "undefined", 0).then((res) => {
        if (res.data.length !== 0) {
          setNews(res.data[0].listContent);
        } else {
          setNews([]);
        }
      });
    }
  }, [props?.category?._id]);
  const lists = news.map((e, index) => {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: e.content }}
          style={{ fontSize: "18px" }}
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
  return <Grid>{lists}</Grid>;
};

export default Education;

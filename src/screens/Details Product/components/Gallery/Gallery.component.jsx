import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

export default function GalleryComponent(props) {
  const images = props?.image?.map((e, index) => {
    return {
      original: e?.url?.replace("http", "https"),
      thumbnail: e?.url,
    };
  });
  console.log(images);

  return (
    <>
      {props?.image?.length !== 0 ? (
        <ImageGallery items={images} showPlayButton={false} />
      ) : (
        <></>
      )}
    </>
  );
}

import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getIntroduce } from "../../../../api/API";
import Image from "material-ui-image";
import "./introduce.css";
import DetailsNews from "../../../News/components/DetailsNews";
export default function Introduce() {
  const [newss, setNewss] = useState();
  useEffect(async () => {
    await getIntroduce().then((res) => {
      setNewss(res.data);
    });
  }, []);

  console.log(newss);

  return <Grid>{newss ? <DetailsNews news={{ news: newss }} /> : <></>}</Grid>;
}

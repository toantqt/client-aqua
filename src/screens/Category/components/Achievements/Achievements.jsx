import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getAchievements } from "../../../../api/API";
import "./achievements.css";
import LightBoxComponent from "../../../../components/Light Box/LightBox.component";

const Achievements = (props) => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    await getAchievements().then((res) => {
      setData(res.data);
    });
  }, []);

  const lists = data.map((e, index) => {
    return (
      <Grid item lg={4} md={4} xs={12} className="mb-3">
        <div className="wrap-content">
          <div className="border-img">
            <LightBoxComponent url={e.library[0]?.url} title={e.title} />
          </div>
          <div className="title-img">
            <span>{e.title}</span>
          </div>
        </div>
      </Grid>
    );
  });

  return (
    <Grid>
      <div id="achievements">
        <Grid container spacing={3}>
          {lists}
        </Grid>
      </div>
    </Grid>
  );
};

export default Achievements;

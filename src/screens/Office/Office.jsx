import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import "./office.css";
import { getInformation } from "../../api/API";
export default function OfficePage() {
  const [contact, setContact] = useState([]);
  useEffect(async () => {
    window.scrollTo(0, 0);
    await getInformation().then((res) => {
      for (let item of res.data.offices) {
        setContact((contact) => [...contact, item]);
      }
      for (let item of res.data.partners) {
        setContact((contact) => [...contact, item]);
      }
    });
  }, []);

  const listsPartner = contact.map((e, index) => {
    return (
      <Grid
        item
        lg={12}
        md={12}
        xs={12}
        key={index}
        className="infor-item mt-5"
      >
        <Grid container spacing={1}>
          <Grid item lg={5} md={5} xs={12} style={{ height: "150px" }}>
            <Image
              src={e?.image?.url}
              style={{
                width: "100%",
                height: "100%",
                paddingTop: "0px !important",
                objectFit: "contain",
              }}
              imageStyle={{ borderRadius: "10px" }}
            />
          </Grid>
          <Grid item lg={7} md={7} xs={12}>
            <div className="mb-3">
              <span className="infor-name">{e?.name}</span>
            </div>
            <div>
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  <i class="fas fa-home"></i>
                </Grid>
                <Grid item xs={11}>
                  <span>{e?.address}</span>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  <i class="fas fa-phone-alt"></i>
                </Grid>
                <Grid item xs={11}>
                  <span>{e?.phoneNumber}</span>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  });
  return (
    <Grid>
      <div className="office">
        <div className="infor-title  mb-4">
          <span>Chi nhánh</span>
        </div>
        <Grid container spacing={2}>
          {listsPartner}
        </Grid>
      </div>
    </Grid>
  );
}

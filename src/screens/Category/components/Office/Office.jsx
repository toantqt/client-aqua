import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getInformation } from "../../../../api/API";
import Image from "material-ui-image";
import "./office.css";
import FormContactComponent from "../../../../components/Form Contact/FormContact.component";

const Office = (props) => {
  const [office, setOffice] = useState([]);
  const [partner, setPartner] = useState([]);
  useEffect(async () => {
    await getInformation().then((res) => {
      setOffice(res.data.offices);
      setPartner(res.data.partners);
    });
  }, []);

  const listsOffice = office.map((e, index) => {
    return (
      <Grid
        item
        lg={12}
        md={12}
        xs={12}
        key={index}
        className="infor-item mt-3"
      >
        <Grid container spacing={2}>
          <Grid item lg={5} md={5} xs={12}>
            <Image
              src={e.image?.url}
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
              <span className="infor-name">{e.name}</span>
            </div>
            <div>
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  <i class="fas fa-home"></i>
                </Grid>
                <Grid item xs={11}>
                  <span>{e.address}</span>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  <i class="fas fa-phone-alt"></i>
                </Grid>
                <Grid item xs={11}>
                  <span>{e.phoneNumber}</span>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  <i class="fas fa-envelope"></i>
                </Grid>
                <Grid item xs={11}>
                  <span>{e.email}</span>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  });

  const listsPartner = partner.map((e, index) => {
    return (
      <Grid
        item
        lg={12}
        md={12}
        xs={12}
        key={index}
        className="infor-item mt-3"
      >
        <Grid container spacing={1}>
          <Grid item lg={5} md={5} xs={12}>
            <Image
              src={e.image?.url}
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
              <span className="infor-name">{e.name}</span>
            </div>
            <div>
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  <i class="fas fa-home"></i>
                </Grid>
                <Grid item xs={11}>
                  <span>{e.address}</span>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  <i class="fas fa-phone-alt"></i>
                </Grid>
                <Grid item xs={11}>
                  <span>{e.phoneNumber}</span>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  <i class="fas fa-envelope"></i>
                </Grid>
                <Grid item xs={11}>
                  <span>{e.email}</span>
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
      <div id="office">
        <div>
          <div className="infor-title mb-4">
            <span>Trụ sở chính</span>
          </div>
          <Grid container spacing={2}>
            {listsOffice}
          </Grid>
        </div>
        <div>
          <div className="infor-title mt-5 mb-4">
            <span>Chi nhánh</span>
          </div>
          <Grid container spacing={2}>
            {listsPartner}
          </Grid>
        </div>
        <div className="mt-5">{/* <FormContactComponent /> */}</div>
      </div>
    </Grid>
  );
};

export default Office;

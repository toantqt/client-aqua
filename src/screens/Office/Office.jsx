import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getInformation } from "../../api/API";
import Image from "material-ui-image";
import "./office.css";
import FormContactComponent from "../../components/Form Contact/FormContact.component";
import about from "../../assets/image/about/about.jpg";

export default function OfficePage() {
  const [partner, setPartner] = useState([
    {
      name: "CTY TNHH_TM_DV Xử lý nước sạch AQUA VIỆT NAM.",
      address:
        "24/30 Lý Tự Trọng, Phường An Cư,Quận Ninh Kiều,TP Cần Thơ,VN.  ",
      phoneNumber: "0978590952",
    },
    {
      name: "CHI NHÁNH HẬU GIANG.",
      address:
        "số 807,Ấp Long An B,Thị Trấn Cái Tắc, Huyện Châu Thành A,Tỉnh Hậu Giang. ",
      phoneNumber: "0978590952",
    },
    {
      name: "CHI NHÁNH TIỀN GIANG",
      address: "khu phố Mỹ Lợi,P Nhị Mỹ,Cai Lậy,Tiền Giang. ",
      phoneNumber: "0978590952",
    },
    {
      name: "CHI NHÁNH BẾN TRE",
      address: "Ấp Phú Thạnh,Xã Phú Túc, Huyện Châu Thành,Tỉnh Bến Tre ",
      phoneNumber: "0978590952",
    },
  ]);
  // useEffect(async () => {
  //   await getInformation().then((res) => {
  //     setOffice(res.data.offices);
  //     setPartner(res.data.partners);
  //   });
  // }, []);

  const listsPartner = partner.map((e, index) => {
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
              src={about}
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

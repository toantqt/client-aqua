import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TableComponent from "../../../../components/Table/Table.component";
export default function BannerManager(props) {
  const [banner, setBanner] = useState([]);
  const columns = [
    { field: "stt", headerName: "STT", width: 90 },
    {
      field: "image",
      headerName: "Hình ảnh",
      width: 300,
      renderCell: (image) => {
        return (
          <div
            style={{
              width: "95%",
              margin: "0 auto",
              height: "200px",
              backgroundImage: `url(${image.row.image})`,
              backgroundSize: "cover",
            }}
          ></div>
        );
      },
    },
    { field: "category", headerName: "Danh mục", width: 200 },
    { field: "index", headerName: "Vị trí", width: 110 },
    { field: "date", headerName: "Ngày tạo", width: 120 },
    { field: "action", headerName: "Chức năng", width: 200 },
  ];

  const rows = banner.map((e, index) => {
    return {
      id: e.id,
      image: e.image,
      size: e.size,
      price: e.price,
    };
  });

  return (
    <Grid>
      <div className="header-title mb-3">
        <span>Quản Lý Banner: </span>
      </div>
      <div>
        <TableComponent columns={columns} rows={rows} />
      </div>
    </Grid>
  );
}

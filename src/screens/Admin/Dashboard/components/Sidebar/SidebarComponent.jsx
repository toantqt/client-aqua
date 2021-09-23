import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AdminSlug from "../../../../../resources/AdminSlug";
import "./sidebar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: "0px !important",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
export default function SideBarComponent(props) {
  const history = useHistory();
  const classes = useStyles();

  const [param, setParam] = React.useState("overview");
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(true);

  const handleClickSlug = (param, url) => {
    setParam(param);
    history.push(url);
  };
  const handleClickSlugLibrary = (param, url) => {
    setParam(param);
    history.push({
      pathname: url,
      search: `?q=${param}`,
    });
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const arr = [
    "Thiệp cưới",
    "Sinh nhật",
    "Thiệp mời",
    "Giáng sinh",
    "Tình nhân",
    "Q.Tế Phụ Nữ",
    "Thầy Cô",
    "Năm mới",
    "Sổ kí tên",
    "Bao lì xì",
    "Bao thư",
    "Name Card",
    "Menu",
    "Thiệp mời công ty",
    "Thiệp chúc công ty",
    "Popup sinh nhật",
    "Popup giáng sinh",
  ];

  return (
    // <div>
    //   <div className="header-logo">
    //     <img src={logo} alt="" width="100%" />
    //   </div>
    <List style={{ padding: "0px !important" }} className="sidebar">
      <ListItem
        button
        onClick={() =>
          handleClickSlug("categoryManager", AdminSlug.categoryManager)
        }
      >
        <ListItemIcon>
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText primary="Quản Lý danh mục" />
      </ListItem>

      <ListItem
        button
        onClick={() =>
          handleClickSlug("bannerManager", AdminSlug.bannerManager)
        }
      >
        <ListItemIcon>
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText primary="Quản Lý Banner" />
      </ListItem>

      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý thư viện" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={
              classes.nested + (param == "orderManager" ? " active" : "")
            }
            onClick={() =>
              handleClickSlugLibrary("image", AdminSlug.libraryManager)
            }
          >
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Hình ảnh" />
          </ListItem>

          <ListItem
            button
            className={classes.nested + (param == "approved" ? " active" : "")}
            onClick={() =>
              handleClickSlugLibrary("video", AdminSlug.libraryManager)
            }
          >
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Video" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    // </div>
  );
}

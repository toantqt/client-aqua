import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AdminSlug from "../../../../../resources/AdminSlug";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import CategoryIcon from "@material-ui/icons/Category";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import LineWeightIcon from "@material-ui/icons/LineWeight";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import TimerIcon from "@material-ui/icons/Timer";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import StoreIcon from "@material-ui/icons/Store";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import "./sidebar.css";
import { getCategoryType } from "../../../../../api/API";
import YouTubeIcon from '@material-ui/icons/YouTube';
import ErrorIcon from '@material-ui/icons/Error';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

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
  title: {
    color: "black",
  },
}));

export default function SideBarComponent(props) {
  const history = useHistory();
  const classes = useStyles();

  const [param, setParam] = React.useState("overview");
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const [product, setProduct] = React.useState([]);

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

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  return (
    // <div>
    //   <div className="header-logo">
    //     <img src={logo} alt="" width="100%" />
    //   </div>
    <List style={{ padding: "0px !important" }} className="sidebar">
      <ListItem
        button
        onClick={() =>
          handleClickSlugLibrary("gioi-thieu", AdminSlug.inforManager)
        }
      >
        <ListItemIcon>
          <HomeWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Giới thiệu công ty" className={classes.title} />
      </ListItem>
      <ListItem
        button
        onClick={() => handleClickSlugLibrary("tin-tuc", AdminSlug.newsManager)}
      >
        <ListItemIcon>
          <FindInPageIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý tin tức" className={classes.title} />
      </ListItem>

      <ListItem
        button
        onClick={() =>
          handleClickSlugLibrary("tuyen-dung", AdminSlug.newsManager)
        }
      >
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý tuyển dụng" className={classes.title} />
      </ListItem>

    

      <ListItem
        button
        onClick={() =>
          handleClickSlug("categoryManager", AdminSlug.categoryManager)
        }
      >
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý danh mục" className={classes.title} />
      </ListItem>

      <ListItem
        button
        onClick={() =>
          handleClickSlug("bannerManager", AdminSlug.bannerManager)
        }
      >
        <ListItemIcon>
          <AspectRatioIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý banner" className={classes.title} />
      </ListItem>

      <ListItem
        button
        onClick={() =>
          handleClickSlugLibrary("san-pham", AdminSlug.productManager)
        }
      >
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý sản phẩm" className={classes.title} />
      </ListItem>

      <ListItem button onClick={handleClick3}>
        <ListItemIcon>
          <ErrorIcon />
        </ListItemIcon>
        <ListItemText primary="Cảnh báo" className={classes.title} />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={
              classes.nested + (param == "orderManager" ? " active" : "")
            }
            onClick={() => handleClickSlug("contact", AdminSlug.warningManager)}
          >
            <ListItemIcon>
              <FindInPageIcon />
            </ListItemIcon>
            <ListItemText primary="Bài viết" className={classes.title} />
          </ListItem>
          <ListItem
            button
            className={
              classes.nested + (param == "orderManager" ? " active" : "")
            }
            onClick={() =>
              handleClickSlug("video", AdminSlug.libraryManager)
            }
          >
            <ListItemIcon>
              <YouTubeIcon />
            </ListItemIcon>
            <ListItemText primary="Video" className={classes.title} />
          </ListItem>
        </List>
      </Collapse>

      <ListItem
        button
        onClick={() => handleClickSlug("contact", AdminSlug.dealerManager)}
      >
        <ListItemIcon>
          <StoreMallDirectoryIcon />
        </ListItemIcon>
        <ListItemText primary="Đại lý" className={classes.title} />
      </ListItem>

      <ListItem
        button
        onClick={() =>
          handleClickSlugLibrary("he-thong-cua-hang", AdminSlug.questionManager)
        }
      >
        <ListItemIcon>
          <ContactSupportIcon />
        </ListItemIcon>
        <ListItemText primary="Liên hệ tư vấn" className={classes.title} />
      </ListItem>
    </List>
    // </div>
  );
}

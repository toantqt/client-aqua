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
import "./sidebar.css";
import { getCategoryType } from "../../../../../api/API";

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
  const [open2, setOpen2] = React.useState(true);
  const [product, setProduct] = React.useState([]);

  useEffect(async () => {
    await getCategoryType("product").then((res) => {
      setProduct(res.data);
    });
  }, []);

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

  const listsProduct = product.map((e, index) => {
    return (
      <ListItem
        button
        className={classes.nested + (param == "orderManager" ? " active" : "")}
        onClick={() => handleClickSlugLibrary(e.slug, AdminSlug.productManager)}
      >
        <ListItemIcon>
          <LineWeightIcon />
        </ListItemIcon>
        <ListItemText primary={e.categoryName} className={classes.title} />
      </ListItem>
    );
  });

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
          handleClickSlug("categoryManager", AdminSlug.categoryManager)
        }
      >
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý danh mục" className={classes.title} />
      </ListItem>

      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý sản phẩm" className={classes.title} />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {listsProduct}
        </List>
      </Collapse>

      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <StoreIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý đại lý" className={classes.title} />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={
              classes.nested + (param == "orderManager" ? " active" : "")
            }
            // onClick={() =>
            //   handleClickSlugLibrary(e.slug, AdminSlug.productManager)
            // }
          >
            <ListItemIcon>
              <TimerIcon />
            </ListItemIcon>
            <ListItemText primary="Đang đăng kí" className={classes.title} />
          </ListItem>
          <ListItem
            button
            className={
              classes.nested + (param == "orderManager" ? " active" : "")
            }
            // onClick={() =>
            //   handleClickSlugLibrary(e.slug, AdminSlug.productManager)
            // }
          >
            <ListItemIcon>
              <BeenhereIcon />
            </ListItemIcon>
            <ListItemText primary="Đã đăng kí" className={classes.title} />
          </ListItem>
        </List>
      </Collapse>

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
        onClick={() => handleClickSlug("contact", AdminSlug.contactManager)}
      >
        <ListItemIcon>
          <ContactSupportIcon />
        </ListItemIcon>
        <ListItemText primary="Liên hệ" className={classes.title} />
      </ListItem>
    </List>
    // </div>
  );
}

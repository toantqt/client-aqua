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
import FindInPageIcon from "@material-ui/icons/FindInPage";
import CategoryIcon from "@material-ui/icons/Category";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ImageIcon from "@material-ui/icons/Image";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
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
          handleClickSlugLibrary("quy-trinh-nuoi-tom", AdminSlug.newsManager)
        }
      >
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Quy trình nuôi tôm" className={classes.title} />
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
        <ListItemText primary="Tin tuyển dụng" className={classes.title} />
      </ListItem>
      <ListItem
        button
        onClick={() =>
          handleClickSlug("categoryManager", AdminSlug.categoryManager)
        }
      >
        <ListItemIcon>
          <CastForEducationIcon />
        </ListItemIcon>
        <ListItemText
          primary="Liên kết đào tạo
        "
          className={classes.title}
        />
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
          handleClickSlugLibrary("san-pham", AdminSlug.productManager)
        }
      >
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý sản phẩm" className={classes.title} />
      </ListItem>

      <ListItem
        button
        onClick={() =>
          handleClickSlugLibrary("tom-giong", AdminSlug.productManager)
        }
      >
        <ListItemIcon>
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý tôm giống" className={classes.title} />
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

      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <PhotoLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý thư viện" className={classes.title} />
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
              <ImageIcon />
            </ListItemIcon>
            <ListItemText primary="Hình ảnh" className={classes.title} />
          </ListItem>

          <ListItem
            button
            className={classes.nested + (param == "approved" ? " active" : "")}
            onClick={() =>
              handleClickSlugLibrary("video", AdminSlug.libraryManager)
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

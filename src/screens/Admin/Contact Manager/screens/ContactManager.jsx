import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import AdminSlug from "../../../../resources/AdminSlug";
import TableComponent from "../../../../components/Table/Table.component";
import {
  getAllBanner,
  covertDate,
  deleteBanner,
  getAllCategory,
  deleteContact,
} from "../../../../api/AdminAPI";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import ModalImageComponent from "../../../../components/Modal Image/ModalImage.component";
import ModalConfirmComponent from "../../../../components/Modal/ModalConfirm.component";
import SelectCategory from "../../../../components/Category Select/CategorySelect.component";
import Button from "@material-ui/core/Button";
import { getInformation } from "../../../../api/API";

export default function ContactManager(props) {
  const history = useHistory();
  const [banner, setBanner] = useState([]);
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [reload, setReload] = useState(false);
  const [contact, setContact] = useState([]);
  const [selectID, setSelectID] = useState("");
  const [type, setType] = useState();

  useEffect(async () => {
    props.handleLoading(true);
    setContact([]);
    await getInformation().then((res) => {
      for (let item of res.data.offices) {
        setContact((contact) => [...contact, { contact: item, type: 1 }]);
      }
      for (let item of res.data.partners) {
        setContact((contact) => [...contact, { contact: item, type: 2 }]);
      }
    });
    props.handleLoading(false);
  }, [reload]);

  const handleClickDelete = async (data) => {
    setSelectID(data.contact._id);
    setType(data.type);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setSelectID("");
    setOpenConfirm(false);
  };
  const handleDeleteContact = async () => {
    const data = {
      contactID: selectID,
      type: type,
    };
    props.handleLoading(true);
    await deleteContact(data).then((res) => {
      handleCloseConfirm();
      setReload(!reload);
    });
  };

  const columns = [
    { field: "stt", headerName: "STT", width: 90 },

    { field: "name", headerName: "Tr??? s??? (chi nh??nh)", width: 300 },
    { field: "address", headerName: "?????a ch???", width: 300 },
    { field: "phoneNumber", headerName: "??i???n tho???i", width: 150 },
    { field: "email", headerName: "Email", width: 200 },

    {
      field: "action",
      headerName: "Ch???c n??ng",
      width: 250,
      renderCell: (action) => {
        return (
          <>
            <IconButton
              aria-label="delete"
              className="btn-action btn-a-3"
              onClick={() => {
                handleClickDelete(action.row.action);
              }}
            >
              <DeleteForeverIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const rows = contact.map((e, index) => {
    return {
      id: index,
      stt: index + 1,
      name: e.contact?.name,
      address: e.contact?.address,
      phoneNumber: e.contact?.phoneNumber,
      email: e.contact?.email,
      action: e,
    };
  });

  const handleClickAdd = () => {
    history.push(AdminSlug.addContact);
  };

  return (
    <Grid>
      <div className="header-title mb-3">
        <span>Qu???n L?? ?????i L??: ({contact.length}) </span>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<EditIcon />}
          style={{
            textTransform: "none",
            float: "right",
          }}
          onClick={handleClickAdd}
        >
          Th??m li??n h??? m???i
        </Button>
      </div>

      <div>
        <TableComponent columns={columns} rows={rows} />
        <ModalConfirmComponent
          open={openConfirm}
          handleClose={handleCloseConfirm}
          title="X??c nh???n x??a li??n h???"
          handleDelete={handleDeleteContact}
        />
      </div>
    </Grid>
  );
}

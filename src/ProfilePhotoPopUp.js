import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import profilePhoto from "./photos/profilePhoto.jpeg";


function ProfilePhotoPopUp() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        //   variant="outlined"
        sx={{ borderColor: "black", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide My Face" : "Show My Face"}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <img
            src={profilePhoto}
            alt="Levi Deutsch"
            style={{ width: "150px", objectFit: "cover" }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default ProfilePhotoPopUp;

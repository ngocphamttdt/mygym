import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import React, { ReactChild } from "react";

interface IDialogProps {
  children: ReactChild
  isOpen: boolean,
  onClose: () => void,
  onSuccess: () => void,
  title: string

}

export const DialogBox = ({ children, isOpen, onClose, onSuccess, title }: IDialogProps) => {

  const handleClose = () => onClose()
  const handleSuccess = () => onSuccess()

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleSuccess} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>

  )
}
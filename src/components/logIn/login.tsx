
import { Box, Button, FormControl, Grid, Modal, TextField, Typography } from "@mui/material"
import { IUser } from "components/models/userInterface";
import { getUser } from "db/repositories/users";
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { AuthActions } from "store/actions/authActions";
import { red } from '@mui/material/colors';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
interface ILoginProps {
  onClose: (param: boolean) => any
}

const color = red[500];
export const Login = ({ onClose }: ILoginProps) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState<boolean>(true)
  const [errorSignIn, setErrorSignIn] = useState<boolean>()

  const handleClose = () => setOpen(false)

  const usernameRef = useRef<HTMLInputElement>()
  const passWRef = useRef<HTMLInputElement>()


  const onSignIn = () => {
    const users: IUser[] = getUser()
    const username = usernameRef.current?.value
    const password = passWRef.current?.value
    const res = users.find(x => (x.name === username && x.password === password))
    if (!res) setErrorSignIn(true)
    else {
      dispatch({ type: "USER_SIGNIN", payload: res } as AuthActions)
      handleClose()
    }
  }

  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            rowSpacing={3}
            columns={{ md: 12 }}
            style={{ marginTop: '10px' }}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField id="outlined-basic" label="Username" variant="outlined" inputRef={usernameRef} />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField id="outlined-basic" label="Password" variant="outlined" inputRef={passWRef} />
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            rowSpacing={3}
            columns={{ md: 12 }}
            style={{ marginTop: '10px' }}>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }} >
              <Button variant="contained" onClick={onSignIn}>Sign in</Button>
              <Button variant="text"
                onClick={() => {
                  setOpen(false)
                  onClose(false)
                }}>
                Cancel
              </Button>
            </Grid>
          </Grid>
          {
            errorSignIn && <Grid
              container
              spacing={{ xs: 1, md: 1 }}
              rowSpacing={3}
              columns={{ md: 12 }}
              style={{ marginTop: '10px' }}>
              <Grid item xs={12} color={color}>
                username or password is not correct
              </Grid>
            </Grid>
          }
        </Box>
      </Modal>
    </div>
  )
}
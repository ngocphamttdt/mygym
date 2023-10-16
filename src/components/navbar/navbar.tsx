import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import React, { useState } from 'react'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Login } from 'components/logIn';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from 'components/models/userInterface';
import { AuthActions } from 'store/actions/authActions';
import { USER_SIGNOUT } from 'store/constants/authConstants';

const pages = ['Home', 'Product', 'Chart', 'API', 'Social'];

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authSelector: IUser = useSelector((state: any) => state.auth.data)

  console.log('authSelector', authSelector);


  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page: any) => {
    if (page !== '' || page === null) {
      navigate(page === 'Home' ? '/' : `/${page.toLowerCase()}`)
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const gotoShoppingCart = () => navigate('product/shopping')
  const handleOpen = () => setIsOpen(true)
  const handleClose = (param: boolean) => setIsOpen(param)

  const handleSignOut = () => {
    dispatch({ type: USER_SIGNOUT, payload: {} } as AuthActions)
    handleCloseUserMenu()
    setIsOpen(!isOpen)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MYGYM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>
          <FitnessCenterIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MYGYM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}

          </Box>
          <Box sx={{ width: 1 / 4, display: { md: 'flex' } }}>
            <Button
              key={4}
              sx={{ width: '100%', color: 'white', display: 'block' }}
              startIcon={<ShoppingCartIcon />}
              onClick={gotoShoppingCart}
            >
              {'Shopping Cart'}
            </Button>
            {
              authSelector && Object.keys(authSelector).length ?
                <Box sx={{ flexGrow: 0, marginTop: '10px' }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">user: {authSelector.userName}</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleSignOut}>
                      <Typography textAlign="center">Sign out</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
                :
                <Button
                  variant="outlined"
                  sx={{ width: '100%', color: 'white', display: 'block' }}
                  onClick={handleOpen}
                >{'Login'}
                </Button>
            }

            {isOpen &&
              <Login onClose={handleClose} />
            }

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar
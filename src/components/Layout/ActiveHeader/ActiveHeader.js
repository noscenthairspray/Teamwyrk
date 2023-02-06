import { Link } from "react-router-dom";
import styles from "./ActiveHeader.module.css";
import Button from '@mui/material/Button';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';



const settings = ['Account Settings', 'Log Out'];

const ActiveHeader = () => {

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header>
      <nav className={styles.navContainer}>
        <Link to="/">
          <div className={styles.navBrand}>
            <span className={styles.brandText}>TeamWyrk</span>
            <span className={styles.builtByText}>built by Bootcamp2</span>
          </div>
        </Link>
        <div className={styles.linkWrapper}>
          <ul className={styles.navLinks}>
            <li>
                <Link to="/request/form">
                  <Button variant="text">Request Feed</Button>
                </Link> 
            </li>
            <li>
              <Link to="/about">
                <Button variant="text">About</Button>
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <Button variant="text">FAQ</Button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Button variant="text">Contact Us</Button>
              </Link>
            </li>
          </ul>
        
        <div className={styles.accessButtons}>
        <Box sx={{ flexGrow: 0}}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
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
              {settings.map((setting) => (
                <MenuItem color= "yellow" key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </div>

        </div>
      </nav>
    </header>
  );
};

export default ActiveHeader;
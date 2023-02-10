import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const settings = ["Account Settings", "Log Out"];

const ProfileDropDown = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box>
        <Box sx={{ flexGrow: 0 }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            MenuListProps={{ disablePadding: true }}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                width: "227px",
                border: "1px solid rgba(26, 26, 26, 0.1)",
                boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.16)",
                borderRadius: "20px",
                pt: "50px",
                pb: "50px",
              },
            }}
            sx={{ pt: 0, pb: 0 }}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={handleCloseUserMenu}
                sx={{
                  pt: "10px",
                  pb: "10px",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#FFE8AC",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#222F65",
                    fontSize: "18px",
                    lineHeight: "24px",
                    fontFamily: "PT Sans",
                    fontWeight: 400,
                  }}
                >
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default ProfileDropDown;

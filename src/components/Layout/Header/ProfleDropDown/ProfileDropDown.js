import { useState } from "react";
import { Avatar, Box, Link, Menu, MenuItem, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { signOut } from "../../../../firebase";

const settings = [
  { title: "Account Settings", href: "/" },
  { title: "Sign out", href: null },
];

const ProfileDropDown = ({ user }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async (title) => {
    if (title !== "Sign out") {
      return null;
    }
    await signOut();
  };

  return (
    <>
      <Box>
        <Box sx={{ flexGrow: 0 }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src={user?.photoURL} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            transformOrigin={{
              horizontal: "center",
              vertical: "top",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            MenuListProps={{ disablePadding: true }}
            PaperProps={{
              elevation: 0,
              sx: {
                top: "50px",
                width: "227px",
                border: "1px solid rgba(26, 26, 26, 0.1)",
                boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.16)",
                borderRadius: "20px",
                pt: "50px",
                pb: "50px",
              },
            }}
            sx={{ pt: 0, pb: 0, top: "28px" }}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting.title}
                onClick={handleCloseUserMenu}
                sx={{
                  pt: "10px",
                  pb: "10px",
                  "&:hover": {
                    backgroundColor: "#FFE8AC",
                  },
                }}
              >
                <Typography
                  component={Link}
                  href={setting.href}
                  onClick={() => handleLogout(setting.title)}
                  sx={{
                    textAlign: "center",
                    textDecoration: "none",
                    color: "#222F65",
                    fontSize: "18px",
                    lineHeight: "24px",
                    fontFamily: "PT Sans",
                    fontWeight: 400,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {setting.title}
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

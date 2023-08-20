import * as React from "react";
import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import ComputerIcon from "@mui/icons-material/Computer";
import PsychologyIcon from "@mui/icons-material/Psychology";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Slider,
  Typography,
} from "@mui/material";

const DrawerC = ({ setDrawerOpen }) => {
  return (
    <>
      <img src={require("../../assets/User.jpg")} alt="Logo" />

      <List>
        <Link to="/" style={{ color: "white", textDecoration: "inherit" }}>
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <ListItemIcon>
              <PersonIcon color="secondary" />
            </ListItemIcon>
            <ListItemText>About me</ListItemText>
          </ListItemButton>
        </Link>

        <Link
          to="/education"
          style={{ color: "white", textDecoration: "inherit" }}
        >
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <ListItemIcon>
              <SchoolIcon color="secondary" />
            </ListItemIcon>
            <ListItemText>education</ListItemText>
          </ListItemButton>
        </Link>

        <Link to="/skils" style={{ color: "white", textDecoration: "inherit" }}>
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <ListItemIcon>
              <PsychologyIcon color="secondary" />
            </ListItemIcon>
            <ListItemText>Skils</ListItemText>
          </ListItemButton>
        </Link>

        <Link
          to="/Experiences"
          style={{ color: "white", textDecoration: "inherit" }}
        >
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <ListItemIcon>
              <ComputerIcon color="secondary" />
            </ListItemIcon>
            <ListItemText>Experiences</ListItemText>
          </ListItemButton>
        </Link>
      </List>

      <Divider />

      <Typography
        variant="h6"
        component="h6"
        color="secondary"
        sx={{ my: "1cm", mr: "39px" }}
      >
        {" "}
        languages
      </Typography>

      <Box sx={{ width: 250 }}>
        <Typography sx={{ color: "white" }}>persian (100%)</Typography>

        <Slider sx={{ ml: "9px" }} defaultValue={100} disabled />

        <Typography sx={{ color: "white" }}>English(60%)</Typography>
        <Slider sx={{ ml: "9px" }} defaultValue={60} disabled />
      </Box>
    </>
  );
};

export default DrawerC;

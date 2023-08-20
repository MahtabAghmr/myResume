import * as React from 'react';
import { useState } from 'react';
import { MenuRounded } from "@mui/icons-material";
import {
  Fab,
  Box,
  Drawer,
  CssBaseline,
  Hidden
} from '@mui/material';
import DrawerC from './DrawerC';

const drawerWidth = 300;

const MyAppBar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (

    <Box sx={{ display: 'flex' }}>

      <CssBaseline />

      <Box sx={{ m: "10px" }}>
        <Fab onClick={() => setDrawerOpen(true)}>
          <MenuRounded />
        </Fab>
      </Box>

      <Hidden mdDown>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
        >
          <DrawerC setDrawerOpen={setDrawerOpen} />
        </Drawer >
      </Hidden>


      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none"
          }
        }}
        variant="temporary"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerC setDrawerOpen={setDrawerOpen}/>
      </Drawer>

    </Box >
  );
}

export default MyAppBar;
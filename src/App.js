import MyAppBar from "./components/AppBar/MyAppBar";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import AboutMe from "./components/AboutMe";
import Educations from "./components/Educations";
import Skils from "./components/Skils";
import Experiences from "./components/Experiences";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (

    <ThemeProvider theme={theme}>

      <Grid container >

        <Grid sx={{ textAlign: "center" }} xs={3}>
          <MyAppBar />
        </Grid>


        <Grid sx={{ textAlign: "center" }} md={9} xs={12}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/education" element={<Educations />} />
            <Route path="/Skils" element={<Skils />} />
            <Route path="/Experiences" element={<Experiences />} />


          </Routes>
        </Grid>

      </Grid>



    </ThemeProvider>

  );
}

export default App;

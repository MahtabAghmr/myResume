import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Divider, Typography, Box } from '@mui/material';
import {
    Person
} from '@mui/icons-material';
import EnglishInformation from './EnglishInformation';
import PersianInformation from './PersianInformation';

const AboutMe = () => {

    return (
        <Box>

            <Divider sx={{mt:"1cm"}} >
                <Typography variant="h4"> ( درباره ی من  ) <Person /> About me </Typography>
            </Divider>

            <Grid container sx={{ mt: "2cm" }}>

                <Grid sx={{ textAlign: "center" }} lg={6} xs={12}>
                    <EnglishInformation />
                </Grid>


                <Divider orientation="vertical" flexItem />

                <Grid sx={{ textAlign: "center" }} lg={5} xs={12}>

                    <PersianInformation />
                    <Divider orientation="vertical" flexItem />

                </Grid>
            </Grid>
        </Box>
    );
}
export default AboutMe;
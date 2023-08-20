import * as React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {
    Typography,
    Divider,
    Box
} from '@mui/material';
import EnglishExperiences from "./EnglishExperiences";
import PersianExperiences from "./PersianExperiences";

const Experiences = () => {

    return (
        <>
            <Divider variant="inset" sx={{ mt: "1cm" }} >
                <Typography variant="h4"> <CheckBoxIcon /> Experiences</Typography>
            </Divider>

            <Box dir="rtl" sx={{ m: "2cm" }}>
                <EnglishExperiences />
            </Box>

            <Divider variant="inset" sx={{ mt: "0.5cm" }} >
                <Typography variant="h4"> <CheckBoxIcon /> تجربه ها </Typography>
            </Divider>

            <Box dir="rtl" sx={{ m: "2cm" }}>
                <PersianExperiences />
            </Box>
        </>
    );
}

export default Experiences;
import * as React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {
    Typography,
} from '@mui/material';

const EnglishExperiences = () => {

    return (
        <>
            <Typography variant="h5">
                <CheckBoxIcon />
                I worked in a company as a frontEnd developer for 3 months
               
            </Typography>
            <Typography variant="h5" sx={{ mt: "1cm" }}>
                <CheckBoxIcon />
                I passed Mr. Ghorbani's react course
            </Typography>
            <Typography variant="h5" sx={{ mt: "1cm" }}>
                <CheckBoxIcon />
                I passed Mr. Madaeni's js course
            </Typography>
        </>
    );
}

export default EnglishExperiences;
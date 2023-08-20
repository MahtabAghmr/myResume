import * as React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import { Typography, Divider } from '@mui/material';
import EnglishEducations from './EnglishEducations';
import PersianEducations from './PersianEducations';

const Educations = () => {

    return (
        <>

            <Divider variant="inset" sx={{ mt: "1cm" }} >
                <Typography variant="h5"> <SchoolIcon /> education</Typography>
            </Divider>

            <EnglishEducations />

            <Divider variant="inset" >
                <Typography variant="h5"> سوابق تحصیلی <SchoolIcon /> </Typography>
            </Divider>

            <PersianEducations />

        </>
    );
}
export default Educations;
import * as React from 'react';
import {  Typography } from '@mui/material';
import {
    Person,
    PhoneIphone,
    Mail,
    LocationOn,
    Cake
} from '@mui/icons-material';


const EnglishInformation = () => {

    return (
        <>
            <Typography variant="h6" noWrap component="div">
                <Person color="icon" />
                Mahtab Aghamiri
            </Typography>

            <Typography sx={{ mt: "0.5cm" }} variant="h6" noWrap component="div">
                < PhoneIphone color="icon" />
                09907244354
            </Typography>

            <Typography sx={{ mt: "0.5cm" }} variant="h6" noWrap component="div">
                <Mail color="icon" />
                mahtab_aghamiri@yahoo.com
            </Typography>

            <Typography sx={{ mt: "0.5cm" }} variant="h6" noWrap component="div">
                <LocationOn color="icon" />
                tehran
            </Typography>

            <Typography sx={{ mt: "0.5cm" }} variant="h6" noWrap component="div">
                <Cake color="icon" />
                2000
            </Typography>


        </>
    );
}
export default EnglishInformation;
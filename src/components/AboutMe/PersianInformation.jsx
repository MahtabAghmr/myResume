import * as React from 'react';
import { Typography } from '@mui/material';
import {
    Person,
    PhoneIphone,
    Mail,
    LocationOn,
    Cake
} from '@mui/icons-material';

const PersianInformation = () => {

    return (
        <>

            <Typography variant="h6" noWrap component="div">
                مهتاب آقامیری
                <Person color="icon" />
            </Typography>

            <Typography sx={{ mt: "0.5cm" }} variant="h6" noWrap component="div">
                09907244354
                < PhoneIphone color="icon" />
            </Typography>

            <Typography sx={{ mt: "0.5cm" }} variant="h6" noWrap component="div">
                mahtab_aghamiri@yahoo.com
                <Mail color="icon" />
            </Typography>

            <Typography sx={{ mt: "0.5cm" }} variant="h6" noWrap component="div">
                تهران
                <LocationOn color="icon" />
            </Typography>

            <Typography sx={{ mt: "0.5cm" }} variant="h6" noWrap component="div">
                1379
                <Cake color="icon" />
            </Typography>


        </>
    );
}
export default PersianInformation;
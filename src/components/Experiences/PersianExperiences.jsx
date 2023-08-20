import * as React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {
    Typography
} from '@mui/material';

const PersianExperiences = () => {

    return (
        <>
            <Typography variant="h5">
                کار کردن به عنوان برنامه نویس فرانت در یک شرکت خصوصی به مدت 3 ماه
             
                <CheckBoxIcon />
            </Typography>
            <Typography variant="h5" sx={{ mt: "1cm" }}>
                گذراندن دوره ی
                React
                استاد قربانی
                <CheckBoxIcon />
            </Typography>

            <Typography variant="h5" sx={{ mt: "1cm" }}>
                گذراندن دوره ی
                js
                استاد مداینی
                <CheckBoxIcon />
            </Typography>

        </>
    );
}

export default PersianExperiences;
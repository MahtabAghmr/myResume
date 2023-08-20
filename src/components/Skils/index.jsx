import * as React from 'react';
import {
    Box,
    List,
    Divider,
    Typography
} from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ListItems from './ListItems';

const Skils = () => {

    return (
        <Box dir="rtl" >

            <Divider variant="inset" sx={{ mt: "1cm" }}>
                <Typography variant="h5"> (مهارت ها)  <PsychologyIcon />Skils  </Typography>
            </Divider>

            <List sx={{ width: '100%', textAlign: "right" }}>
                <ListItems />
            </List>
        </Box>
    );
}

export default Skils;
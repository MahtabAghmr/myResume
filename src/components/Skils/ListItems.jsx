import * as React from 'react';
import {
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
} from '@mui/material';

const ListItems = () => {

    return (
        <>

            <ListItem sx={{ textAlign: "right" }}>
                <ListItemAvatar>
                    <img alt="html" style={{ width: "1cm", height: "1cm" }} src={require("../../assets/html.jpg")} />
                </ListItemAvatar>
                <ListItemText
                    primary="HTML"
                />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem sx={{ textAlign: "right" }}>
                <ListItemAvatar>
                    <img alt="css" style={{ width: "1cm", height: "1cm" }} src={require("../../assets/css.jpg")} />
                </ListItemAvatar>
                <ListItemText
                    primary="CSS"
                />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem sx={{ textAlign: "right" }}>
                <ListItemAvatar>
                    <img alt="js" style={{ width: "1cm", height: "1cm" }} src={require("../../assets/js.jpg")} />
                </ListItemAvatar>
                <ListItemText
                    primary="JS"
                />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem sx={{ textAlign: "right" }}>
                <ListItemAvatar>
                    <img alt="react" style={{ width: "1cm", height: "1cm" }} src={require("../../assets/react.jpg")} />
                </ListItemAvatar>
                <ListItemText
                    primary="REACT"
                />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem sx={{ textAlign: "right" }}>
                <ListItemAvatar>
                    <img alt="bootstrap" style={{ width: "1cm", height: "1cm" }} src={require("../../assets/bootstrap.jpg")} />
                </ListItemAvatar>
                <ListItemText
                    primary="BOOTSTRAP"
                />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem sx={{ textAlign: "right" }}>
                <ListItemAvatar>
                    <img alt="C++" style={{ width: "1cm", height: "1cm" }} src={require("../../assets/c++.jpg")} />
                </ListItemAvatar>
                <ListItemText
                    primary="++C"
                />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem sx={{ textAlign: "right" }}>
                <ListItemAvatar>
                    <img alt="mysql" style={{ width: "1cm", height: "1cm" }} src={require("../../assets/mysql.jpg")} />
                </ListItemAvatar>
                <ListItemText
                    primary="MYSQL"
                />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem sx={{ textAlign: "right" }}>
                <ListItemAvatar>
                    <img alt="mui" style={{ width: "1cm", height: "1cm" }} src={require("../../assets/mui.jpg")} />
                </ListItemAvatar>
                <ListItemText
                    primary="MATERIAL UI"
                />
            </ListItem>

        </>
    );
}

export default ListItems;
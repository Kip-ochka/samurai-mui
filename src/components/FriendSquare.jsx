import React from 'react';
import {Avatar, Box} from "@mui/material";
import Typography from "@mui/material/Typography";

const FriendSquare = ({name, avatar}) => {
    return (
        <Box sx={{display:'flex', gap:1, alignItems:'center'}}>
            <Avatar alt={name} src={avatar} sx={{width:'50px', height:'50px'}}/>
            <Typography variant='h4' component='p'>{name}</Typography>
        </Box>
    );
};

export default FriendSquare;
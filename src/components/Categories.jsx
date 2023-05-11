import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";

export const Categories = ({ item, bodyPart, setBodyPart }) => {

    const StackSx = {
        width: "200px",
        height: "200px",
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        cursor: "pointer",
        gap: "1rem",
        textTransform: "uppercase"
    }
    
    const TypoSx = {
        fontWeight: 'bolder',
        fontSize: "0.7rem",
    }

    return (
        <Stack
            sx={StackSx}
            type="button"
            alignItems="center"
            justifyContent="center"
            onClick={()=> setBodyPart(item) }
        >
            <Typography sx={TypoSx}> {item} </Typography>
        </Stack>
    );
};

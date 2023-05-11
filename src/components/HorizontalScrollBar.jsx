import React, { useContext } from "react";
import { Categories } from "./Categories";
import { ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import { Box } from "@mui/material";
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { ExerciseCard } from "./ExerciseCard";


const LetfArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <button onClick={()=> scrollPrev()}> Atras </button>)
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <button onClick={()=> scrollNext()}> Delante </button>)
}

export const HorizontalScrollBar = ({ data, bodyParts, bodyPart, setBodyPart }) => {
    return (
        <ScrollMenu 
            RightArrow={RightArrow} 
            LetfArrow={LetfArrow} >
                {data.map((item) => (
                    <Box key={item.id || item}>
                        {bodyParts ? 
                            <Categories
                                item={item}
                                bodyPart={bodyPart}
                                setBodyPart={setBodyPart}/>
                            : <ExerciseCard exercise={item}/>}
                    </Box>
                )
                )}
        </ScrollMenu>
    );
};


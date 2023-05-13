import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box } from "@mui/material";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { ItemInfo } from "./ItemInfo";

const LetfArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return <button onClick={() => scrollPrev()}> Atras </button>;
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return <button onClick={() => scrollNext()}> Delante </button>;
};

export const HorizontalScrollBar = ({ data }) => {

    console.log(data)

    return (
        <ScrollMenu RightArrow={RightArrow} LetfArrow={LetfArrow}>
            {data.map((tvshow) => (
                <Box key={tvshow.id || tvshow}>
                    {data && <ItemInfo data={tvshow}/>}
                </Box>
            )
            )}

            {/* {trendingMovies &&
                trendingMovies.map((movie) => (
                    <Box key={movie.id || movie}>
                        <ItemInfo data={movie} />
                    </Box>
                ))} */}
                {/* {trendingTv && trendingTv.map((tvshow) => (
                    <Box key={tvshow.id || tvshow}>
                        <ItemInfo data={tvshow} />
                    </Box>
                ))} */}
        </ScrollMenu>
    );
};



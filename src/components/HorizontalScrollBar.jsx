import React from "react";
import { Categories } from "./Categories";

export const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
    console.log(data);
    return (
        <>
            <div>ALL items</div>
            <div>
                {(data.lenght > 0) ? (
                    data.map((item) => 
                        <>
                        <Categories
                            key={item.id || item}
                            item={item}
                            bodyPart={bodyPart}
                            setCategories={setBodyPart}
                        />
                        </>                  
                    )
                ) : (
                    <p>No hay resultados</p>
                )}
            </div>
        </>
    );
};

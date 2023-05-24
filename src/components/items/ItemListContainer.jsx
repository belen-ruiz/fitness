import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOp } from "../../hooks/fetchData";
import { ItemList } from "./ItemList";
import { useDataContext } from "../../context/DataProvider"
//1
//logica y mapa de la lista
//viene de series o movies
export const ItemListContainer = ({ data }) => {   

    //console.log(data)
    
    return (
        <div className="item-container">
            <div className="item-list">
                {data && data.map((db)=>(
                    <ItemList key={db.id} data={db} />
                ))}                
            </div>
        </div>
    );
};
//genre_ids tiene que coincidir con currentGenre.id
  // const genre = data.filter(genre => idGenre == gender.id)
  // setItem(...item, item)
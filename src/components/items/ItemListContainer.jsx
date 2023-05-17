import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOp } from "../../hooks/fetchData";
import { ItemList } from "./ItemList";
import { useDataContext } from "../../context/DataProvider"
//1
//logica y mapa de la lista
//viene de series o movies
export const ItemListContainer = ({data, results, currentGenreIds }) => {   

    
//   //tvshows.genre_ids == currentGenreIds && renderiza
//   const genreIds = genreId.filter(ids => ids === currentGenreIds)
//   console.log(currentGenreIds)
//   console.log(genreIds)

    console.log(data)
    
    return (
        <div className="item-container">
            <div className="item-list">
                {results && results.map((result)=>(
                    <ItemList key={result.id} data={result} />
                ))}
                {data && data.map((picture)=>(
                    <ItemList key={picture.id} data={picture} />
                ))}                
            </div>
        </div>
    );
};
//genre_ids tiene que coincidir con currentGenre.id
  // const genre = data.filter(genre => idGenre == gender.id)
  // setItem(...item, item)
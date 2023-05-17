import React, { useEffect, useState, useRef } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDataContext } from "../../context/DataProvider"

//viene de series
export const CatBanner = ({value, currentGenreIds, setCurrentGenreIds, genresTv, genresMovie}) => {

    const [searchParams, setSearchParams] = useSearchParams()
    
    const handleChange = (e) => {
        setCurrentGenreIds(parseInt(e.target.value))
        setSearchParams({"search": value})
    }
    //console.log(currentGenreIds)
    
    //si obj id == datagenreid return obj name
  return (
    <div className='item-container'>
        <div className='banner-info item-list'>

            { genresTv && 
                (<div>
                    <h1>Series</h1>
                    <select name="type" id="type" onChange={handleChange}>
                        <option>
                            Géneros
                        </option>            
                        {genresTv.map((e) => (
                            <option id={e.id} key={e.name} value={e.id}>
                                {e.id}-{e.name}
                            </option> ))}
                    </select>
                </div>
            )}

            { genresMovie &&
                (<div>
                    <h1>Peliculas</h1>
                    <select name="type" id="type" onChange={handleChange}>
                        <option>
                            Géneros
                        </option>
                        {genresMovie.map((e) => (
                            <option id={e.id} key={e.name} value={e.id}>
                            {e.id}-{e.name}
                        </option> ))}
                    </select>
                </div>
            )}  
        </div>
    </div>
  )
}
  
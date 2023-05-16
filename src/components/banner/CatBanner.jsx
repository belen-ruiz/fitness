import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDataContext } from "../../context/DataProvider"

//viene de series
export const CatBanner = ({value, setCurrentGenre, genresTv}) => {
    const { genresMovie } = useDataContext()
    const { series } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    console.log(genresTv.id)

    useEffect(() => {
        setSearchParams({"keyword": value})
    }, [value])

    console.log(value)
    
    const handleChange = (e) => {
        setCurrentGenre(e.target.value)
    }

    //si obj id == datagenreid return obj name
  return (
    <div className='item-container'>
        <div className='banner-info item-list'>

            { (series == "series") ? 
            (<div>
                <h1>Series</h1>
                <select name="type" id="type" onChange={handleChange}>
                    <option>
                        Géneros
                    </option>            
                    {genresTv.map((e) => (
                        <option id={e.id} key={e.name}>
                            {e.id}-{e.name}
                        </option> ))}
                </select>
            </div>
            ):(
            (<div>
                <h1>Peliculas</h1>
                <select name="type" id="type">
                    <option>
                        Géneros
                    </option>
                    {genresMovie.map((e) => (
                        <option>
                            {e.name}
                        </option> ))}
                </select>
            </div>)
            )
            }
           
        </div>
    </div>
  )
}
  
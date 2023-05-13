import React from 'react'
import { HorizontalScrollBar } from './Scroll'
import { useDataContext } from "../../context/DataProvider"

export const ContainerList = () => {

const { trendingTv, trendingMovies} = useDataContext()

console.log(trendingTv)
console.log(trendingMovies)

  return (
    <div className='mm-1'>
      <div>
        <div className="titulo">Trending Tv Shows</div>
        <HorizontalScrollBar data={trendingTv}/>
      </div>

      <div>
        <div className="titulo">Trending Movies</div>
        <HorizontalScrollBar data={trendingMovies}/>
      </div>
    </div>
  )
}

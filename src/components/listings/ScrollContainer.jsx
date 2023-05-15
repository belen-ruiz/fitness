

import React, { useState } from 'react'
import { HorizontalScrollBar } from './Scroll'
import { useDataContext } from "../../context/DataProvider"

export const ScrollContainer = () => {

const { trendingTv, trendingMovies} = useDataContext()

// console.log(trendingTv)
// console.log(trendingMovies) ok

  return (
    <div className='mm-1 '>
      <div>
        <div className="title-sm">Trending Tv Shows</div>
        { trendingTv && <HorizontalScrollBar data={trendingTv}/>}
      </div>

      <div>
        <div className="title-sm">Trending Movies</div>
        { trendingMovies &&<HorizontalScrollBar data={trendingMovies}/>}
      </div>
    
    </div>
  )
}


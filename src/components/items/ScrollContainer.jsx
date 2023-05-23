

import React, { useState } from 'react'
import { HorizontalScrollBar } from './Scroll'
import { useDataContext } from "../../context/DataProvider"

export const ScrollContainer = () => {

const { latestTv, latestMovies, trendingTv, trendingMovies} = useDataContext()

// console.log(trendingTv)
// console.log(trendingMovies) ok

  return (
    <div className='container-page'>
      <div>
        <div className="title-sm">Top Rated Tv Shows</div>
        { latestTv && <HorizontalScrollBar data={latestTv}/>}
      </div>

      <div>
        <div className="title-sm">Top Rated Movies</div>
        { latestMovies && <HorizontalScrollBar data={latestMovies}/>}
      </div>

      <div>
        <div className="title-sm">Trending Tv Shows</div>
        { trendingTv && <HorizontalScrollBar data={trendingTv}/>}
      </div>

      <div>
        <div className="title-sm">Trending Movies</div>
        { trendingMovies && <HorizontalScrollBar data={trendingMovies}/>}
      </div>
    
    </div>
  )
}


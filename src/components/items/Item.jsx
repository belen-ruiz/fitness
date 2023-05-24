import React from 'react';
import { ItemBanner } from '../banner/ItemBanner'
import { ReviewsContainer } from './ReviewsContainer';
import { HorizontalScrollBar } from './Scroll'

//4
//devuelvo estilo del item 
export const Item = ({ data, movieReviews, cast, crew, similarMovies }) => { 


  return (
    <div>
          {data && 
          <div>
            <ItemBanner data={ data }/>
          </div>}

          {movieReviews && 
          <div>
            <ReviewsContainer movieReviews={ movieReviews }/>
          </div>}

          {cast && 
          <div>
            <div className="title-sm">Cast</div>
            <HorizontalScrollBar data={cast}/>
          </div>}

          {crew && 
          <div>
            <div className="title-sm">Crew</div>
            <HorizontalScrollBar data={crew}/>
          </div>  }

          {similarMovies && 
          <div>
            <div className="title-sm">Similar Movies</div>
            <HorizontalScrollBar data={similarMovies}/>
          </div>} 
    </div>
  )
}

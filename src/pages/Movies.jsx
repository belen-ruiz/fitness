import React, { useState } from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { useDataContext } from "../context/DataProvider"
import { ItemListContainer } from '../components/items/ItemListContainer'
import { CatBanner } from "../components/banner/CatBanner"
import { Pagintation } from '../components/atoms/Pagination'


export const Movies = () => {
  const { movies, genresMovie } = useDataContext()
  const [currentGenreIds, setCurrentGenreIds] = useState() 

  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage, setMoviesPerPage] = useState(10)
  const totalMovies = Object.keys(movies).length
  const totalPages = totalMovies / moviesPerPage


  const slicedMovies =  movies.slice( 
    (currentPage -1) * moviesPerPage,
    (currentPage -1) * moviesPerPage + moviesPerPage)
  console.log(slicedMovies)
  


  return (
    <div>
      <NavBar />
        <div className='container-page'>
          <Pagintation 
            totalMovies={totalMovies} 
            totalPages={totalPages}
            moviesPerPage={moviesPerPage} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}/>

          <CatBanner 
            genresMovie={genresMovie}
            currentGenreIds={currentGenreIds}
            setCurrentGenreIds={setCurrentGenreIds}/>

          <ItemListContainer 
            data={slicedMovies}
            genresMovie={genresMovie}
            currentGenreIds={currentGenreIds}/>
        </div>
      <Footer />
    </div>
  )
}

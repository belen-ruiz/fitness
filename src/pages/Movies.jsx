import React, { useEffect, useState } from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { useDataContext } from "../context/DataProvider"
import { ItemListContainer } from '../components/items/ItemListContainer'
import { CatBanner } from "../components/banner/CatBanner"
import { Pagintation } from '../components/atoms/Pagination'
import { Loader } from '../components/atoms/Loader'


export const Movies = () => {
  const { movies, genresMovie, currentGenreIds, setCurrentGenreIds } = useDataContext()
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage, setMoviesPerPage] = useState(10)
  const totalMovies = Object.keys(movies).length
  const totalPages = Math.ceil(totalMovies / moviesPerPage)

  
  const slicedMovies =  movies.slice( 
    (currentPage -1) * moviesPerPage,
    (currentPage -1) * moviesPerPage + moviesPerPage)

  useEffect(() => {
    setTimeout(() => {
        slicedMovies && setLoading(false)
      }, 3000);
  }, [])

  return (
    <div>
      <NavBar />
        {loading ? <Loader /> :
        <div className='container-page'>
          <Pagintation 
            totalPages={totalPages}
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
        </div>}
      <Footer />
    </div>
  )
}

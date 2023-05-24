import React, { useState } from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { ItemListContainer } from '../components/items/ItemListContainer'
import { useDataContext } from "../context/DataProvider"
import { useSearchContext } from '../context/SearchProvider'
import { Pagintation } from '../components/atoms/Pagination'


export const Results = () => {
  const { results } = useSearchContext()

  const [currentPage, setCurrentPage] = useState(1)
  const [resultsPerPage, setResultsPerPage] = useState(10)
  const totalResults = Object.keys(results).length
  const totalPages = Math.ceil(totalResults / resultsPerPage)

  const slicedResults =  results.slice( 
    (currentPage -1) * resultsPerPage,
    (currentPage -1) * resultsPerPage + resultsPerPage)

  return (
    <div>
      <NavBar />

      <div className='container-page'>
        <Pagintation 
          totalPages={totalPages}
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}/>

        <ItemListContainer results={slicedResults}/>

      </div>
      <Footer />
    </div>
  )
}
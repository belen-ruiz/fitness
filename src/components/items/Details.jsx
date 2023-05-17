import React from 'react'

export const Details = ({ data }) => {
  const {
    overview,
    genres,
    budget,
    homepage,
    production_companies
  } = data
    
    console.log(production_companies)

  return (
    <div>
      <div>
        {genres &&
        genres.map((e) => <div>{e.name}</div>
        )}
      </div>

      <div>{overview}</div>
      <div>{budget}</div>
      <div>{homepage}</div>
      
      <div>
        {production_companies &&
        production_companies.map((e) => <div>{e.name}</div>
        )}
      </div>
    </div>
  )
}

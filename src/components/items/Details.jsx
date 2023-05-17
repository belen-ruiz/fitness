import React from 'react'

export const Details = ({ data }) => {
  const {
    overview,
    genres,
    budget,
    homepage,
    production_companies
  } = data
    
  return (
    <div>
      <div>
        {genres &&
        genres.map((e) => <div key={e.name}>{e.name}</div>
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

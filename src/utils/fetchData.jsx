// const exerciseOp = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };


// const fetchData = async (url, options) => {
//   const response = await fetch(url, options)
//   const data = await response.json()

//   return data;
// }

// export { exerciseOp, fetchData }


// "https://api.mercadolibre.com/sites/MLA/search?q=sombreros"

// curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN'   https://api.mercadolibre.com/sites/MLA/categories
// https://api.mercadolibre.com/categories/MLA5725

const exerciseOp = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    // 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()

  return data;
}

export { exerciseOp, fetchData }
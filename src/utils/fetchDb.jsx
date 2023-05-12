//("https://api.mercadolibre.com/sites/MLA/search?q=sombreros")


import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';

//lista de todos los prod
export const DataSombreros = ({ }) => {
  const [items, setItems] = useState([]); 

  useEffect(() => {
    const getItems = async (url) => {
        let res = await fetch(url),
        json = await res.json()
        console.log(json.results)

        let result = json.results
        console.log(result)

        setItems(result)


        // result.forEach(async (el)=>{
        //     let res = await fetch(el.id)
        //     json = await res.json()
        //     console.log(json)

        //     let item = { 
        //         id:json.id,
        //         name: json.name,
        //     }

        //     setItems((items) => [...items, item])
        // })
    }

    //getItems("https://api.mercadolibre.com/sites/MLA/search?q=sombreros")
    getItems("https://api.mercadolibre.com/categories/MLA5725")



  }, [])

  console.log(items)

    //getItems("https://pokeapi.co/api/v2/pokemon/")
//   useEffect(() => {
//     const getData = new Promise (resolve => {
//       setTimeout(()=> {
//         resolve(popularProducts);
//       }, 2000);
//     });

//     getData.then(res => setItems(res))

//   }, [])

  return (
    <>
      <ProductListContainer>
          {/* { items.length === 0 ? (
            <h1>Cargando...</h1>
          ) : (
                // items.map((item)=> 
                //   (<DestacadosItem item={item} key={item.id} />))
                items.map((item)=> 
                   <div>
                        <div>{item.id}</div>
                        <div>{item.title}</div>
                        <div>{item.thumbnail}</div>
                    </div>
                    )
                )
          } */}
          { items.length === 0 ? (
            <h1>Cargando...</h1>
          ) : (
                items.map((el)=> 
                   <div>
                        <div>{el.id}</div>
                        <div>{el.title}</div>
                        <img src={el.thumbnail}/>
                    </div>
                    )
                )
          }
      </ProductListContainer>
    </>
  )
}


const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  grid-column: 2/3;
  grid-row: 2/3;
`
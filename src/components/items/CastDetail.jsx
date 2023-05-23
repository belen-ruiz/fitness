
import React from 'react'

export const ItemDetails = ({ crew, cast }) => {

  console.log(cast)
  return (
    <div>
      <div>
          <div>Cast</div>
          {
          cast && cast.map((member)=> 
           <div key={member.credit_id}>
             <div>{member.character}</div>
             <div>({member.name})</div>
             <div><img src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`} alt={member.name}/></div>
           </div>
          )
          }
      </div>
      <div>
          <div>Crew</div>
          {
          crew && crew.map((member)=> 
           <div key={member.credit_id}>
             <div>{member.department}</div>
             <div>{member.name}</div>
             <div>{member.job}</div>
           </div>
          )
          }
      </div>
    </div>
  )
}


// import React from 'react'

// export const ItemDetails = ({ crew, cast }) => {

//   console.log(cast)
//   return (

//     <div key={member.credit_id}>
//              <div>{member.character}</div>
//              <div>({member.name})</div>
//              <div><img src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`} alt={member.name}/></div>
//            </div>
//     <div>


//       <div>
//           <div>Cast</div>
//           {
//           cast && cast.map((member)=> 
//            <ItemDetails data={member}/>
//           )
//           }
//       </div>
//       <div>
//           <div>Crew</div>
//           {
//           crew && crew.map((member)=> 
//            <div key={member.credit_id}>
//              <div>{member.department}</div>
//              <div>{member.name}</div>
//              <div>{member.job}</div>
//            </div>
//           )
//           }
//       </div>
//     </div>
//   )
// }


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


// import Tabs from '@mui/material/Tabs';
// import Box from '@mui/material/Box';
// import { useState } from 'react';
// import { ItemHome } from './ItemHome';

// export const HorizontalScrollBar = ({ data })=> {
//   const [value, setValue] = useState(0);

//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <Box className="containter-tabs">
//       <Tabs
//         className="containter-item"
//         value={value}
//         onChange={handleChange}
//         variant="scrollable"
//         scrollButtons
//         allowScrollButtonsMobile
//         aria-label="scrollable force tabs example"
//       >
//         {data.map((tvshow) => (
//                 <div className="item-box item-info" key={tvshow.id || tvshow}>
//                     {data && <ItemHome data={tvshow}/>}
//                 </div>
//             )
//             )}
//       </Tabs>
//     </Box>
//   );
// }
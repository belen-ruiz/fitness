import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { ItemHome } from './ItemHome';

export const HorizontalScrollBar = ({ data })=> {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="containter-tabs">
      <Tabs
        className="containter-item"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        {data.map((elem) => (
                <div className="item-box item-info" key={`data+${elem.id}+${elem.name}`}>
                    {elem && <ItemHome data={elem}/>}
                </div>
            )
            )}
      </Tabs>
    </Box>
  );
}
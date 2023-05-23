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
        aria-label="scrollable force tabs example"
      >
        {data.map((tvshow) => (
                <div className="item-box item-info" key={tvshow.id || tvshow}>
                    {data && <ItemHome data={tvshow}/>}
                </div>
            )
            )}
      </Tabs>
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Searchbox() {
    return (
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField fullWidth label="Search"  
        id="filled-size-normal fullwidth"
        variant="filled"
      />
      </Box>
    );
  }

export default Searchbox;
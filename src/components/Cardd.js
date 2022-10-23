import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { NavLink} from 'react-router-dom'

function Cardd({ id }) {
   
    return (
        <>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">Card {id}
                    <CardActions>
                        <NavLink to={`/card/${id}`} target="_blank"><Button size="small">Learn More</Button></NavLink>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default Cardd
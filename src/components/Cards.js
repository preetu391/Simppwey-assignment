import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Cardd from './Cardd'

const cards =[
    {
        id:1,
    },
    {
        id:2,
    },
    {
        id:3,
    },
    {
        id:4,
    },
    {
        id:5,
    },
    {
        id:6,
    },
    {
        id:7,
    },
    {
        id:8,
    },
    {
        id:9,
    },
    {
        id:10,
    },
    {
        id:11,
    },
    {
        id:12,
    },
    {
        id:13,
    },
    {
        id:14,
    },
]

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {

    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

function Cards(props) {

    return (
        <>
        
        <div style={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'grid',
                    columnGap: 3,
                    rowGap: 1,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}
            >
               
                {cards.map((cardd, i) => {
            return <Item><Cardd key={i} {...cardd}/></Item>})}
                
            </Box>
        </div>
        </>
    )
}

export default Cards
import React from 'react';

const amiiboStyle = {
    height: 'auto',
    minHeight: '100px',
    width: '500px',
    backgroundColor: '#75a3e7',
    boxShadow: '0px 0px 5px #666',
    marginBottom: '5px',
    borderRadius: '5px'
};

const listStyle = {
    marginLeft: '20px'
};

const Amiibo = (props) => {
        return (<div style={amiiboStyle}><li style={listStyle}><h4>character: {props.character}</h4>
            <ul>
            <li>Game Series: {props.gameSeries}</li>
            <li>Amiibo Series: {props.amiiboSeries}</li>
            <li>Amiibo Name: {props.name}</li>
            <li>Image:<br/><img src={props.image} alt = {props.character}></img></li>
            <li>Release Date: {props.release}</li></ul></li></div>)

    }

export default Amiibo;
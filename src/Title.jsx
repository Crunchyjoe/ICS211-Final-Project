import React from 'react';

const Title = (props) => {
    const titleStyle = {
        backgroundColor: '#00c8af',
        fontSize: '25pt',
        borderRadius: '15px 15px 0px 0px',
        margin: 'left',
        textAlign: 'center',
        width: '500px',
        position: 'absolute',
        top: 0
    }
    return (
        <div style={titleStyle}>
            <h3>The Easy Amiibo Searcher</h3>
        </div>
    )
}

export default Title;
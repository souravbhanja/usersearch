import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '2px solid #000', height: '460px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
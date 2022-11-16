import React from 'react';

function plant({name}) {
    {console.log(name)}
    return (
    <React.Fragment> 
        <p>plant <br/> name: {name}</p>
    </React.Fragment>
    )
}

export default plant

import React from 'react';
import './navigationMenu.css';

function navigationMenu({navlist}) {
    return (
    <React.Fragment> 
        <li className='navlist'>{navlist.map(el=>(
                <li>{el.name}
                <li className='droplist'>{ el.drop&&el.drop.map(el=><li>{el}</li>) }</li>
                </li>
            ))}
                 
        </li>
    </React.Fragment>
    )
}

export default navigationMenu

import React from 'react';
import './navigationMenu.css';

function navigationMenu({navlist}) {
    return (
    <React.Fragment> 
        <li className='navlist'>{navlist.map(el=>(
                <li>{el.name}
                <li className='droplist'>{ el.drop&&
                el.name=='PLANT' 
                ?el.drop.map(el=><li><a href={'/Plant/'+el} >{el}</a></li>)
                :el.drop.map(el=><li><a href={'/'+el} >{el}</a></li>) }</li>
                </li>
            ))}
                 
        </li>
    </React.Fragment>
    )
}

export default navigationMenu

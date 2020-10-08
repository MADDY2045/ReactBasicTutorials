import React from 'react';

const TabNav = (props) => {
    return (
        <div style={{width:'30%'}}>
            <ul className="nav nav-tabs">
                {props.tabs.map(tab=>{
                    const active = props.selected ? 'active':'';
                    return(
                        <li className='nav-item' key={ tab } >
                            <buttton className= {`nav-link  ${active} bg-info`}  onClick={ () => props.setSelected(tab) }>
                                { tab }
                            </buttton>
                        </li>
                    )
                })}
            </ul>
            {props.children}
        </div>
    );
}

export default TabNav;

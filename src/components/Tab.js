import React from 'react';

const Tab = (props) => {
    return (
        <div>
        {props.isSelected ? <div>{ props.children } </div>:null}
        </div>
    );
}

export default Tab;

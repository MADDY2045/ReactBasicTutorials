import React from 'react'

function Nabar(props) {
    return (
        <div className="col-5 col-lg-5 col-sm-5">
            <nav className="navbar ">
                <input className="form-control mt-3" type="text" onChange={(e)=>props.handleSearch(e.target.value)}/>
            </nav>
        </div>
    )
}

export default Nabar

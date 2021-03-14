import React from 'react'

function Cardfilter(props) {
    return (
        <div className="container">
            <div className="row">
                {props.data.map( (item,index)=>{
                    return(<div key={index} className="col-sm-6 col-md-6 col-12 col-lg-4">
                                <div className="card" >
                                    <img className="card-img-top" src={item.flag} alt="Card image cap"/>
                                    <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Capital : {item.capital}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
</div>
    )
}

export default Cardfilter

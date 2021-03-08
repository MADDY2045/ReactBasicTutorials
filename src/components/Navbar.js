import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Navbar=(props)=>{
     return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="text text-dark mr-5">Karix Home</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline mr-auto">
                    <input
                    value = { props.whatsappUuid }
                    onChange = {props.onChange}
                    className="form-control mr-sm-2 ml-auto"
                    type="search" placeholder="Search"
                    aria-label="Search"/>
                    <button
                    disabled = { !props.validUuidFlag }
                    onClick = { props.getTemplatelistById }
                    className="btn btn-secondary my-2 my-sm-0"
                    type="submit">Search Templates by UUID</button>
                </form>
                <span>
                    <i onClick={ props.handleLogout } className="fa fa-power-off fa-lg mr-5" ></i>
               </span>
                <button
                disabled = { props.validUuidFlag }
                onClick = { props.handleClear }
                className="btn btn-secondary mr-5"
                >Clear</button>
                <button
                onClick = { props.resetData }
                disabled={ props.validUuidFlag }
                className="btn btn-info"
                data-toggle="modal"
                data-target="#exampleModal">Create New</button>
            </div>
        </nav>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create a New Template</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label>Template Name</label>
                            <input
                            required
                            onChange={props.onTemplateNameChange}
                            type="text"
                            className="form-control"
                            id="templatename"
                            value={props.templatename}
                            placeholder="Enter Template Name" />
                        </div>
                        <div className="form-group">
                            <label>Template Name</label>
                            <input
                            required
                            onChange={props.onTemplateChange}
                            type="text"
                            className="form-control"
                            id="template"
                            value={props.template}
                            placeholder="Enter Template" />
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick = { props.createNewTemplate } type="button" className="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
                </div>
                <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} visible={ props.templateCreationFlag } />
        </div>
    )
}

export default Navbar

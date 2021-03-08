import React from 'react'
import { Modal } from 'react-bootstrap';

function SidModal(props) {
    return (
        <div className = "col-12 col-lg-12 col-sm-12">
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Credentials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="col-12 col-lg-12 col-sm-12">
            <form onSubmit = { props.handleCredentialsSubmit }>
                <div className="form-group">
                    <label>SID</label>
                    <input
                    onChange={ (e)=>props.handleChange('sid',e.target.value)}
                    value = {props.sid}
                    type="text" name="sid"
                    className="form-control"
                    id="sid"
                    placeholder="Enter sid"/>
                </div>
                <div className="form-group">
                    <label>Token</label>
                    <input
                    onChange={ (e)=>props.handleChange('token',e.target.value)}
                    value = {props.token}
                    type="password"
                    className="form-control"
                    name="token" id="token"
                    placeholder="enter token" />
                </div>
                <button
                disabled = { props.validFlag }

                type="submit"
                className="btn btn-primary">Submit</button>
            </form>
            </div>
            </Modal.Body>
        </Modal>
        </div>
    )
}

export default SidModal

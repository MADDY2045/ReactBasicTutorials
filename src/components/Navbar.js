import React,{ useState,useEffect } from 'react'
import axios from 'axios';

const Navbar=(props)=>{

    const [ templatename,setTemplateName ] = useState('');
    const [ template,setTemplate ] = useState('');

    useEffect(()=>{
        console.log(`buttonflag now ...`,props.validUuidFlag);
    },[props.validUuidFlag]);

    const createNewTemplate = async () =>{
       if( templatename === '' || template === '') return alert("please alert all values");
       if(props.whatsappUuid === '') return alert('whatsapp uuid cant be null');
        console.log('uuid',props.whatsappUuid);
        console.log('templatename',templatename);
        console.log('template',template);
        let data ={}
        data.category = "alert_update";
        data.whatsapp_account_uid = props.whatsappUuid;
        data.name = templatename;
        data.language_code = "en";
        data.text = template;
        const username = '2ecc6220-e7a1-4dc4-9928-4a78b990e407'
        const password = '4667110b-67a1-4b98-a3dd-7045ac56c796'
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
        //const url = 'http://localhost:4000/createtemplate';
        console.log(token);
        console.log('data is ......',data);
        let url = 'http://localhost:4000/createtemplate'
        axios.post(url,{data})
        .then(response=>{
            //console.log(`response is ${JSON.stringify(response.data,null,2)}`);
            if(response.data.message==="failure"){
                alert(response.data.data);
                console.log(`response is ${JSON.stringify(response.data.data,null,2)}`);
            }else{
                alert(response.data.data);
                console.log(`response is ${JSON.stringify(response.data,null,2)}`);
            }
        })
        .catch(err=>console.log(`error in creation of template ${err}`))
    }

    const resetData = () =>{
        setTemplateName('');
        setTemplate('');
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="text text-dark mr-5">Karix Home</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                {/* <ul className="navbar-nav mr-auto col-lg-3 col-sm-3 col-3">
                <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                    </span>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <span className="dropdown-item" data-toggle="modal" data-target="#exampleModal" >Create New</span>
                        <span className="dropdown-item" onClick={ props.getTemplatesList }>List All Templates</span>
                    </div>
                </li>
                </ul> */}
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
                <button
                disabled = { props.validUuidFlag }
                onClick = { props.handleClear }
                className="btn btn-secondary mr-5"
                >Clear</button>
                <button
                onClick = { resetData }
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
                        {/* <div className="form-group">
                            <label>UUID</label>
                            <input
                            required
                            onChange={(e)=>setUuid(e.target.value)}
                            type="text" className="form-control"
                            id="uuid"
                            value={uuid}
                            placeholder="Enter UUID" />
                        </div> */}
                        <div className="form-group">
                            <label>Template Name</label>
                            <input
                            required
                            onChange={(e)=>setTemplateName(e.target.value)}
                            type="text"
                            className="form-control"
                            id="templatename"
                            value={templatename}
                            placeholder="Enter Template Name" />
                        </div>
                        <div className="form-group">
                            <label>Template Name</label>
                            <input
                            required
                            onChange={(e)=>setTemplate(e.target.value)}
                            type="text"
                            className="form-control"
                            id="template"
                            value={template}
                            placeholder="Enter Template" />
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick = { createNewTemplate } type="button" className="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Navbar

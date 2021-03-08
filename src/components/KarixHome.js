import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function KarixHome(props) {

    const [ whatsappUuid,setWhatsappUuid ] = useState('');
    const [ templateList,setTemplateList ] = useState([]);
    const [ validUuidFlag,setValidUuidFlag ] = useState(true);
    const [ loaderFlag,setLoaderFlag ] = useState(false);
    const [ templatename,setTemplateName ] = useState('');
    const [ template,setTemplate ] = useState('');
    const [ templateCreationFlag,setTemplatecreationFlag ] = useState(false);

    useEffect(()=>{
        console.log('sid in props:',props.sid);
        console.log('token in props:',props.token);
    },[props])

    const handleClear = () =>{
        setWhatsappUuid('');
        setTemplateList([]);
        setValidUuidFlag(true)
    }

const getTemplatelistById = (e)=>{
    e.preventDefault();
    if(whatsappUuid === '' || whatsappUuid.length === 0) return alert('please enter UUID!!');
    setLoaderFlag(true);
    const url = `http://localhost:4000/listalltemplates/${whatsappUuid}/${props.sid}/${props.token}`;
        axios({
            method:'GET',
            url:url
        })
        .then(res => {
        if (res.data.message === 'success'){
            setValidUuidFlag(false);
            let filteredArray = res.data.data.objects.filter( item=> item.whatsapp_account_uid === whatsappUuid.trim() )
            setTemplateList(filteredArray);
            setLoaderFlag(false);
            //setTemplateList([]);
        }
        else{
            setLoaderFlag(false);
            alert(res.data.data? res.data.data :"Something went wrong!!");
            return;
        }
        })
        .catch((error) => {
        console.error(error)
        })
}

const getTemplateListResult=()=>{
    return (<table className="table table-bordered table-striped">
            <thead>
                <tr>
                <th scope="col">UUID</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Template</th>
                <th scope="col">Status</th>
                <th scope="col">Rejected Reason</th>
                </tr>
            </thead>
            { !validUuidFlag ? <tbody>
                { templateList.length > 0 ? templateList.map( (item,index)=>{
                    return (<tr key={index}>
                         <td>{ item.uid }</td>
                         <td>{ item.name }</td>
                         <td>{ item.category }</td>
                         <td>{ item.text }</td>
                         <td>{ item.status }</td>
                         <td>{ item.rejected_reason }</td>
                    </tr>)
                }): <tr><td colSpan="6" >No Templates Found</td></tr>}
            </tbody>:null}
            </table>
    )
}

const handleWhatsappUuid = (data)=>{
    setWhatsappUuid(data);
    setValidUuidFlag(true);
}

const createNewTemplate = async () =>{
    setTemplatecreationFlag(true);
    if( templatename === '' || template === '') return alert("please enter all the values");
    if(whatsappUuid === '') return alert('whatsapp uuid cant be null');
     let data ={}
     data.category = "alert_update";
     data.whatsapp_account_uid = whatsappUuid;
     data.name = templatename;
     data.language_code = "en";
     data.text = template;

     let url = 'http://localhost:4000/createtemplate'
     axios.post(url,{data})
     .then(response=>{
         if(response.data.message==="failure"){
            setTemplatecreationFlag(false);
             alert(response.data.data);
         }else{
            setTemplatecreationFlag(false);
             alert(response.data.data);
         }
     })
     .catch(err=>console.log(`error in creation of template ${err}`))
 }

 const resetData = () =>{
    setTemplateName('');
    setTemplate('');
}


 return (
        <div className="container card">
            <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
                    <Navbar
                    handleLogout = { props.handleLogout }
                    handleClear = { handleClear }
                    whatsappUuid = { whatsappUuid }
                    validUuidFlag = { validUuidFlag }
                    onChange={(e)=>{handleWhatsappUuid(e.target.value)}}
                    onTemplateNameChange = { (e)=>{setTemplateName(e.target.value)} }
                    onTemplateChange = { (e)=>{setTemplate(e.target.value)} }
                    getTemplatelistById={ getTemplatelistById }
                    resetData={resetData}
                    createNewTemplate = { createNewTemplate }
                    templateCreationFlag = { templateCreationFlag }
                    />
                <div className="table-responsive">
                    { getTemplateListResult() }
                    <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} visible={ loaderFlag } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KarixHome
import React,{ useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function KarixHome() {

    const [ whatsappUuid,setWhatsappUuid ] = useState('');
    const [ templateList,setTemplateList ] = useState([]);
    const [ validUuidFlag,setValidUuidFlag ] = useState(true);
    const [ loaderFlag,setLoaderFlag ] = useState(false);

    const handleClear = () =>{
        setWhatsappUuid('');
        setTemplateList([]);
        setValidUuidFlag(true)
    }

const getTemplatelistById = (e)=>{
    e.preventDefault();
    if(whatsappUuid === '' || whatsappUuid.length === 0) return alert('please enter UUID!!');
    setLoaderFlag(true);
    const url = `http://localhost:4000/listalltemplates/${whatsappUuid}`;
        axios({
            method:'GET',
            url:url
        })
        .then(res => {
        if (res.data.message === 'success'){
            setValidUuidFlag(false);
            let filteredArray = res.data.data.objects.filter( item=> item.whatsapp_account_uid === whatsappUuid )
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
 return (
        <div className="container card">
            <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
                    <Navbar
                    handleClear = { handleClear }
                    whatsappUuid = { whatsappUuid }
                    validUuidFlag = { validUuidFlag }
                    onChange={(e)=>{handleWhatsappUuid(e.target.value)}}
                    getTemplatelistById={ getTemplatelistById }
                    />
                    { getTemplateListResult() }
                    <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} visible={ loaderFlag } />
                </div>
            </div>
        </div>
    )
}

export default KarixHome
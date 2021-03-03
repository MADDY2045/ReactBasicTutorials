import React,{ useState,useEffect } from 'react'
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
        // alert('called clear function');
        setWhatsappUuid('');
        setTemplateList([]);
        setValidUuidFlag(true)
    }

    const getTemplatesList = () =>{
        const url = `http://localhost:4000/listalltemplates`;
        axios({
            method:'GET',
            url:url
        })
        .then((res) => {
        console.log(res.data)
        })
        .catch((error) => {
        console.error(error)
        })
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
        console.log('response....',res.data)

        if (res.data.message === 'success'){
            console.log('entered success part....',res.data.data.objects)
            setValidUuidFlag(false);
            console.log(`uuid now `,whatsappUuid);

            // let tempArray = [{
            //     "uid": "3e4e654c-f4ad-430d-b41e-d71068ecf948",
            //     "status": "pending",
            //     "category": "account_update",
            //     "whatsapp_account_uid": "3e4e654c-f4ad-430d-b41e-d71068ecf948",
            //     "name": "template_1",
            //     "language_code": "en",
            //     "attachment": "image",
            //     "text": "Hi {{*}}, your OTP is {{*}}",
            //     "rejected_reason": "string"
            //     },
            //     {
            //       "uid": "3e654c-f4ad-430d-b41e-d71068ecf948",
            //       "status": "pending",
            //       "category": "payment_update",
            //       "whatsapp_account_uid": "3e4e654c-f4ad-430d-b41e-d71068ecf948",
            //       "name": "template_2",
            //       "language_code": "en",
            //       "attachment": "image",
            //       "text": "Hi, your order  {{*}} has been despatched",
            //       "rejected_reason": "string"
            //       },
            //       {
            //         "uid": "00be0f9e-ab62-40ee-9d84-b736e607ace7",
            //         "status": "pending",
            //         "category": "alert_update",
            //         "whatsapp_account_uid": "00be0f9e-ab62-40ee-9d84-b736e607ace7",
            //         "name": "template_2",
            //         "language_code": "en",
            //         "attachment": "image",
            //         "text": "Hi, your OTP is {{*}}",
            //         "rejected_reason": "string"
            //         },
            //         {
            //           "uid": "00be0f9e-ab62-40ee-9d84-b736e607ace7",
            //           "status": "pending",
            //           "category": "payment_update",
            //           "whatsapp_account_uid": "00be0f9e-ab62-40ee-9d84-b736e607ace7",
            //           "name": "template_2",
            //           "language_code": "en",
            //           "attachment": "image",
            //           "text": "Hi, your order  {{*}} has been despatched",
            //           "rejected_reason": "string"
            //           }]
            // let result = res.data.data.objects;
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
    // if( templateList.length === 0 ) return;
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
                    getTemplatesList={ getTemplatesList }
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
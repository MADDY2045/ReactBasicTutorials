import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import Pagination from '../components/Pagination';

function JsonPlaceHolder() {
    const [data,setData] = useState([]);
    const [searchText,setSearchText ] = useState('');
    const [ currentPage,setCurrentPage ] = useState(1);
    const [ postsPerpage ] = useState(4);
    const [ indexOfLastPost,setIndexOfLastPost ] = useState(1);
    const [indexOfFirstPost,setIndexOfFirstPost] = useState(0);
    const [currentPosts,setCurrentposts] = useState([]);
    const [filteredTitle,setFilteredTitle ] = useState([]);//for method2
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            console.log(response.data);
            setData(response.data);
        })
        .catch(err=>console.log(err))
    },[])

    //method 1
    //const filteredTitle = data.filter( item => item.title.toLowerCase().includes(searchText));

    //method 2 is more performance effective
    useEffect(()=>{
        let filteredArray = data.filter( item => item.title.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredTitle(filteredArray);

    },[searchText,data]);

    useEffect(()=>{
        //get current posts
        setIndexOfLastPost( currentPage * postsPerpage) ;
        setIndexOfFirstPost(indexOfLastPost - postsPerpage);
        setCurrentposts(filteredTitle.slice(indexOfFirstPost,indexOfLastPost));

    },[filteredTitle,currentPage,postsPerpage,indexOfLastPost,indexOfFirstPost])


    const paginate = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    return (
        <div className="container card">
            <div className="col-9 col-lg-9 mt-5">
                <div className ="row">
                    <input
                    placeholder="search by title"
                    className="form-control" name="title"
                    type="text"
                    onChange={ (e)=>setSearchText(e.target.value)} />
                    <div className ="container" id="list-div" >
                    <ul className="list-group">
                        { currentPosts.map( (item,index)=>{
                            return <li key={index} className="list-group-item m-2"><div><b>Title:</b>{item.title}</div><div><b>Body:</b><small>{item.body}</small></div></li>
                        })}
                </ul>
            </div>
            <div className ="row">
                <div className="col-12 col-lg-12 col-sm-12">
                    <Pagination postsPerpage={ postsPerpage } totalPosts={filteredTitle.length} paginate={paginate} />
                </div>
            </div>
            </div>

        </div>
    </div>

    )
}

export default JsonPlaceHolder

import React,{ useState,useEffect } from 'react';
import Navbar from './Navbar';
import Pagination from '../components/Pagination';

import axios from 'axios';

import Card from './Cardfilter';
const Main=()=>{
    const [ searchText,setSearchText ] = useState('');
    const [ data,setData ] = useState([]);
    const [ filterArray,setFilterArray ] = useState([]);

    //for pagination
    const [ currentPage,setCurrentPage ] = useState(1);
    const [ postsPerpage ] = useState(6);
    const [ indexOfLastPost,setIndexOfLastPost ] = useState(1);
    const [indexOfFirstPost,setIndexOfFirstPost] = useState(0);
    const [currentPosts,setCurrentposts] = useState([]);

    useEffect(()=>{
        axios.get("https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag")
        .then(response=>{
            console.log(response.data);
            setData(response.data);
        })
        .catch(err=>console.log(err))
    },[])

    const handleSearch=(item)=>{
        console.log(`item is `,item);
        setSearchText(item)
    }
    const paginate = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        console.log(`changed searc text ${searchText}`);
        console.log('data now is',data)
        setFilterArray(data.filter(item=> item.name.toLowerCase().includes(searchText.toLowerCase())));
    },[searchText,data]);

    useEffect(()=>{
        //console.log(`filtered array now is ..${JSON.stringify(filterArray,null,2)}`);
        //get current posts
        setIndexOfLastPost( currentPage * postsPerpage) ;
        setIndexOfFirstPost(indexOfLastPost - postsPerpage);
        setCurrentposts(filterArray.slice(indexOfFirstPost,indexOfLastPost));

    },[filterArray,currentPage,postsPerpage,indexOfLastPost,indexOfFirstPost])

    return (
        <div id="main-div" className="container ">
            <Navbar handleSearch={ handleSearch }/>
            <Card data={ currentPosts }/>
            <Pagination postsPerpage={ postsPerpage } totalPosts={filterArray.length} paginate={paginate} />
        </div>
    )
}

export default Main

import React from 'react'

function Pagination({ postsPerpage,totalPosts,paginate }) {
    const pageNumbers = [];
    for(let i=1; i < Math.ceil(totalPosts/postsPerpage); i++ ){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number=>{
                    return <li className="page-item" key={number}>
                        <a onClick={()=>paginate(number)} className="page-link" href="*#">{number}</a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination

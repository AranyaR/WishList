import React from 'react'

export default function Data({list,Uselist}) {
    function handleDelete(index){
        const updatedlist=list.filter((ele,i)=>i!==index);
        Uselist(updatedlist);
    }
    let myWish=list.map((element,index)=>(<li key={index}>{element}<button onClick={()=>handleDelete(index)} className='delete'>Delete</button></li>))
    return (
        <div className='wishbox'>
            <ol type='i'>
                {myWish}
            </ol>
        </div>
    )
}

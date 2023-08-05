import React, {useState,useEffect}  from 'react';
import axios from 'axios';

const ViewEquity = () => {
    const[product,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response=>{
            console.log(response)
            setProducts(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    const prodId=(id)=>{
          alert("ID retrieved!")
          console.log(id)
    }

  return (
    <div>
          <h2>Fetch User Information</h2>
          {
              product.map(pr => 
              <div className='mt-5'>
                {pr.email} - {pr.user} 
                <button
              type="button"
              className="text-sm ml-5 uppercase text-gray-900 bg-white border border-red-400 focus:outline-none hover:bg-red-500 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2"
              onClick={()=> prodId(pr.id)}
            >
              Get Id
            </button>
              </div>            
              )
          }
    </div>
  );
}

export default ViewEquity;

//when state is changes, useEffect is called since it works both as mountdid and mountupdate


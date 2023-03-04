import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
    const [file,setFile]=useState({})
console.log(file)

    // useEffect(()=>{
    //     // axios.get("http://localhost:8080/list")
    //     axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
    //     .then((res)=>{setFile(res.data.data)})
    // },[])
//   return (
//     <div>
//     {/* //     <label htmlFor="">Add file</label><br />
//     // <input type="file" /> */}


   





//     {/* show file */}
// <>
//     {file?.file?.map((el)=>(
//             <div key={el.id}>
//                   <p>{el.brand}</p>
          
//             </div>
//         ))
//     }
// </>

// </div>

    
//   )


return (
    <div className="App">

   <>
      <h1>Users</h1>

      <div>
        {file?.file?.map((user) => (
          <div key={user.id}>
          <p>{user.brand}</p>
          <p>{user.category}</p>
          </div>         ))}
      </div>
     </>
    </div>

  );
}

export default Home

import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react-v1'


import { useEffect, useState } from "react";
import axios from "axios";

function App({signOut,user}) {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios.get(`http://localhost:8080/list`).then((res) => {
      setData(res.data);
    });
  }, []);

  const handledelete = () => {};

  return (
    <div className="App">
   {user.attributes.email}
   <button onClick={signOut}>Sign Out</button>


      <>
        <div>
          {data.map((user) => (
            <div>
              <p>{user}</p>
              <button onClick={handledelete}>delete</button>
              {/* <img src={`http://localhost:8080/list/${user}`}/> */}
              {/* <iframe src={`http://s3nodejs1234.s3.amazonaws.com/${user}`}></iframe> */}
            </div>
          ))}
        </div>
      </>
    </div>
  );
}

export default withAuthenticator(App);

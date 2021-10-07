import React, {useState} from 'react'
import { Select } from 'antd';
import 'antd/dist/antd.css';
import SignIn from './components/SignIn';
import './App.css'
import SignUp from './components/SignUp';

function App() {
  const adminUser = {
    username: "admin",
    password: "admin123",
  }
  
    const { Option } = Select;

  
  const [user, setUser] = useState({username: "", password: ""});
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);
    if(details.username === adminUser.username && details.password === adminUser.password){
      console.log("Logged in successfully!");
      setUser({
        username: details.username,
        password: details.password,
      });
    }
      
    else 
      console.log("Details do not match!");
      setError("Details do not match!")
  }


  const Logout = () => {
    setUser({
      username: "",
      password: "",
      // role: "",
    });
    setError("");
  }

  return (
    <div className="App">
      {(user.username !== "") ? (
        <div>
          welcome {adminUser.username}
          <button onClick={Logout}>Log out</button>
        </div>
      ) : (
        <SignIn Option={Option} Login={Login} error={error}/>
      )}
      {/* <SignUp /> */}
    </div>
  );
  
  
}

export default App;

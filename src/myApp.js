
// function App() {

  // const fictionUser = {
  //   username: "user01",
  //   password: "user123",
  // }
  // const [ user, setUser ] = useState({
  //   username: "",
  //   password: ""
  // })

    
    
//       const Logout = () => {
//         setUser({
//           username: "",
//           password: "",
//           // role: "",
//         });
//         setError("");
//       }
          
//     const [error, setError] = useState("")

//     const Login = details => {
//         console.log(details);
//         if(details.username === fictionUser.username && details.password === fictionUser.password){
//           console.log("Logged in successfully!");
//           setUser({
//             username: details.username,
//             password: details.password,
//           });
          
//           setError("");
//           return true;
//         }
          
//         else {
//           console.log("Details do not match!");
//           setError("Details do not match!")
//           return false;
//       }
//     }
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//       </div>
//       <Switch>
//         <Route 
//           path="/signin" 
//           exact 
//           render={ props => (
//             <SignIn {...props} defaultAccount={fictionUser} error={error} Login={Login} />
//           )}
//           />
//           <Route exact path="/homepage" 
            // render={(props) => {
            //   return localStorage.getItem("accessToken") ? <HomePage {...props} username={user.username}/> : <Redirect to="/" />
            // }}
//           />
//           <Route exact path="/aboutus" exact component={AboutUs} />
//           <Route path="/signup" component={SignUp} />
//           <Route exact path="/profile" component={Appi} />
//       </Switch>
//     </Router>
    
  

//   );
  
  
// }
// export default App;


// {(user.username !== "") ? (
//         <div>
//           welcome {fictionUser.username}
//           <button onClick={Logout}>Log out</button>
//         </div>
//       ) : (
//         <SignIn Option={Option} Login={Login} error={error}/>
//       )} 
      
{/* <UserContext.Provider exact path="/homepage"
              render={(props) => {
              return localStorage.getItem("accessToken") ? <HomePage {...props} username={user.username}/> : <Redirect to="/" />
            }}
            /> */}
            {/* </PrivateRoute> */}

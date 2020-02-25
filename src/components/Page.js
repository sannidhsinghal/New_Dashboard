import React,{Fragment} from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { dataPost } from "./GetData";
import { Redirect} from "react-router-dom"
import "../Styles.css";


class Page extends React.Component {
  constructor(){
    super()
    this.state ={
      username: "",
      fullname: "",
      emailId: "",
      contactNo: "",
      password: "",
      gender: "",
      isLogged: false,
      error: "",
      userId: ""
    }
  }

  handleChange=(event)=>{
    this.setState({
      [event.target.name] : event.target.value,    
    })
  }
 

  handleGender=(event)=>{
    this.setState({
      gender:event.target.value
    })
  }

  handleSubmit =(event)=>{
    event.preventDefault();
    const user = {
      fullName: this.state.fullname,
      userName: this.state.username,
      emailId: this.state.emailId,
      phoneNumber: this.state.contactNo,
      password: this.state.password,
      gender: this.state.gender
    };
    console.log(user)
    dataPost(`/user/createUser`,user)
    .then(res=>{
      console.log(res);
    });
  }
    
  handleApi=event=>{
    event.preventDefault();
    const userDetail = {
      username: this.state.username,
      password: this.state.password
      
    };
    console.log(userDetail)
    dataPost('/user/login',userDetail)
    .then(response=>{
      if(response.hasOwnProperty('userName')){
        console.log("dhdf")
        this.setState({
          isLogged: true,
        })
        console.log("logged")
        localStorage.setItem('userId', response.id)
      }
    })
    .catch(error=>{
      this.setState({
        error:error.response.data.message
      })
    })
  }

  render() {
    let alertBox=""
    // console.log('jf')
    if(this.state.isLogged){
      return(
        <Redirect to ={{pathname:'/home',state:{
          userId:this.state.userId
        }}}></Redirect>
      )
    }
  // const [value, setValue] = React.useState("female");
  // const handleChange = event => {
  //   setValue(event.target.value);
  // };
      window.onload= function (){


      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const container = document.getElementById('container');

	  signUpButton.addEventListener('click', () => {
	  container.classList.add("right-panel-active");
        });


      signInButton.addEventListener('click', () => {
	  container.classList.remove("right-panel-active");
         });



         }
    return (
      <Fragment>
      <div className="one" style={{overflow:"hidden"}}>
        {/* <p>Survey</p> */}
      
        <h1 className="head">Welcome To SurveyGlance ! </h1>
        <div className="container" id="container" > 
     
          <div className="form-container sign-up-container">
            <form onSubmit={this.handleSubmit} action="#">
              <h1>Create Account !</h1>
              <input type="text" name="fullname" placeholder="Name" onChange={this.handleChange}/>
              <input type="email" name="emailId" placeholder="Email" onChange={this.handleChange}/>
              <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
              <input type="number" name="contactNo" placeholder="Contact No." onChange={this.handleChange}/>
              <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />

              <FormControl component="fieldset">
                <FormLabel component="legend">Gender: </FormLabel>
                <RadioGroup
                  aria-label="position"
                  name="position"
                >
                  <FormControlLabel
                    name="gender"
                    value="MALE"
                    control={<Radio color="primary" />}
                    label="Male"
                    labelPlacement="start"
                    onChange={this.handleGender}
                  />
                  <FormControlLabel
                    name="gender"
                    value="FEMALE"
                    control={<Radio color="primary" />}
                    label="Female"
                    labelPlacement="start"
                    onChange={this.handleGender}
                  />
                </RadioGroup>
              </FormControl>

              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={this.handleApi} action="#">
              <h1>Sign in !</h1>

              <input type="username" placeholder="username" name="username" onChange={this.handleChange}/>
              <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
              <a href="#">Forgot your password?</a>
              <button onClick={this.handleApi}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn" >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </Fragment>
    );
  }
}

export default Page;





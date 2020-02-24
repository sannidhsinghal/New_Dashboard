import React,{Fragment} from "react";
// import "./App.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "../Styles.css";


class Page extends React.Component {
  render() {
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
            <form action="#">
              <h2>Create Account !</h2>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Username" />
              <input type="number" placeholder="Contact No." />
              <input type="password" placeholder="Password" />
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender: </FormLabel>
                <RadioGroup
                  aria-label="position"
                  name="position"
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio color="primary" />}
                    label="Male"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio color="primary" />}
                    label="Female"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl>

              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in !</h1>

              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button onClick={()=>localStorage.setItem('userId',1)}>Sign In</button>
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





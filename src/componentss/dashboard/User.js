import React,{Component} from "react";
import {dataGet} from "../../components/GetData"

class User extends Component {
constructor(){
  super();
  this.state={
    user:[]
  }
}

  componentDidMount(){
    dataGet('/user/'+localStorage.getItem("userId"))
    .then(response=>{
      this.setState({
        user: response
      });
      console.log(this.state.user)
    }
    )
  }

render(){
  return (
    
    <div className="content">
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-8" >
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Edit Profile</h4>
                <p className="card-category">Complete your profile</p>
              </div>
              <div className="card-body">
                <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group" style={{marginTop:"30px",display:"flex",justifyContent:"flex-start",marginLeft:"-26.5%",flexDirection:"column"}} >
                          <label>Company (disabled)</label>
                          <input type="text" className="form-control" disabled /><br/>
                        </div>
                        <div  className="form-group" style={{marginTop:"30px",display:"flex",justifyContent:"flex-start",marginLeft:"-26.5%",flexDirection:"column"}} >
                          <label >FullName</label>
                          <input type="text" className="form-control" value={this.state.user.fullName}/><br/>
                        </div>
                        </div>
                      <div style={{marginTop:"20px"}} className="col-md-6">
                    <img className="img" src='http://i38.photobucket.com/albums/e149/eloginko/profile_male_large_zpseedb2954.jpg' />
                      </div>
                      <div className="col-md-6">
                        <div className="form-group" style={{marginTop:"30px",display:"flex",justifyContent:"flex-start",marginLeft:"-26.5%",flexDirection:"column"}} >
                          <label>Email address</label>
                          <input type="email" className="form-control" value={this.state.user.emailId}/>
                          <br />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group" style={{marginTop:"30px",display:"flex",justifyContent:"flex-start",marginLeft:"-26.5%"}} >
                          <label>Contact No.</label>
                          <input type="number" className="form-control" value={this.state.user.phoneNumber} />
                          <br />
                        </div>
                      </div>
                    </div>
                     <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input type="text" className="form-control" value={this.state.user.streetAddress}/><br/>
                        </div>
                      </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" value={this.state.user.city} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>State</label>
                        <input type="text" className="form-control" value={this.state.user.state}/>
                        <br />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Country</label>
                        <input type="text" className="form-control" value={this.state.user.country} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Postal Code</label>
                        <input type="text" className="form-control" value={this.state.user.pincode}/>
                        <br />
                      </div>
                    </div>

                    </div>
                      <div className="clearfix" />
                    <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
                  </form>
            </div>
              </div>
            </div>
          </div>
        </div>
   </div>
  

  );
}
}

export default User;

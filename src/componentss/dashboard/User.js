import React from 'react';


function User() {
  return (
     <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Edit Profile</h4>
                  <p className="card-category">Complete your profile</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div  style={{marginTop:"20px"}}className="col-md-12">
                        <div className="form-group">
                          <label>Company (disabled)</label>
                          <input type="text" className="form-control" disabled /><br/>
                        </div>
                      </div> 
                       <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label >First Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" className="form-control" /><br/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email address</label>
                          <input type="email" className="form-control" /><br/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Contact No.</label>
                          <input type="number" className="form-control" /><br/>
                        </div>
                      </div>
                    </div>
                    </div>
                     <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input type="text" className="form-control" /><br/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>City</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>State</label>
                          <input type="text" className="form-control" /><br/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Country</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Postal Code</label>
                          <input type="text" className="form-control" /><br/>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
                    <div className="clearfix" />
                  </form>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
                  <a href="javascript:;">
                    <img className="img" src="../assets/img/faces/marc.jpg" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
  );
}

export default User;

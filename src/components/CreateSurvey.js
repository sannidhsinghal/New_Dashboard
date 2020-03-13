import React, { Component } from "react";
import { Stepper, Step, StepLabel, MenuItem } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Card, Button} from "react-bootstrap";
import { dataPost, dataGet } from "./GetData";
import Switch from "react-switch";
import { uploadFile, uploadImage } from "./FileUpload";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import PreviewSurvey from "../componentss/Preview/PreviewSurvey";
import AddQuestion from "./AddQuestion";

class CreateSurvey extends Component {
  constructor() {
    super();
    this.state = {
      baseLanguage: "",
      categoryId: 0,
      description: "",
      ensurePoints: "",
      isIpAllowed: false,
      keyPoints: "",
      name: "",
      singleResponseUser: false,
      approvalRequired: false,
      activeStep: 0,
      data: [],
      categories: [],
      imagePath: "",
      file: null,
      surveyId: "",
      itemType: "",
      setShow: false,
      isMandatory: false,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIp = this.handleIp.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleApproval = this.handleApproval.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  componentDidMount() {
    dataGet("/surveyCategory/getAllSurveyCategory").then(response => {
      this.setState({
        categories: response
      });
    });
  }

  handleNext() {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  }

  handleBack() {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  }

  handleModal() {
    this.setState({
      setShow: !this.state.setShow
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleResponse(singleResponseUser) {
    this.setState({ singleResponseUser });
  }
  handleIp(isIpAllowed) {
    this.setState({ isIpAllowed });
  }

  handleApproval(approvalRequired) {
    this.setState({ approvalRequired });
  }

 
  handleSubmit = event => {
    event.preventDefault();
    this.handleNext(this.state.activeStep);
    const survey = {
      baseLanguage: "English",
      categoryId: this.state.categoryId,
      description: this.state.description,
      ensurePoints: this.state.ensurePoints,
      isIpAllowed: this.state.isIpAllowed,
      keyPoints: this.state.keyPoints,
      name: this.state.name,
      createdById: localStorage.getItem("userId"),
      singleResponseUser: this.state.singleResponseUser,
      approvalRequired: this.state.approvalRequired,
      imagePath: this.state.imagePath
    };
    console.log(survey);
    dataPost(`/survey/createSurvey`, survey).then(res => {
      this.setState({
        data: res,
        surveyId: res.id,
        Name: res.name
      });
      console.log(res);
      console.log(res.data);
    });
  };

  handleFile(e) {
    this.setState({ file: e.target.files[0] });
  }

  async setImage() {
    var url = await uploadImage(this.state.file);
    console.log(url);
    this.setState({
      imagePath: url.data
    });
    console.log(this.state.imagePath);
  }

  getStepContent(params) {
    switch (params) {
      case 0:
        return (
          <div className="content">
            <div className="container-fluid" style={{ position: "relative" }}>
              <div className="row ">
                <label>Name: </label>
                <TextField
                  variant="outlined"
                  name="name"
                  margin="normal"
                  fullWidth
                  onChange={this.handleChange}
                />
                <br />
                <label>Language : </label>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="baseLanguage"
                  align="right"
                  onChange={this.handleChange}
                  value="English"
                />
                <br />
                <label>Category: </label>
                <TextField
                  variant="outlined"
                  select
                  margin="normal"
                  fullWidth
                  value={this.state.categoryId}
                  name="categoryId"
                  onChange={this.handleChange}
                  helperText="Please select a category"
                >
                  {this.state.categories.map(category => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </TextField>
                <br />
                <label>Ensure Points:</label>
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  rows="4"
                  name="ensurePoints"
                  onChange={this.handleChange}
                />
                <br />
                <label>Key Instructions:</label>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  rows="4"
                  name="keyPoints"
                  onChange={this.handleChange}
                />
                <br />
                <label>Description:</label>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  rows="4"
                  type="text"
                  name="description"
                  onChange={this.handleChange}
                />
                <label>Upload banner for the survey(optional)</label>
                <TextField
                  variant="outlined"
                  type="file"
                  onChange={this.handleFile}
                />
                <Button variant="login_btn" onClick={this.setImage}>
                  Upload
                </Button>
                <br />
                <label>Should one user fill the survey once only</label>
                <Switch
                  name="singleResponseUser"
                  onChange={this.handleResponse}
                  checked={this.state.singleResponseUser}
                  onColor="#bf8300"
                  onHandleColor="#ffff"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={15}
                  width={45}
                />
                <br />
                <span>Do you want to capture the IP address</span>
                <Switch
                  name="isIpAllowed"
                  onChange={this.handleIp}
                  checked={this.state.isIpAllowed}
                  onColor="#bf8300"
                  onHandleColor="#ffff"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={15}
                  width={45}
                />
                <br />
                <span>
                  Do you want to approve the user for filling the survey
                </span>
                <Switch
                  name="approvalRequired"
                  onChange={this.handleApproval}
                  checked={this.state.approvalRequired}
                  onColor="#bf8300"
                  onHandleColor="#ffff"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={15}
                  width={45}
                />
                <br />
                <Button
                  variant="login_btn"
                  align="right"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        );

      case 1:
        return(
          <AddQuestion/>
        )
      //   <div>
      //   <center>
      //  <p> Please upload the excel containing the questions</p>
      //     <div style={{marginTop:"200px"}}>
      //     <TextField type="file" onChange={this.handleFile}/>
      //     <Button variant="login_btn" onClick={() =>uploadFile(this.state.file,this.state.data.id,this.state.data.createdById)}>Upload</Button>
      //     <Button variant="login_btn" onClick={this.handleBack}>Back</Button>
      //     <Button variant="login_btn" onClick={this.handleNext}>
      //       Next
      //     </Button>
      //     </div>
      //     </center>
      //   </div>
      // )}

      // else{
      //   return(
      //   <div
      //   style={{ position: "fixed", top: "50%", left: "50%" }}
      //   className="d-flex flex-column align-items-center justify-content-center"
      // >
      //   <Spinner animation="grow" variant="warning">
      //     <span className="sr-only">Loading...</span>
      //   </Spinner>
      // </div>

      case 2:
        return (
          <div>
            <PreviewSurvey id={this.state.surveyId} Title={this.state.Name} />
            <Button onClick={this.handleNext}>Next</Button>
            <Button onClick={this.handleBack}>Back</Button>
          </div>
        );

      case 3:
        return (
          <div>
            <Button onClick={this.handleBack}>Back</Button>
            <Link to="/home">
              <Button>GO TO HOME SCREEN</Button>
            </Link>
          </div>
        );

      default:
        return null;
    }
  }


  render() {
    var steps = ["Enter Basic Details", "Add Questions", "Preview","Publish"];

    return (
      <div className="content">
        <div className="container-fluid">
          <div
            className="row "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card>
              <Card.Body className="p-4">
                <Stepper activeStep={this.state.activeStep}>
                  {steps.map(step => {
                    return (
                      <Step>
                        <StepLabel>{step}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                {this.getStepContent(this.state.activeStep)}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateSurvey;

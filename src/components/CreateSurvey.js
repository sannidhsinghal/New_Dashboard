import React, { Component } from "react";
import { Stepper, Step, StepLabel, MenuItem } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Card, Button, Modal } from "react-bootstrap";
import { dataPost, dataGet } from "./GetData";
import Switch from "react-switch";
import { uploadFile, uploadImage } from "./FileUpload";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import PreviewSurvey from "../componentss/Preview/PreviewSurvey";

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
      activeStep: 1,
      data: [],
      categories: [],
      imagePath: "",
      file: null,
      surveyId: "",
      itemType: "",
      setShow: false,
      isMandatory:false
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
    this.handleModal = this.handleModal.bind(this);
    this.getQuestionFields = this.getQuestionFields.bind(this);
    this.handleMandatory = this.handleMandatory.bind(this);
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

  handleMandatory(isMandatory){
    this.setState({isMandatory});
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
        console.log(this.state.data);
        const questionTypes=["MCQ","SCQ","Text","Number","Date_Time","Location","Email","Bar_Code","File_Upload","Likart_Scale","Scale","Rating","Media"]
        // if(this.state.data.length!==0){
        return (
          <div>
            <center>
              <Button onClick={this.handleModal}>
                Add Question
                </Button>
                <Modal show={this.state.setShow}
                onHide={this.handleModal}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Add Question</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <TextField
                      variant="outlined"
                      placeholder="Title"
                      fullWidth
                    ></TextField>
                    <br />
                    <TextField
                      variant="outlined"
                      placeholder="Description"
                      fullWidth
                    ></TextField>
                    <br />
                    <label><b>Should the question be mandatory</b></label>
                    <Switch
                  name="isMandatory"
                  onChange={this.handleMandatory}
                  checked={this.state.isMandatory}
                  onColor="#bf8300"
                  onHandleColor="#ffff"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={15}
                  width={45}
                /><br/>
                    <TextField variant="outlined" fullWidth placeholder="Reference Title" name="ref_title"></TextField><br/>
                    <TextField variant="outlined" fullWidth placeholder="Others" name="others"></TextField><br/>
                   <label><b>Please select the question type</b></label>
                    <TextField variant="outlined" fullWidth select name="itemType" onChange={this.handleChange} value={this.state.itemType}>
                      {questionTypes.map(questionType=>(
                        <MenuItem key={questionType} value={questionType}>
                          {questionType}
                        </MenuItem>
                      )
                      )}
                    </TextField><br/>

                    {this.getQuestionFields(this.state.itemType)}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary">Add</Button>
                  </Modal.Footer>
                </Modal>
            </center>
          </div>
        );
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

  getQuestionFields(params) {
    switch (params) {
      case "MCQ":
        return (
          <>
            <TextField variant="outlined" placeholder="option 1" fullWidth name="option1"></TextField>
            <br />
            <TextField variant="outlined" placeholder="option 2" fullWidth name="option2"></TextField>
            <br />
            <TextField variant="outlined" placeholder="option 3" fullWidth name="option3"></TextField>
            <br />
            <TextField variant="outlined" placeholder="option 4" fullWidth name="option4"></TextField>
            <br />
            <TextField variant="outlined" placeholder="option 5" fullWidth name="option5"></TextField>
            <br />
          </>
        );
      case "Text":
        return (
          <>
          </>
        );
      case "SCQ":
        return (
          <>
            <TextField variant="outlined" placeholder="option 1" fullWidth name="option1"></TextField>
            <br />
            <TextField variant="outlined" placeholder="option 2" fullWidth name="option2"></TextField>
            <br />
            <TextField variant="outlined" placeholder="option 3" fullWidth name="option3"></TextField>
            <br />
            <TextField variant="outlined" placeholder="option 4" fullWidth name="option4"></TextField>
            <br />
            <TextField variant="outlined" placeholder="option 5" fullWidth name="option5"></TextField>
            <br />
          </>
        );
      case "Bar_Code":
        return (
          <>
          </>
        );
      case "Signature":
        return (
          <>
          </>
        );
      case "Email":
        return (
          <>
          </>
        );
      case "File_Upload":
        return (
          <>
          </>
        );
      case "Rating":
        return (
          <>
          </>
        );

      case "Media":
        return(
          <>
          <TextField  name="format" helperText="Please select a format" select fullWidth>
            <MenuItem value="image">Image</MenuItem>
            <MenuItem value="audio">Audio</MenuItem>
            <MenuItem value="video">Video</MenuItem>
          </TextField>
          </>
        )
      case "Number":
        return(
          <>
          <TextField variant="outlined" placeholder="Lower Limit" fullWidth name="lower_limit"></TextField><br/>
          <TextField variant="outlined" placeholder="Upper Limit" fullWidth name="upper_limit"></TextField><br/>
          </>

        );
      
      case "Location":
        return(
          <>
          <TextField variant="outlined" placeholder="Location Settings" fullWidth name="settings"></TextField><br/>
          </>
        );
        
      case "Likart_Scale":
        return(
          <>
          <TextField variant="outlined" placeholder="Option 1" fullWidth name="option1"></TextField><br/>
          <TextField variant="outlined" placeholder="Option 2" fullWidth name="option2"></TextField><br/>
          <TextField variant="outlined" placeholder="Option 3" fullWidth name="option3"></TextField><br/>
          </>
        );
      case "Scale":
        return(
          <>
          <TextField variant="outlined" placeholder="Minimum Value" fullWidth name="min_value"></TextField><br/>
          <TextField variant="outlined" placeholder="Maximum Value" fullWidth name="max_value"></TextField><br/>
          <TextField variant="outlined" placeholder="Step Size" fullWidth name="step_size"></TextField>
          </>
        )
      case "Date_Time":
        return(
          <>
          <label>Please select the format</label>
          <TextField variant="outlined" fullWidth select name="format" ><br/>
          <MenuItem value="yyyy MM dd">yyyy MM dd</MenuItem>
          <MenuItem value="MM dd yyyy">MM dd yyyy</MenuItem>
          <MenuItem value="M dd yyyy">M dd yyyy</MenuItem>
          <MenuItem value="yyyy MM dd HH:mm:ss Z">yyyy MM dd HH:mm:ss Z</MenuItem>
          <MenuItem value="yyyy MM dd HH:mm	">yyyy MM dd HH:mm</MenuItem>
          </TextField><br/>
          <label>Please select type</label>
          <TextField variant="outlined" fullWidth select name="type"><br/>
          <MenuItem value="DATE">Date</MenuItem>
          <MenuItem value="DATE-TIME">Date-Time</MenuItem>
          <MenuItem value="TIME">Time</MenuItem>
          </TextField>
          </>
        )      
      default:
        return null;
    }
  }

  render() {
    var steps = ["Enter Basic Details", "Add Questions", "Preview", "Publish"];

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

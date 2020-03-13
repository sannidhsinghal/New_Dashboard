import React, { Component } from "react";
import { MenuItem, TextField } from "@material-ui/core";
import { Card, Button, Modal } from "react-bootstrap";
import { dataPost, dataGet } from "./GetData";
import Switch from "react-switch";

class AddQuestion extends Component {
  constructor() {
    super();
    this.state = {
      isMandatory: false,
      itemType: "",
      title: "",
      ref_title: "",
      description: "",
      others: "",
      item: {},
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      option5: "",
      min_value: "",
      max_value: "",
      lower_limit: "",
      upper_limit: "",
      step_size: "",
      format: "",
      type: "",
      settings: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.getQuestionFields = this.getQuestionFields.bind(this);
    this.handleMandatory = this.handleMandatory.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleMandatory(isMandatory) {
    this.setState({ isMandatory });
  }

  handleModal() {
    this.setState({
      setShow: !this.state.setShow
    });
  }

  getQuestionFields(params) {
    switch (params) {
      case "MCQ":
        return (
          <>
            <TextField
              variant="outlined"
              placeholder="option 1"
              fullWidth
              name="option1"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="option 2"
              fullWidth
              name="option2"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="option 3"
              fullWidth
              name="option3"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="option 4"
              fullWidth
              name="option4"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="option 5"
              fullWidth
              name="option5"
              onChange={this.handleChange}
            ></TextField>
            <br />
          </>
        );
      case "Text":
        return <></>;
      case "SCQ":
        return (
          <>
            <TextField
              variant="outlined"
              placeholder="option 1"
              fullWidth
              name="option1"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="option 2"
              fullWidth
              name="option2"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="option 3"
              fullWidth
              name="option3"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="option 4"
              fullWidth
              name="option4"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="option 5"
              fullWidth
              name="option5"
              onChange={this.handleChange}
            ></TextField>
            <br />
          </>
        );
      case "Bar_Code":
        return <></>;
      case "Signature":
        return <></>;
      case "Email":
        return <></>;
      case "File_Upload":
        return <></>;
      case "Rating":
        return <></>;

      case "Media":
        return (
          <>
            <TextField
              name="format"
              helperText="Please select a format"
              onChange={this.handleChange}
              select
              fullWidth
            >
              <MenuItem value="image">Image</MenuItem>
              <MenuItem value="audio">Audio</MenuItem>
              <MenuItem value="video">Video</MenuItem>
            </TextField>
          </>
        );
      case "Number":
        return (
          <>
            <TextField
              variant="outlined"
              placeholder="Lower Limit"
              fullWidth
              name="lower_limit"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="Upper Limit"
              fullWidth
              name="upper_limit"
              onChange={this.handleChange}
            ></TextField>
            <br />
          </>
        );

      case "Location":
        return (
          <>
            <TextField
              variant="outlined"
              placeholder="Location Settings"
              fullWidth
              name="settings"
              onChange={this.handleChange}
            ></TextField>
            <br />
          </>
        );

      case "Likart_Scale":
        return (
          <>
            <TextField
              variant="outlined"
              placeholder="Option 1"
              fullWidth
              name="option1"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="Option 2"
              fullWidth
              name="option2"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="Option 3"
              fullWidth
              name="option3"
              onChange={this.handleChange}
            ></TextField>
            <br />
          </>
        );
      case "Scale":
        return (
          <>
            <TextField
              variant="outlined"
              placeholder="Minimum Value"
              fullWidth
              name="min_value"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="Maximum Value"
              fullWidth
              name="max_value"
              onChange={this.handleChange}
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              placeholder="Step Size"
              fullWidth
              name="step_size"
              onChange={this.handleChange}
            ></TextField>
          </>
        );
      case "Date_Time":
        return (
          <>
            <label>Please select the format</label>
            <TextField
              variant="outlined"
              fullWidth
              select
              name="format"
              onChange={this.handleChange}
            >
              <br />
              <MenuItem value="yyyy MM dd">yyyy MM dd</MenuItem>
              <MenuItem value="MM dd yyyy">MM dd yyyy</MenuItem>
              <MenuItem value="M dd yyyy">M dd yyyy</MenuItem>
              <MenuItem value="yyyy MM dd HH:mm:ss Z">
                yyyy MM dd HH:mm:ss Z
              </MenuItem>
              <MenuItem value="yyyy MM dd HH:mm	">yyyy MM dd HH:mm</MenuItem>
            </TextField>
            <br />
            <label>Please select type</label>
            <TextField
              variant="outlined"
              fullWidth
              select
              name="type"
              onChange={this.handleChange}
            >
              <br />
              <MenuItem value="DATE">Date</MenuItem>
              <MenuItem value="DATE-TIME">Date-Time</MenuItem>
              <MenuItem value="TIME">Time</MenuItem>
            </TextField>
          </>
        );
      default:
        return null;
    }
  }

  createQuestion(params) {
    let item = {};
    let itemTypeId = 0;
    switch (params) {
      case "Text":
        itemTypeId = 3;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        break;

      case "Signature":
        itemTypeId = 8;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        break;

      case "Email":
        itemTypeId = 7;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        break;

      case "Likart_Scale":
        itemTypeId = 11;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        item["option1"] = this.state.option1;
        item["option2"] = this.state.option2;
        item["option3"] = this.state.option3;
        break;

      case "File_Upload":
        itemTypeId = 10;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        break;

      case "Rating":
        itemTypeId = 13;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        break;

      case "SCQ":
        itemTypeId = 2;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        break;

      case "Bar_Code":
        itemTypeId = 9;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        item["option1"] = this.state.option1;
        item["option2"] = this.state.option2;
        item["option3"] = this.state.option3;
        item["option4"] = this.state.option4;
        item["option5"] = this.state.option5;
        break;

      case "MCQ":
        itemTypeId = 1;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        item["option1"] = this.state.option1;
        item["option2"] = this.state.option2;
        item["option3"] = this.state.option3;
        item["option4"] = this.state.option4;
        item["option5"] = this.state.option5;
        break;

      case "Number":
        itemTypeId = 4;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        item["lower_limit"] = this.state.lower_limit;
        item["upper_limit"] = this.state.upper_limit;
        break;

      case "Media":
        itemTypeId = 14;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        item["format"] = this.state.format;
        break;

      case "Location":
        itemTypeId = 6;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        item["settings"] = this.state.settings;
        break;

      case "Date_Time":
        itemTypeId = 5;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        item["format"] = this.state.format;
        break;

      case "Scale":
        itemTypeId = 12;
        item["title"] = this.state.title;
        item["ref_title"] = this.state.ref_title;
        item["description"] = this.state.description;
        item["others"] = this.state.others;
        item["mandatory"] = this.state.isMandatory;
        item["min_value"] = this.state.min_value;
        item["max_value"] = this.state.max_value;
        item["step_size"] = this.state.step_size;
        break;
    }

    let question = {
      createdBy: 1,
      description: this.state.description,
      isMandatory: this.state.isMandatory,
      itemTypeId: itemTypeId,
      surveyId: 81,
      item: JSON.stringify(item)
    };
    dataPost("/question/addQuestionToSurvey", question).then(response => {
      console.log(response);
    });
  }

  render() {
    const questionTypes = [
      "MCQ",
      "SCQ",
      "Text",
      "Number",
      "Date_Time",
      "Location",
      "Email",
      "Signature",
      "Bar_Code",
      "File_Upload",
      "Likart_Scale",
      "Scale",
      "Rating",
      "Media"
    ];
    return (
      <div>
        <center>
          <Button onClick={this.handleModal}>Add Question</Button>
          <Modal show={this.state.setShow} onHide={this.handleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TextField
                variant="outlined"
                placeholder="Title"
                name="title"
                fullWidth
                onChange={this.handleChange}
              ></TextField>
              <br />
              <TextField
                variant="outlined"
                placeholder="Description"
                fullWidth
                name="description"
                onChange={this.handleChange}
              ></TextField>
              <br />
              <label>
                <b>Should the question be mandatory</b>
              </label>
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
              />
              <br />
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Reference Title"
                name="ref_title"
                onChange={this.handleChange}
              ></TextField>
              <br />
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Others"
                name="others"
                onChange={this.handleChange}
              ></TextField>
              <br />
              <label>
                <b>Please select the question type</b>
              </label>
              <TextField
                variant="outlined"
                fullWidth
                select
                name="itemType"
                onChange={this.handleChange}
                value={this.state.itemType}
              >
                {questionTypes.map(questionType => (
                  <MenuItem key={questionType} value={questionType}>
                    {questionType}
                  </MenuItem>
                ))}
              </TextField>
              <br />

              {this.getQuestionFields(this.state.itemType)}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={() => this.createQuestion(this.state.itemType)}
              >
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </center>
      </div>
    );
  }
}
export default AddQuestion;

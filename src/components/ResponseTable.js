import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { dataGet } from "./GetData";
import { Redirect } from "react-router-dom";

export class ResponseTable extends Component {
  constructor() {
    super();
    this.state = {
      responses: [],
      questions: [],
      questionIds: [],
      columns: [
        {
          name: "responseId",
          label: "ResponseId",
          options: {
            filter: true,
            sort: true,
            display: false
          }
        },
        "UserId",
        "Questions Answered"
      ],
      isLoading: true,
      answers: [],
      rowData: [],
      toDetail: false
    };
  }

  componentDidMount() {
    dataGet("/response/survey/1").then(res => {
      this.setState({
        responses: res
      });
    });
    this.state.questionIds = this.props.location.state.survey.questionIdList;

    this.props.location.state.survey.questionIdList.map(questionId => {
      dataGet("/question/" + questionId).then(que => {
        this.state.columns.push("Q." + JSON.parse(que.item).title);
      });
    });
    console.log(this.state.columns);
  }

  getDetail(params) {
    console.log(params);
    this.setState({
      rowData: params,
      toDetail: true
    });
  }

  render() {
    if (this.state.toDetail) {
      return (
        <Redirect
          to={{
            pathname: "/responseDetails",
            state: {
              data: this.state.rowData
            }
          }}
        />
      );
    }

    const data = [];

    this.state.responses.map(res => {
      const object = [];
      var id = {
        responseId: res.id
      };
      object.push(
        id,
        res.userId,
        res.data.length +
          "/" +
          this.props.location.state.survey.questionIdList.length
      );

      this.state.questionIds.forEach(questionId => {
        const val = res.data.filter(res => res.questionId == questionId);
        if (val.length > 0) {
          object.push(val[0].responseItem);
        } else {
          object.push("-");
        }
      });
      data.push(object);
    });

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      onRowClick: rowData => this.getDetail(rowData),
      onRowsDelete: false,
      disableToolbarSelect: true
    };

    return (
      <div className="content">
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-12">
     
        <MUIDataTable
          style={{ marginTop: "40%" }}
          title={"Responses"}
          data={data}
          columns={this.state.columns}
          options={options}
        />
     
      </div>
      </div>
      </div>
      </div>
      
    );
  }
}

export default ResponseTable;

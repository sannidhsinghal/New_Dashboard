import React, { Componenet, Component } from "react";
import Card from "react-bootstrap/Card";
import Chart from "react-apexcharts";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { dataGet } from "../../components/GetData";

class ResponseChart2 extends Component {
  constructor() {
    super();
    this.state = {
      responses: [],
      status: []
    };
    this.handleResponses = this.handleResponses.bind(this);
    this.handleCount = this.handleCount.bind(this);
  }

  componentDidMount() {
    this.handleResponses();
    this.handleCount();
  }

  handleResponses() {
    dataGet(
      "/report/surveyResponse?format=month&userId=" +
        localStorage.getItem("userId")
    ).then(response => {
      console.log(response);
      this.setState({
        responses: response
      });
    });
  }

  handleCount() {
    dataGet("/report/response/status/" + localStorage.getItem("userId")).then(
      response => {
        this.setState({
          status: response
        });
      }
    );
  }

  render() {
    var chartResponse = [];
    var labels = [];
    var statusResponse=[];
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    console.log(Object.values(this.state.responses));
    this.state.responses.forEach(res => {
      chartResponse.push({
        name: Object.keys(res),
        data: Object.values(res[Object.keys(res)])
      });
      var objects = [];
      objects.push(Object.keys(res[Object.keys(res)]));
      objects.forEach(obj => {
        obj.forEach(value => {
          if (!labels.includes(value)) {
            labels.push(months[parseInt(value) - 1]);
          } else {
            console.log("Already Present");
          }
        });
      });
    });
  
    this.state.status.forEach(res=>{
        statusResponse.push({
            name:Object.keys(res),
            data:Object.values(res[Object.keys(res)])
        })
    })


   

    var statusChartData={
        options: {
        xaxis: {
          categories: ["Approved","Rejected","Pending","Corrections"]
        },
        dataLabels: {
          enabled: true
        },
        markers: {
          size: 1
        }
      },

      series:statusResponse

    }

    return (
      <div>
        
        <Row>
          <Card className="col-md-12">
            <Card.Header className="text-right">
              <p></p>
            </Card.Header>
            <Card.Body>
              <Chart
                options={statusChartData.options}
                series={statusChartData.series}
                type="area"
              />
              <center>

              <button >
              Responses on basis of Status
</button>
              
              </center>
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  }
}
export default ResponseChart2;

import React, {Component } from "react";
import Card from "react-bootstrap/Card";
import Chart from "react-apexcharts";
import Row from "react-bootstrap/Row";
import { dataGet } from "../../components/GetData";

class StatusChart extends Component {
  constructor() {
    super();
    this.state = {
      responses: [],
      status: []
    };
  }

  componentDidMount() {
    dataGet("/report/response/status/" + localStorage.getItem("userId")).then(
      response => {
        this.setState({
          status: response
        });
      }
    );
  }

  render() {
    var statusResponse=[];
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
export default StatusChart;

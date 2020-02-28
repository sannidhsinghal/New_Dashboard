import React,{Component} from 'react';
import Bar from './Chart.js';
import Line from './Chart1.js';
import ResponseChart1 from './ResponseChart1.js';
import ResponseChart2 from './ResponseChart2.js';
import ResponseChart from './ResponseChart.js';
import { dataGet } from '../../components/GetData.js';



class  Dashboard extends Component {

  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    dataGet('/report/count?format=date&userId='+localStorage.getItem('userId'))
    .then(response=>{
      this.setState({
        data:response
      },
      console.log(this.state.data)
      )
    })
  }
  
  
  render(){
    return (
    <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-warning card-header-icon">
                  <div className="card-icon">
                  <i class="material-icons">
                            check_circle
                  </i>
                  </div>
                  <p className="card-category">Live Surveys</p>
                  <h3 className="card-title">{this.state.data.liveCount}
                  </h3>
                </div>
                <div className="card-footer">
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-success card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">store</i>
                  </div>
                  <p className="card-category">Draft Surveys</p>
                  <h3 className="card-title">{this.state.data.draftCount}</h3>
                </div>
                <div className="card-footer">
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-danger card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">info_outline</i>
                  </div>
                  <p className="card-category">Responses Captured</p>
                  <h3 className="card-title">{this.state.data.responseCount}</h3>
                </div>
                <div className="card-footer">
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-info card-header-icon">
                  <div className="card-icon">
                    <i className="fa fa-twitter" />
                  </div>
                  <p className="card-category">Total Surveys</p>
                  <h3 className="card-title">{this.state.data.liveCount+this.state.data.draftCount}</h3>
                </div>
                <div className="card-footer">
                </div>
              </div>
            </div>
          </div>
          <div className="row"  >
            <div className="col-md-5" style={{marginRight:"5%",marginLeft:"6%"}} >
              
                
                 
                  <ResponseChart1/>
           
                
            </div>
            
            <div className="col-md-5"style={{marginRight:"5%"}}>
              
                  <ResponseChart2/>
            </div>
                
             {/* <div className="col-md-6">
              <div className="card card-chart">
                <div className="card-header card-header-danger">
                  <div className="ct-chart" id="completedTasksChart" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Completed Tasks</h4>
                  <p className="card-category">Last Campaign Performance</p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> campaign sent 2 days ago
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
  );
  }
}

export default Dashboard;

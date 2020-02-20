import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import { Bar, Line } from 'react-chartjs-2';

export default class Chartt extends Component{
	constructor(props){
		super(props);
		this.state = {
			chartData:{
				labels: ['delhi','mumbai','pune'],
                datasets:[
                {
                	label:'Population',
                	data:[
                	5550,
                	5110,
                	5200
                	],
                	backgroundColor:[ 
                	'rgba(255,99,132,0.6)',
                	'rgba(54,162,235,0.6)',
                	'rgba(255,99,132,0.6)',
                	]
                }
                ]
			}
		}

	}
	render(){
		return(
			<div>
          <Row>
            <div className="col-md-6">
              <Card>
               <Card.Body>
                 <Bar
                  data={this.state.chartData}
                  // width={100}
                  // height={50}
                  options={{ 
                  title:{
                  	display:true,
                  	test:'Largest cities in India',
                  	fontSize:25,
                  },
                  legend:{
                  	display:true,
                  	position:'bottom'
                  } }}
                  />
              </Card.Body>
              </Card>
            </div>
              
            <div className="col-md-6">
             <Card>
             <Card.Body>
              <Line
                  data={this.state.chartData}
                  // width={100}
                  // height={50}
                  options={{ 
                  title:{
                  	display:true,
                  	test:'Largest cities in India',
                  	fontSize:25,
                  },
                  legend:{
                  	display:true,
                  	position:'bottom'
                  } }}
              />
              </Card.Body>
              </Card>
              </div>
          </Row>



              
        </div>
			)
	}
}
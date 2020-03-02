import React, { Component } from "react";
import { dataGet } from "./GetData";
import Card from "react-bootstrap/Card";




import Image from "react-bootstrap/Image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Zoom from 'react-img-zoom';



import ZoomImg from './ZoomImg.js';


class ResponseDetails extends Component {
  constructor() {
    super();
    this.state = {
      response: []
    };
  }

  componentDidMount() {
    dataGet(
      "/response/details/" + this.props.location.state.data[0].responseId
    ).then(res => {
      this.setState({
        response: res
      });
    });
  }

  renderSwitch(params) {
    switch (params.question.itemType.code) {
      case "Media":

        return (
         
         <div>
           <Zoom
  img={params.responseItem}
  zoomScale={3}
  width={600}
  height={300}
/>










         </div>
         
        );

      case "Text":
        return <div>{params.responseItem}</div>;

      default:
        return <div>No response recorded</div>;
    }
  }

  render() {
    return (





      <div className="content">
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-12">
      <div class="card" >
      <div class="card-body">
      <h5 class="card-title">Responses</h5>
       <p class="card-text"> <ul>
              {this.state.response.map(res => {
                return (
                  <li style={{ marginLeft: "80px" }} key={res.responseItem}>
                    <b>
                      {"Q."} {JSON.parse(res.question.item).title}
                    </b>
                    <br />
                    {this.renderSwitch(res)}
                  </li>
                );
              })}
            </ul>
            </p>
       
        </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      
      
     
    );
  }
}
export default ResponseDetails;

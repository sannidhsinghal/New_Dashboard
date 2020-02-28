import React, { Component } from "react";
import { dataGet } from "./GetData";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import Popover from "react-bootstrap/Popover";
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Image from "react-bootstrap/Image";

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
        const popover = (
          
          








          <Popover id="popover-basic" outOfBoundaries="false">
            <Popover.Title>Image</Popover.Title>
            <Popover.Content>
              <Image
                // style={{ height: "300px", width: "300px" }}
                src={params.responseItem}
              />
            </Popover.Content>
          </Popover>
        );
        return (
         

          <OverlayTrigger trigger="click" placement="top" overlay={popover}>

            <Figure>
              <Figure.Image
                width={171}
                height={180}
                //alt="171x180"
                src={params.responseItem}
              />
            </Figure>
          </OverlayTrigger>
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

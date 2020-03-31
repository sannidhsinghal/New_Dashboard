import React, { Component } from "react";
import { dataGet } from "./GetData";
import Card from "react-bootstrap/Card";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Rating from "react-rating";
import MDSpinner from "react-md-spinner";

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
          <Card style={{ width: "600px", height: "350px" }}>
            <Card.Body>
              <TransformWrapper>
                <TransformComponent>
                  <img
                    style={{ width: "550px", height: "300px" }}
                    src={params.responseItem}
                    alt="test"
                  />
                </TransformComponent>
              </TransformWrapper>
            </Card.Body>
          </Card>
        );

      case "Text":
        return (
          <Card>
            <Card.Body>{params.responseItem}</Card.Body>
          </Card>
        );

      case "Number":
        return (
          <Card>
            <Card.Body>{params.responseItem}</Card.Body>
          </Card>
        );

      case "Email":
        return (
          <Card>
            <Card.Body>{params.responseItem}</Card.Body>
          </Card>
        );

      case "Rating":
        return (
          <Card>
            <Card.Body>
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                initalRating={params.responseItem}
                readonly
              />
              />
            </Card.Body>
          </Card>
        );

      case "Signature":
        return (
          <Card>
            <Card.Body>
              <img
                style={{ width: "550px", height: "300px" }}
                src={params.responseItem}
                alt="test"
              />
            </Card.Body>
          </Card>
        );

      default:
        return <div>No response recorded</div>;
    }
  }

  render() {
    if (!this.state.response.length) {
      return <MDSpinner style={{marginTop:"120px", marginLeft: "420px" }}/>}

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h4
                    className="card-title"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "25px"
                    }}
                  >
                    <strong>Responses</strong>
                  </h4>
                  <p className="card-text">
                    {" "}
                    <ul>
                      {this.state.response.map(res => {
                        return (
                          <li key={res.responseItem}>
                            <h5>
                              <b>
                                {" "}
                                {"Q."} {JSON.parse(res.question.item).title}
                              </b>
                            </h5>
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

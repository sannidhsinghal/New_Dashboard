import React, { Component } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Chartt from './Chartt.js';


export default class Cardd extends Component {
  render() {
    return (
      
      <div >
        <CardDeck style={
        	{
        		marginBottom:"20px"
        	}
        }>
          <Card
            border="dark"
            text="white"
            style={{ width: "20rem", backgroundColor:"#9c27b0" }}
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>abcd</Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card text="white" style={{ width: "20rem",backgroundColor:"#d81b60"}}>
            <Card.Header >Header</Card.Header>
            <Card.Body>
              <Card.Title>Secondary Card Title</Card.Title>
              <Card.Text >efgh</Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card  text="white" style={{ width: "20rem", backgroundColor:"#ad1457" }}>
            <Card.Header >Header</Card.Header>
            <Card.Body>
              <Card.Title>Success Card Title</Card.Title>
              <Card.Text>ijkl</Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card  text="white" style={{ width: "20rem",backgroundColor:"#4db6ac" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Danger Card Title</Card.Title>
              <Card.Text>mnop</Card.Text>
            </Card.Body>
          </Card>
          <br />



          

        </CardDeck>
        <CardDeck style={{marginBottom:"10px"}}>
          <Card
            border="dark"
            text="white"
            style={{ width: "30rem"}}
          >
           <Chartt/>
          </Card>
          <br/>

          
          

          

        </CardDeck>
      </div>
    );
  }
}

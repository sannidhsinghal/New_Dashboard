import React from 'react'
import {TextField} from "@material-ui/core"
import {Card} from "react-bootstrap"
import {View,TextInput,TouchableOpacity,Text} from 'react'
import {dataGet} from "../components/GetData"


class AddQuestions extends React.Component{
    constructor(){
        super()
        this.state={
            param:''
        }
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    componentDidMount() {
        dataGet("/survey/getquestions?surveyId="+this.props.id)
        .then(result=>{
       this.setState({
           param:result 
       })
       console.log(this.state.param)
    })
}

getFormContent(param){
    console.log(this.param)
         switch (param){

          case 'MCQ':
                this.MCQ()
              break;

          case 'SCQ':
                   this.SCQ()
              break;

          case 'Date_Time':
                 this.Date_Time()
               break;

          case 'Likart_Scale':
               this.Likart_Scale()
               break;

          case 'BarCode':
            this.BarCode()
                 break;

          case 'Location':
                   this.Location()
                 break;

          case 'Media':
                 this.Media()
             break;
                                          
         }
         
   } 

   handleSubmit=()=>{
       this.setState(
           this.state.param
       )
   }


   Location=()=>{
    return(           
 <div className="loginParent">
 <div className="col-sm-4">
 <Card style={{ display:'flex', justifyContent:'center' }}>
 <Card.Body className="p-4">
 <form > 
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="settings" placeholder="location_settings" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
 </form> 
 </Card.Body>
 </Card>
 </div>
 </div>)}

 MCQ=()=>{
    return( 
 <div className="loginParent">
 <div className="col-sm-4">
 <Card style={{ display:'flex', justifyContent:'center' }}>
 <Card.Body className="p-4">
 <form> 
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option1" placeholder="option1" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option2" placeholder="option2" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="option3" placeholder="option3" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option4" placeholder="option4" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="option5" placeholder="option5" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="all_of_the_above" placeholder="all_of_the_above" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="none_of_the_above" placeholder="none_of_the_above" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="select_min_options" placeholder="select_min_options" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="select_max_options" placeholder="select_max_options" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
 </form> 
 </Card.Body>
 </Card>
 </div>
 </div>)}

  SCQ=()=>{
    return(
 <div className="loginParent">
 <div className="col-sm-4">
 <Card style={{ display:'flex', justifyContent:'center' }}>
 <Card.Body className="p-4">
 <h2>SCQ Form</h2>
 <form > 
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option" placeholder="option" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
 </form> 
 </Card.Body>
 </Card>
 </div>
 </div>)}

    Media=()=>{
    return(            
 <div className="loginParent">
 <div className="col-sm-4">
 <Card style={{ display:'flex', justifyContent:'center' }}>
 <Card.Body className="p-4">
 <h2>Media</h2>
 <form > 
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="type" placeholder="DATE|TIME|DATE-TIME" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
 </form> 
 </Card.Body>
 </Card>
 </div>
 </div>)}

  Number=()=>{
    return(           
 <div className="loginParent">
 <div className="col-sm-4">
 <Card style={{ display:'flex', justifyContent:'center' }}>
 <Card.Body className="p-4">
 <h2>Number Form</h2>
 <form > 
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?"/>
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="lower_limit" placeholder="lower_limit" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="upper_limit" placeholder="upper_limit" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
 </form> 
 </Card.Body>
 </Card>
 </div>
 </div>)}

Scale=()=>{
    return(
 <div className="loginParent">
 <div className="col-sm-4">
 <Card style={{ display:'flex', justifyContent:'center' }}>
 <Card.Body className="p-4">
 <h2>Scale Form</h2>
 <form> 
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="min_value" placeholder="min_value" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="max_value" placeholder="max_value" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="step_size" placeholder="step_size" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />

 </form> 
 </Card.Body>
 </Card>
 </div>
 </div>)}



   BarCode=()=>{
    return(
         <div className="loginParent">
         <div className="col-sm-4">
         <Card style={{ display:'flex', justifyContent:'center' }}>
         <Card.Body className="p-4">
         <h2>BarCode Form</h2>
         <form> 
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
         <br/>
         </form> 
         </Card.Body>
         </Card>
         </div>
         </div>
    )}
    Date_Time=()=>{
    return(
        <div className="loginParent">
        <div className="col-sm-4">
         <Card style={{ display:'flex', justifyContent:'center' }}>
         <Card.Body className="p-4">
         <h2>Date_Time Form</h2>
         <form> 
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="type" placeholder="DATE|TIME|DATE-TIME" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="format" placeholder="dd/mm/yy" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
         </form> 
         </Card.Body>
         </Card>
         </div>
         </div>
        )}

        Likart_Scale = () => {
    return(            
 <div className="loginParent">
 <div className="col-sm-4">
 <Card style={{ display:'flex', justifyContent:'center' }}>
 <Card.Body className="p-4">
 <h2>
 </h2>
 <form> 
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option1" placeholder="option1" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option2" placeholder="option2" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="option3" placeholder="option3" />
 <br/>
 <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
 </form> 
 </Card.Body>
 </Card>
 </div>
 </div>)}

 render(){
     return(
        <button type="button" onClick={this.handleSubmit}>
        Please Add Add Questions
        </button>

     )
 }
    
}
export default AddQuestions

import React,{Component} from 'react'
import {dataGet} from '../../components/GetData.js'
import {TextField,Card} from '@material-ui/core'
import Rating from "react-rating";



class PreviewSurvey extends Component{
    constructor(props){
        super();
        this.state={
         data:[]
        }
        this.setPreview=this.setPreview.bind(this)
        }
    
componentDidMount(){
        dataGet("/survey/getquestions?surveyId="+this.props.surveyId)
            .then(result=>{
           this.setState({
               data:result 
           })
           console.log(this.state.obj)           
        })
    }


  setPreview(params){
      console.log(params)
      switch(params.itemType){

        case "Text":
            console.log("component called")
            return(
                <>
                <b>Q.{params.title}</b><br/>
                <TextField fullWidth disabled></TextField>
               </>
            );
        
        case "Media":
            return(
                <>
                <b>Q.{params.title}</b>
                <input type ="file" fullWidth></input>
                </>
            );
        
        case "MCQ":
            return(
                <>
                <b>Q.{params.title}</b>
                <input type ="checkbox">{params.option1}</input>
                <input type ="checkbox">{params.option2}</input>
                <input type ="checkbox">{params.option3}</input>
                <input type ="checkbox">{params.option4}</input>
                <input type ="checkbox">{params.option5}</input>
                </>
            )    

            case "SCQ":
                return(
                    <>
                    <b>Q.{params.title}</b>
                    <input type="radio" >{params.option1}</input>
                    <input type="radio" >{params.option2}</input>
                    <input type="radio" >{params.option3}</input>
                    <input type="radio" >{params.option4}</input>
                    <input type="radio" >{params.option5}</input>
                    </>
                )
        case "Bar_Code":
            return(
                <>
                <b>Q.{params.title}</b>
                <img src ="https://surveyglance.s3.us-east-2.amazonaws.com/bar code_20200315113834.jpg"
                height="300"
                ></img><br/>
                </>
            )
        case "Rating":
            return(
                <>
                <b>Q.{params.title}</b>
                <Rating
                emptySymbol="fa fa-star-o fa-2x"
                initalRating="0"
                readonly
              />
                </>
            );                 

        case "File_Upload":
            return(
                <>
                <b>Q.{params.title}</b>
                <input type ="file" fullWidth></input>
                </>
            ); 
        
        case "Signature":
            return(
                <>
                <b>Q.{params.title}</b><br/>
                <TextField fullWidth disabled multiline rows="5"></TextField>
                </>
            );
            
        case "Email":
            return(
                <>
                <b>Q.{params.title}</b><br/>
                <TextField fullWidth disabled></TextField>
                </>
            );
        
        case "Number":
            return(
                <>
                <b>Q.{params.title}</b><br/>
                <input type ="number" fullWidth disabled></input>
                </>
            )    


      }
  }  
        
render(){
    return(
    <>
              <div className="card-header card-header-primary">
        <div style={{marginTop:"5px" }}>
           <h1 className="card-title" style={{textAlign:"center"}}>{this.props.Title}</h1> 
            </div>
            </div>
            <div className="card-body">
             <div className="row">
            {this.state.data.map(res=>{  
                var queItem = JSON.parse(res.item)
                return(
                <>    
                {this.setPreview(queItem)}
                <br/>
                </>
                )
            }
    )}
        
    {/* <button style={{display:"flex", margin:"auto"}} type="submit"> Next</button> */}
    </div>
    </div>
    </>
    )
}}

    

export default PreviewSurvey


import React,{Component} from 'react'
import InText from './InText.js'
import InMCQ from './InMCQ.js'
import InMedia from './InMedia'
import {dataGet} from '../../components/GetData.js'


class PreviewSurvey extends Component{
    constructor(){
        super();
        this.state={
            obj: [],
        }
        }
    
componentDidMount(){
     console.log("Component called")
        dataGet("/survey/getquestions?surveyId=1")
            .then(result=>{
           this.setState({
               obj:result 
           })
           console.log(this.state.obj)
           ;           
        })
    }       
        
render(){
    return(
        <div style={{marginTop:"100px", marginLeft:"90px", }}>
           <h1 style={{textAlign:"center"}}>Survey Form</h1> 
           <div style={{marginBottom:"20px"}}>
            {this.state.obj.forEach(res=>{
                var queItem = JSON.parse(res.item)
                if (queItem.itemType === "Text") {
        return (
                
            <InText 
             title={queItem.title}
            itemType = {queItem.itemType}
            placeholder={queItem.placeholder}
            required={queItem.required}
            key={queItem.placeholder}
            handleChange={this.handleChange}
            />
        )
    }

    if (queItem.itemType === "checkbox"){
        return (
            <InMCQ 
            title={queItem.title}
            itemType={queItem.itemType}
            placeholder={queItem.placeholder}
            required={queItem.required}
            key={queItem.placeholder}
            handleChange={this.handleChange}
            />
        )
    } 

    if (queItem.itemType === "Media"){
        return (
            <InMedia 
            title={queItem.title}
            itemType={queItem.itemType}
            placeholder={queItem.placeholder}
            required={queItem.required}
            key={queItem.placeholder}
            handleChange={this.handleChange}
            />
        )
    }         
        
    })}
        </div>

    <button style={{display:"flex", margin:"auto"}} type="submit"> Submit</button>
        </div>
    )
}}

    

export default PreviewSurvey


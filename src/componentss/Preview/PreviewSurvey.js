import React,{Component} from 'react'
import InText from './InText.js'
import InMCQ from './InMCQ.js'
import InMedia from './InMedia'
import {dataGet} from '../../components/GetData.js'


class PreviewSurvey extends Component{
    constructor(props){
        super();
        this.state={
            obj: [],
        }
        }
    
componentDidMount(){
     console.log("Component called")
        dataGet("/survey/getquestions?surveyId="+this.props.id)
            .then(result=>{
           this.setState({
               obj:result 
           })
           console.log(this.state.obj)           
        })
    }
        
render(){
    return(
        <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" >
            <div className="card">
              <div className="card-header card-header-primary">
        <div style={{marginTop:"5px" }}>
           <h1 className="card-title" style={{textAlign:"center"}}>{this.props.Title}</h1> 
            </div>
            </div>
            <div className="card-body">
             <div className="row">
              <div className="col-md-12">
            {this.state.obj.map(res=>{
                
                var queItem = JSON.parse(res.item)
                
                if (queItem.itemType === "Text") {
                    return ( 
            <div style={{paddingBottom:"5px", fontSize:"16px"}}>
            <InText
             title={queItem.title}
            itemType = {queItem.itemType}
            placeholder={queItem.placeholder}
            required={queItem.required}
            key={queItem.placeholder}
            handleChange={this.handleChange}
            />
            </div>
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
            <div style={{paddingBottom:"5px", fontSize:"16px"}}>

            <InMedia 
            title={queItem.title}
            itemType={queItem.itemType}
            placeholder={queItem.placeholder}
            required={queItem.required}
            key={queItem.placeholder}
            handleChange={this.handleChange}
            />
            </div>
        )
    }     
        
    })}
        
    {/* <button style={{display:"flex", margin:"auto"}} type="submit"> Next</button> */}
    </div>
    </div>
   
    </div>
        </div>
        </div>
        </div>
        </div>
         </div>
    
    )
}}

    

export default PreviewSurvey


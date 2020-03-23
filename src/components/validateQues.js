import React, { Component }from 'react';


class valQues extends Component {
    constructor(props){
        super(props);

        this.state = {
            fields: [],
            errors: [],
            disp: [],
            
        }
    }

    ComponentDidMount(
        dataGet("getAllQuestions")
        .then(response{
            this.setState({
                response:res
            })

        })
    )

  handleValidation(){
      let fields = this.state.fields;
      let errors = [];
      let formIsValid = true;

      if(!fields["name"]) {
          formIsValid = false;
          errors["name"] = "Cannot be empty";
      }

      if(typeof fields["name"] !=="undefined") {
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";

          }
      }

      if(!fields["phone"]) {
        formIsValid = false;
        errors["phone"] = "Cannot be empty";
    }

    if(typeof fields["phone"] !=="undefined") {
        if(!fields["phone"].match(/^[0-9\b]+$/)){
            formIsValid = false;
            errors["phone"] = "Only integers";

        }
    }

      if(!fields["email"]){
          formIsValid = false;
          errors["email"] = "Cannot be empty";

      }
      if (typeof fields["email"] !== "undefined") {
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');

        if (!(lastAtPos <lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos >2 && (fields["email"].length - lastDotPos)>2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
        }
      }


      if(!fields["address"]) {
        formIsValid = false;
        errors["address"] = "Cannot be empty";
    }

    if(typeof fields["address"] !=="undefined") {
        if(!fields["address"].match(/^[A0-Za-z9-_]+$/)){
            formIsValid = false;
            errors["address"] = "Address is not valid";

        }
    }
      this.setState({ 
        errors: errors});
        
      return formIsValid
      }  
      
      handleSubmit = (e) => {
          e.preventDefault();
          let fields = this.state.fields;
          console.log("checked",fields);
          let dispname = [...this.state.disp];

          dispname.push(fields);
          console.log("check",dispname)

          this.setState({
              disp: dispname,
              
          });
         
          if(this.handleValidation()) {
              alert("Form submitted");
              console.log(this.state.fields,"validation");
              return fields
      
        }
             else {
                alert("Form has errors")
            }
              this.setState({
                fields: {}
            }
            )
            
            console.log(this.state.fields,"checking");
        }
      handleChange(field, e){
          let fields = this.state.fields;
          fields[field] = e.target.value;
          this.setState({fields});
          
      }

    render() {
       
    return (
      <form >
      <div>
    

      <button onClick={this.onViewRecords} className="View">View Records </button>

     <h2 className="Text">Name  <input type="text" placeholder="Name" value={this.state.fields["name"]} onChange={ this.handleChange.bind(this, "name")} className="Input" /></h2>

     <span style={{color: "red"}}>{this.state.errors["name"]}</span>

     
     <h2 className="Text">Phone No.<input name="phone" type="text"  placeholder="Phone" value={this.state.fields["phone"]}  onChange={ this.handleChange.bind(this,"phone")} className="Input"/></h2>

      <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
 
     
      <h2 className="Text">Email <input name="email" placeholder="Email" value={this.state.fields["email"]} onChange={this.handleChange.bind(this, "email")} className="Input"/></h2>

     <span style={{color: "red"}}>{this.state.errors["email"]}</span>

    
     <h2 className="Text">Address <input name="address" type="text" placeholder="Address" value={this.state.fields["address"]} onChange={this.handleChange.bind(this, "address")} className="Input"/></h2>
    
    <span style={{color: "red"}}>{this.state.errors["address"]}</span>

    <button onClick={this.handleSubmit}  type="submit" className="Button"> <b>Submit</b></button>
  
    </div>
    </form>
  )}
      };

export default valQues;


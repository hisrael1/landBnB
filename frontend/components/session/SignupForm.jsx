import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user);
    this.props.closeModal();
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  demoSubmit(e) {
    e.preventDefault();
    const user = {
      email: "user@demo.com",
      password: "password"
    }
    this.props.demoLogin(user);
    this.props.closeModal();
  };
  
  render () {
   return (
    <>
      <h1 className="form-name">{this.props.formType}</h1>
      <hr className="form-line" ></hr>
      <h1 className="welcome-session"> Welcome to Landbnb </h1>
        <form onSubmit={this.handleSubmit}>
            <input className="form-input" type="text" value={this.state.email} onChange={this.update('email')} placeholder="email"/>
            <input className="form-input" type="text" value={this.state.first_name} onChange={this.update('first_name')} placeholder="first name"/>
            <input className="form-input" type="text" value={this.state.last_name} onChange={this.update('last_name')} placeholder="last name"/>
            <input className="form-input-bottom" type="password" value={this.state.password} onChange={this.update('password')} placeholder="password"/>
          <button className="form-button" onClick={this.handleSubmit}>{this.props.formType}</button>
          <button className="form-button" onClick={this.demoSubmit}>{'Demo'}</button>
        </form>
        <Link to={`/${this.props.formType === "login" ? "signup" : "login"}`}></Link>
          {
            this.props.errors ? 
              this.props.errors.map( error => <p>{error}</p>)
                :
              ""
          }
     </>
   )
  }
}

export default SignupForm;

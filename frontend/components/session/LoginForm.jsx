import React from "react";

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then((res) => this.props.closeModal(), err => {
      this.setState({
        email: "",
        password: ""
      })
      alert("Invalid Credentials")
    })
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
      this.props.processForm(user)
      this.props.closeModal();
  };
  
  render () {

   return (
    <> 
      <div className="x-button" onClick={() => this.props.closeModal()}>&#10006;</div>
      
      
      <form id="session-form-container" onSubmit={this.handleSubmit}>
        <h1 className="form-name">{this.props.formType}</h1>
        <div className="form-line" ></div>
        <h1 className="welcome-session"> Welcome to Landbnb </h1>
          <input className="form-input" type="text" value={this.state.email} onChange={this.update('email')} placeholder="email"/>
          <input className="form-input-bottom" type="password" value={this.state.password} onChange={this.update('password')} placeholder="password"/>
        <button className="form-button" onClick={this.handleSubmit}>{this.props.formType}</button>
        <button className="form-button" onClick={this.demoSubmit}>{'Demo'}</button>
      </form>
    </>
   )
  }
}

export default LoginForm;

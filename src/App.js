import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import Form from "./components/form"

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }

  }
  handleEmailChange =(event)=>{
    const test = event.target.value
    let regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log(regex.test(test))
    this.setState({email: event.target.value, emailIsValid:regex.test(test)})

    //  this.setState({emailIsValid: regex.test(test)})
  }

  handlePasswordChange = (event) =>{
    this.setState({password: event.target.value, passwordIsValid: event.target.value.length > 5})
    // {!this.state.emailIsValid && classChange ==="is-invalid"}

    
  }

  handleRememberMeChange = (event) => {

    this.setState({rememberMe: true})

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({isSubmitted : this.state.passwordIsValid && this.state.emailIsValid})
  }


render (){
  console.log(this.state.emailIsValid)
  console.log(this.state.passwordIsValid)
  console.log(this.state.isSubmitted)

// let classChange = ""
  return (
 <div>
    <h1>Login</h1>

    {this.state.isSubmitted ?(
          <p>{this.state.email}</p>
        ) : (
    <Form onChangeEmail={this.handleEmailChange} 
      onChangePassword={this.handlePasswordChange}
      onChangeRememberMe={this.handleRememberMeChange} 
      onSubmit={this.handleSubmit}>
      {/* classChange = {this.classChange} */}

     </Form>
    )}
 </div>
  );
  }
}


export default App;

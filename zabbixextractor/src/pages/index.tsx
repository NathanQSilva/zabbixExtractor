// Styles
import styles from './index.module.scss';

// Internal imports
import { useLogin } from '../contexts/loginContext'

// External imports
import React from 'react';

const {
  setLoginData,
} = useLogin()

// Functions
function sendLogin(usuario, senha, servidor) {


  //setLoginData(usuario, senha, servidor)

  window.location.href = "/home"
}

// Main code
export default class LoginPage extends React.Component {

  // Constructor Form
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pass: "",
      address: "",
    }
  }

  // Internal events
  userChanged(event) {
    this.setState({
      user: event.target.value
    })
  }

  passChanged(event) {
    this.setState({
      pass: event.target.value
    })
  }

  serverChanged(event) {
    this.setState({
      address: event.target.value
    })
  }

  buttonClicked() {
    var user = this.state.user;
    var pass = this.state.pass;
    var address = this.state.address;

    sendLogin(user, pass, address)
  }

  // Render
  render() {
    return (
      <div className={styles.indexPage}>
  
        <div className={styles.loginFormContainer}>
  
          <div className={styles.loginLogo}>
            <img src="/logo_transparent.png" alt="Logo zabbix extractor" width="200"/>
          </div>
  
          <div className={styles.loginData}>
            <label>Username</label><br/>
            <input type="text" value={this.state.user} onChange={this.userChanged.bind(this)} /><br/>
  
            <label>Password</label><br/>
            <input type="password" value={this.state.pass} onChange={this.passChanged.bind(this)} /><br/>
  
            <label>Server</label><br/>
            <input type="text" value={this.state.address} onChange={this.serverChanged.bind(this)} /><br/>
          </div>
  
          <div className={styles.loginButton}>
            <button onClick={this.buttonClicked.bind(this)}>Login</button>
          </div>
  
        </div>
      </div>
    );
  }
}

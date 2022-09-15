import React, { Component } from 'react'
import './Signup.scss'
import TextField from '@mui/material/TextField/TextField';
import Radio from '@mui/material/Radio/Radio';
import { RadioGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import Button from '@mui/material/Button/Button';
import AuthServices from '../Services/AuthServices';

const authservices = new AuthServices();

export default class Signup extends Component {

  constructor() {
    super();
    this.state = {
      UserName: '',
      Password: '',
      ConfirmPassword: '',
      RoleValue: 'User',
      UsernameFlag: false,
      PasswordFlag: false,
      ConfirmPasswordFlag: false,
    }
  }

  handleValues = e => {
    const { name, value } = e.target
    this.setState({ [name]: value }, console.log('name', name, ('value', value),))
  }

  handleChangeRole = e => {
    this.setState({ RoleValue: e.target.value })
  }

  Checkvalidity() {
    console.log('Checkvalidity calling...')
    this.setState({ UsernameFlag: false, PasswordFlag: false, ConfirmPasswordFlag: false })

    if (this.state.UserName === '') {
      this.setState({ UsernameFlag: true })
    }
    if (this.state.Password === '') {
      this.setState({ PasswordFlag: true })
    }
    if (this.state.ConfirmPassword === '') {
      this.setState({ ConfirmPasswordFlag: true })
    }
  }

  handlesubmit = (e) => {
    this.Checkvalidity()
    if (this.state.UserName !== '' &&
      this.state.Password !== '' &&
      this.state.ConfirmPassword !== '') {
      console.log('Acceptable')
      let data = {
        userName: this.state.UserName,
        password: this.state.Password,
        confirmPassword: this.state.ConfirmPassword,
        role: this.state.RoleValue
      }
      authservices.Signup(data)
        .then((data) => {
          console.log('data:', data)
        }).catch((error) => {
          console.log('Error:', error)
        })
    }
    else {
      console.log('Not Acceptable')
    }
  }

  render() {
    console.log('state:', this.state)

    return (
      <div className='Signup-container'>
        <div className='Signup-SubContainer'>
          <div className='Header'>Sign Up</div>
          <div className='Body'>
            <form className='form'>
              <TextField id="outlined-basic" onChange={this.handleValues} name='UserName' value={this.state.UserName} error={this.state.UsernameFlag} className='TextField' label="Username" variant="outlined" size='small' />
              <TextField id="outlined-basic" type="password" onChange={this.handleValues} name='Password' value={this.state.Password} error={this.state.PasswordFlag} className='TextField' label="Password" variant="outlined" size='small' />
              <TextField id="outlined-basic" type="password" onChange={this.handleValues} name='ConfirmPassword' value={this.state.ConfirmPassword} error={this.state.ConfirmPasswordFlag} className='TextField' label="Confirm Password" variant="outlined" size='small' />
              <RadioGroup name='Role' value={this.state.RoleValue} className='Roles' onChange={this.handleChangeRole}>
                <FormControlLabel className='RoleValue' value='Admin' control={<Radio />} label='Admin' />
                <FormControlLabel className='RoleValue' value='User' control={<Radio />} label='User' />
              </RadioGroup>
            </form>
          </div>
          <div className='Button'>
            <Button color='primary' className='btn' variant='contained'>Sign In</Button>
            <Button color='primary' className='btn' variant='contained' onClick={this.handlesubmit}>Sign Up</Button>
          </div>
        </div>
      </div>
    )
  }
}

import React from 'react'
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export const FormUserDetails = ({ nextStep, handleChange, values }) => {


    const steppingForm = e => {
        e.preventDefault()
        nextStep()
    }
  return (
    <MuiThemProvider>
        
        <AppBar title='Enter User Details' />
        <TextField 
        hintText='Enter your first name'
        floatingLabelText='First Name'
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}

        />
        <br/>
        <TextField 
        hintText='Enter your last name'
        floatingLabelText='Last Name'
        onChange={handleChange('lastName')}
        defaultValue={values.lastName}

        />
        <br/>
        <TextField 
        hintText='Enter your Email'
        floatingLabelText='Email'
        onChange={handleChange('email')}
        defaultValue={values.email}

        />
        <br/>
        <RaisedButton
        label="Continue"
        primary={true}
        style={styles.button}
        onClick={steppingForm}
        />
        
    </MuiThemProvider>
  )
}


const styles = {
    button: {
        margin: 15

    }
}
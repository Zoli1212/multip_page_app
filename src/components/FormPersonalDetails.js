import React from 'react'
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export const FormPersonalDetails = ({ nextStep, prevStep, handleChange, values }) => {


    const steppingForm = e => {
        e.preventDefault()
        nextStep()
    }
    const steppingBackForm = e => {
        e.preventDefault()
        prevStep()
    }
  return (
    <MuiThemProvider>
        
        <AppBar title='Enter Your Occopation' />
        <TextField 
        hintText='Enter your occopation'
        floatingLabelText='Occupation'
        onChange={handleChange('occupation')}
        defaultValue={values.occupation}

        />
        <br/>
        <TextField 
        hintText='Enter your city'
        floatingLabelText='City'
        onChange={handleChange('city')}
        defaultValue={values.city}

        />
        <br/>
        <TextField 
        hintText='Enter your Bio'
        floatingLabelText='Bio'
        onChange={handleChange('bio')}
        defaultValue={values.bio}

        />
        <br/>
        <RaisedButton
        label="Continue"
        primary={true}
        style={styles.button}
        onClick={steppingForm}
        />
        <br/>
        <RaisedButton
        label="Back"
        primary={true}
        style={styles.button}
        onClick={steppingBackForm}
        />
        
    </MuiThemProvider>
  )
}


const styles = {
    button: {
        margin: 15

    }
}

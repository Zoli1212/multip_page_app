import React from 'react'
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export const Confirm = ({ values: { firstName, lastName, email, occupation, city, bio}, nextStep, prevStep }) => {


    const processForm = e => {
        e.preventDefault()
        //Process Form
        nextStep()
    }

    const steppingBackForm = e => {
        e.preventDefault()
        prevStep()
    }
  return (
    <MuiThemProvider>
        
        <AppBar title='Summary' />
       <List>
        <ListItem 
        primaryText="First Name"
        secondaryText= { firstName}
        />
        <ListItem 
        primaryText="Last Name"
        secondaryText= { lastName}
        />
        <ListItem 
        primaryText="Email"
        secondaryText= { email}
        />
        <ListItem 
        primaryText="Occupation"
        secondaryText= { occupation }
        />
        <ListItem 
        primaryText="City"
        secondaryText= { city }
        />
        <ListItem 
        primaryText="Bio"
        secondaryText= { bio }
        />
       </List>
        <RaisedButton
        label="Confirm & Continue"
        primary={true}
        style={styles.button}
        onClick={processForm}
        /><br/>
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
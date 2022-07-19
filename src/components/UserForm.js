import React, { useState} from 'react'
import { Confirm } from './Confirm'
import { FormPersonalDetails } from './FormPersonalDetails'
import { FormUserDetails } from './FormUserDetails'
import { Success } from './Success'

export const UserForm = () => {

    const [user, setUser] = useState({ step: 1, 
                                        firstName: '',
                                        lastName: '',
                                        email: '',
                                        occupation: '',
                                        city: '',
                                        bio: ''
                                        })

    const { step } = user

    const { firstName, lastName, email, occupation, city, bio} = user
    const values = { firstName, lastName, email, occupation, city, bio}
    const nextStep = () => {


        setUser((prev) => { return {...prev, step: prev.step + 1}})
    }

    const prevStep = () => {
        const { step } = user
        setUser((prev) => { return {...prev, step: prev.step - 1}})
    }

    const handleChange = input => e => {
        setUser({...user, [input]: e.target.value})

    }


    console.log(user)

    



 switch(step){
    case 1:
        return (
            <FormUserDetails nextStep={nextStep} handleChange={handleChange} values={values} />

        )
    case 2:
        return <h1><FormPersonalDetails nextStep={nextStep} handleChange={handleChange} values={values} prevStep={prevStep} /></h1>
    case 3:
        return <h1><Confirm values={values} nextStep={nextStep} prevStep={prevStep}/></h1>
    case 4:
        return <h1><Success /></h1>

 }
}

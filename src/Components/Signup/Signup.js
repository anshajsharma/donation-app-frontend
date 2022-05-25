import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment, Dropdown,Modal } from 'semantic-ui-react'

const Signup = ({handlechange,form :{form, handleChange,saveAndContinue,formError,countryOptions,open,setOpen,setForm}}) => {


  const handleopen = () => {
    setOpen(false);
    setForm({});
    handlechange(1);
  }


  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header textAlign='center'>
      <h1>Enter User Details</h1>
    </Header>
    {open && 
      <Modal open={open}>
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Registration Successful Now you have to login to continue
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleopen}>OK</Button>
      </Modal.Actions>
    </Modal>
    }
    <Form onSubmit={saveAndContinue}>
      <Segment>
        <Form.Input
            label='First Name'
            name="firstName"
            placeholder='First Name'
            value={form.firstName||""}
            onChange={handleChange}
            // defaultValue={values.firstName}
            error={(formError.firstNameError? true: false)?{content: formError.firstNameError} : false}
          />

        <Form.Input
            label='Last Name'
            name="lastName"
            value={form.lastName||""}
            placeholder='Last Name'
            onChange={handleChange}
            // defaultValue={values.lastName}
            error={(formError.lastNameError? true: false)?{content: formError.lastNameError} : false}
          />

        <Form.Input
            fluid
            label='Date of Birth'
            name="dob"
            value={form.dob||""}
            icon="calendar"
            iconPosition="left"
            type='date'
            placeholder='Date of Birth'
            onChange={handleChange}
            // defaultValue={values.dob}
            error= {(formError.dobError? true: false)?{content: formError.dobError} : false}
          />
          <Dropdown
            fluid
            label='State'
            name="state"
            value={form.state||""}
            type="dropdown"
            placeholder='Select State'
            onChange={handleChange}
          
            // defaultValue={values.State}
            error={(formError.stateError? true: false)?{content: formError.stateError} : false}
            search
            selection
            options={countryOptions}
          />

        <Form.Input
            fluid
            label='Email'
            icon="user"
            name="email"
            value={form.email||""}
            iconPosition="left"
            type='email'
            placeholder='Email Address'
            onChange={handleChange}
            // defaultValue={values.email}
            error={(formError.emailError? true: false)?{content: formError.emailError} : false}
          />
        <Form.Input
            fluid
            label='Password'
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            name = "password"
            value={form.password||""}
            type='password'
            onChange={handleChange}
            // defaultValue={values.password}
            error= {(formError.passwordError? true: false)?{content: formError.passwordError} : false}
          />
          <Form.Input
            fluid
            label='Confirm Password'
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            name = "confirmPassword"
            value={form.confirmPassword||""}
            type='password'
            onChange={handleChange}
            // defaultValue={values.confirmPassword}
            error= {(formError.confirmPasswordError? true: false)?{content: formError.confirmPasswordError} : false}
          />
          <Button type="submit" >Save And Continue</Button>
      </Segment>
    </Form>
  </Grid.Column>
  </Grid>
  )


}

export default Signup;
import React from 'react'
import { Button, Dropdown, Form, Grid, Header, Modal, Segment } from 'semantic-ui-react'


const OSignup = ({handlechange,form :{form, handleChange,saveAndContinue,formError,countryOptions,open,setOpen,setForm}}) => {

  const handleopen = () => {
    setOpen(false);
    setForm({});
    handlechange(1);
  }
   
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header textAlign='center'>
      <h1>Enter Organisation Details</h1>
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
            label='Organisation Name'
            placeholder='Organisation Name'
            name="OrgName"
            value={form.OrgName||""}
            onChange={handleChange}
            error={(formError.OrgNameError? true: false)?{content: formError.OrgNameError} : false}
      
          />

        <Dropdown
            fluid
            label='State'
            placeholder='Select State'
            search
            selection
            options={countryOptions}
            type="dropdown"
            name="state"
            value={form.state||""}
            onChange={handleChange}
            error={(formError.stateError? true: false)?{content: formError.stateError} : false}
          />

        <Form.Input
            fluid
            label='Establishment Date'
            icon="calendar"
            iconPosition="left"
            type='date'
            placeholder='Establishment Date'
            name="estbDate"
            value={form.estbDate||""}
            onChange={handleChange}
            error={(formError.estbDateError? true: false)?{content: formError.estbDateError} : false}
          />

        <Form.Input
            fluid
            label='Email'
            icon="user"
            iconPosition="left"
            type='email'
            placeholder='Email Address'
            name="email"
            value={form.email||""}
            onChange={handleChange}
            error={(formError.emailError? true: false)?{content: formError.emailError} : false}
          />
        <Form.Input
            fluid
            label='Password'
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name="password"
            value={form.password||""}
            onChange={handleChange}
            error={(formError.passwordError? true: false)?{content: formError.passwordError} : false}
          />
          <Form.Input
            fluid
            label='Confirm Password'
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name="confirmPassword"
            value={form.confirmPassword||""}
            onChange={handleChange}
            error={(formError.confirmPasswordError? true: false)?{content: formError.confirmPasswordError} : false}
          />
          <Button type="submit" >Save And Continue</Button>
      </Segment>
    </Form>
  </Grid.Column>
  </Grid>
  )


}

export default OSignup;
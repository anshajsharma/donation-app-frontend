import React, { useEffect } from 'react'
import { Button, Form, Grid, Header, Segment,Modal } from 'semantic-ui-react'

const Login = ({handlechange,form :{form, handleChange,saveAndContinue,formError,setForm,setOpen,open}}) =>{

  const handleopen = () =>{
    setOpen(false);
    setForm({});
    handlechange(2); 
  }


  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        {open && 
      <Modal open={open}>
      
      <Modal.Content>
        <Modal.Description>
          Hurrah! Your credentials are matched.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleopen}>OK</Button>
      </Modal.Actions>
    </Modal>
    }
          <Header as='h2' color='teal' textAlign='center'>
            {/* {<Image src='/logo.png' />}  */}
            Log-in to your account
          </Header>
          <Form size='large' onSubmit={saveAndContinue}>
            <Segment stacked>
              <Form.Input fluid 
                icon='user' 
                iconPosition='left'
                name="email"
                value={form.email||""} 
                placeholder='E-mail address' 
                onChange={handleChange}
                type='email'
                error={(formError.emailError? true: false)?{content: formError.emailError} : false}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name="password"
                value={form.password||""} 
                onChange={handleChange}
                error={(formError.passwordError? true: false)?{content: formError.passwordError} : false}
              />
            <a href='#'>Forgot Password?</a>
              <Button color='teal' fluid size='large'  type="submit">
                Login
              </Button>
            </Segment>
          </Form>
          <Button color='teal' fluid size='large' onClick={()=>handlechange(2)} >
           New to us? Sign Up
          </Button>
        </Grid.Column>
      </Grid>
  )
}

export default Login

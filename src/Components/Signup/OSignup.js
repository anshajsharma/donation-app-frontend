import React,{useState} from 'react'
import { Button, Dropdown, Form, Grid, Header, Modal, Segment,Icon } from 'semantic-ui-react'
import "../Login/Login.css";
import { useNavigate} from "react-router-dom";

const OSignup = ({form :{form, handleChange,saveAndContinue,formError,countryOptions,open,setreset,setCurrent}}) => {

  setCurrent('org');
  const [passwordType, setPasswordType] = useState("password");
  const [confirm,setConfirm] = useState("password");
  const [icon,setIcon] = useState("eye");
  const [confirmicon,setConfirmIcon] = useState("eye");

const togglePassword = (val) =>{
  if(val === "pass")
  {
    setPasswordType(passwordType==="password"?"text":"password");
    setIcon(icon==="eye"?"low vision":"eye");

  }
  else
  {
    setConfirm(confirm==="password"?"text":"password");
    setConfirmIcon(confirmicon==="eye"?"low vision":"eye");
  }
  
}

  const navigate = useNavigate();

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
        <Button onClick={()=>navigate("/org/login")}>Ok</Button>
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
        <Form.Field style={{ position: 'relative' }}>
              <Form.Input
                fluid
                width="14"
                label="Password"
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type={passwordType}
                name="password"
                value={form.password||""} 
                onChange={handleChange}
                error={(formError.passwordError? true: false)?{content: formError.passwordError} : false}
              />
              <Icon name={icon} link onClick={()=>togglePassword('pass')} className="showicon" style={{top:25}}/>
          </Form.Field>
          <Form.Field style={{ position: 'relative' }}>
              <Form.Input
                fluid
                label='Confirm Password'
                icon='lock'
                width="14"
                iconPosition='left'
                placeholder='Password'
                name = "confirmPassword"
                value={form.confirmPassword||""}
                type={confirm}
                onChange={handleChange}
                // defaultValue={values.confirmPassword}
                error= {(formError.confirmPasswordError? true: false)?{content: formError.confirmPasswordError} : false}
              />
              <Icon name={confirmicon} link onClick={()=>togglePassword('cnfirm')} className="showicon" style={{top:25}}/>
          </Form.Field>
          <Button type="submit" >Save And Continue</Button>
      </Segment>
    </Form>
  </Grid.Column>
  </Grid>
  )


}

export default OSignup;
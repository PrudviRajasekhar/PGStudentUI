import { Box, Button, Container, FormGroup,  TextField, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import StudentRegService from './Service/StudentRegService';
import PersonalInfo from './PersonalInfo';
import { Link } from "react-router-dom";

export class Welcome extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      dataError: null,
      register: null,
      continue: null,
    };
    
    this.readForm = this.readForm.bind(this);
    this.checkcivilnumber = this.checkcivilnumber.bind(this);
  }
   
  readForm = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  checkcivilnumber = (e) => {
    e.preventDefault();
    console.log("i am in check civil number");

    //step-3
    let dataVlaid = true;

    // step-1
    let civilNum = this.state.civilNum;
    
    //step-4

    //update the state when the form is submitted
    this.setState({
      update: true,
    });

    if (dataVlaid) {
      let user = {
        civilNum: this.state.civilNum,
        
      };
      console.log("user registration data is");
      

      StudentRegService.CivilNumberExists(civilNum).then(
        (resp) => {
          console.log(resp.data);
          this.setState({
            continue: true,
            register: false,
          });
        },
        (error) => {
          console.log("error is " + error.message);
          let erorMessage =
            "Entered Civil Number is not avialable Please register "+civilNum;
          this.setState({
            dataError: erorMessage,
            register: true,
            continue: false,
          });
          console.log(erorMessage);
        }
      );
    } else {
      console.log("data is invalid");
    }
  };
    render() {
      return (
        <div>
           <FormGroup>
            <br>
                    
            </br>
            <Container maxWidth="sm">
              <Box
                bgcolor="white"
                boxShadow="2"
                borderRadius="12px"
                textAlign="text"
                p="24px"
                mt="50px"
              >
                <Typography color="primary"> </Typography>
              
                {this.state.register == true && (
              <Box
                bgcolor="white"
                boxShadow="2"
                borderRadius="12px"
                textAlign="text"
                p="10px"
                mt="10px"
              >
                <Typography color="error">{this.state.dataError}</Typography>
              </Box>
            )}
                <TextField
                  id="outlined-required"
                  label="Civil Number"
                  //variant="outlined"
                  type="text"
                  color="local"
                  fullWidth
                  margin="normal"
                  size="normal"
                  name="civilNum"
                 onChange={this.readForm}
                />
                
                <br></br>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.checkcivilnumber}
                  fullWidth>
                  Search
                 </Button>
                <br></br>
                {this.state.register == true && (
              <Box
                bgcolor="white"
                boxShadow="2"
                borderRadius="12px"
                textAlign="text"
                p="10px"
                mt="10px"
              >
                <Link to="/personalinfo">Here</Link> to Register
              </Box>
            )}
               {this.state.continue == true && (
              <Box
                bgcolor="white"
                boxShadow="2"
                borderRadius="12px"
                textAlign="text"
                p="10px"
                mt="10px"
              >
                <Link to="/personalinfoedit">Here</Link> to Continue
              </Box>
                )}
                
              </Box>
                        
                        
                        
            </Container>
          </FormGroup>
        </div>
      )
    }
  }
  export default Welcome;
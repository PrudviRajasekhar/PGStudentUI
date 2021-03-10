import {
  Box,
  Button,
  Checkbox,
  Container,
  FormGroup,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import React, { Component } from "react";
import { blueGrey, red, teal } from "@material-ui/core/colors";
import StudentRegService from "./Service/StudentRegService";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export class PersonalInfo extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      civilNum: "",
      studentId: "",
      firstName: "",
      gsm: "",
      firstNameAr: "",
      secondName: "",
      secondNameAr: "",
      thirdName: "",
      thirdNameAr: "",
      fourthName: "",
      fourthNameAr: "",
      familyNameAr: "",
      familyName: "",
      dateOfBirth: "",
      gender: "",
      relationId: "",
      passportNum: "",
      passportExpiryDate: "",
      sysId: "",
      caoNum: "",
    };
    this.readForm = this.readForm.bind(this);
    this.doRegister = this.doRegister.bind(this);
    let gendervalue = this.state.gender;
    let relationvalue = this.state.relationId;
  }
  
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  readForm = (e) => {
   // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  doRegister = (e) => {
    e.preventDefault();
    console.log("i am in doregister");

    //step-3
    let dataVlaid = true;

    // step-1
    // let civilNum = this.state.civilNum;
    // let firstName = this.state.secondName;
    // let secondName = this.state.secondName;

    //step-4

    //update the state when the form is submitted
    this.setState({
      update: true,
    });

    if (dataVlaid) {
      let user = {
        civilNum: this.state.civilNum,
        firstName: this.state.firstName,
        firstNameAr: this.state.firstNameAr,
        secondName: this.state.secondName,
        secondNameAr: this.state.secondNameAr,
        thirdName: this.state.thirdName,
        thirdNameAr: this.state.thirdNameAr,
        familyName: this.state.familyName,
        familyNameAr: this.state.familyNameAr,
        passportNum: this.state.passportNum,
        passportExpiryDate: this.state.passportExpiryDate,
        dateOfBirth: this.state.dateOfBirth,
        caoNum: "dummy@123",
        sysId: "",
        gsm: this.state.gsm,
        studentId: "123",
        gender: this.state.gender,
        relationId: this.state.relationId,
      };
      console.log("user registration data is");
      console.log(JSON.stringify(user));

      StudentRegService.createStudent(user).then(
        (resp) => {
          console.log(resp.data);
          console.log(resp.data.studentId);
          this.setState({
            studentId:resp.data.studentId,  
          });
        },
        (error) => {
          console.log("error is " + error.message);
          let erorMessage =
            "issue with the backend servce. it may be down or may have errors ";
          this.setState({
            dataError: erorMessage,
          });
        }
      );
    } else {
      console.log("data is invalid");
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormGroup>
          <Container maxWidth="md">
            <Box
              bgcolor="white"
              boxShadow="2"
              borderRadius="12px"
              textAlign="text"
              p="24px"
              mt="50px"
            >
              <Typography color="primary">Personal Information</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <TextField
                      id="outlined-required"
                      label="Civil Number"
                      variant="outlined"
                      type="text"
                      color="local"
                      fullWidth
                      margin="normal"
                      size="normal"
                      name="civilNum"
                      onChange={this.readForm}
                    />
                    <TextField
                      id="outlined-required"
                      label="First Name"
                      // defaultValue="Hello World"
                      variant="outlined"
                      type="text"
                      color="local"
                      fullWidth
                      margin="normal"
                      size="normal"
                      name="firstName"
                      onChange={this.readForm}
                    />

                    <TextField
                      id="outlined-required"
                      label="Second Name"
                      // defaultValue="Hello World"
                      variant="outlined"
                      type="text"
                      color="primary"
                      fullWidth
                      margin="normal"
                      size="normal"
                      name="secondName"
                      onChange={this.readForm}
                    />
                    <TextField
                      id="outlined-required"
                      label="Third Name"
                      variant="outlined"
                      type="text"
                      color="primary"
                      fullWidth
                      margin="normal"
                      size="normal"
                      name="thirdName"
                      onChange={this.readForm}
                    />
                    <TextField
                      id="outlined-required"
                      label="Family Name"
                      variant="outlined"
                      type="text"
                      color="primary"
                      fullWidth
                      margin="normal"
                      size="normal"
                      name="familyName"
                      onChange={this.readForm}
                    />
                    <TextField
                      id="outlined-required"
                      label="GSM"
                      // defaultValue="Hello World"
                      variant="outlined"
                      type="text"
                      color="local"
                      fullWidth
                      margin="normal"
                      size="normal"
                      name="gsm"
                      onChange={this.readForm}
                    />
                    
                    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup aria-label="gender" name="gender"
                        value={this.gendervalue}
                        onChange={this.handleChange}
                        color="primary">
        <FormControlLabel value="1" control={<Radio />} label="Male" />
        <FormControlLabel value="2" control={<Radio />} label="Female" />
        {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
      </RadioGroup>
    </FormControl>

                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <TextField
                      id="outlined-required"
                      label="Date of Birth"
                      variant="outlined"
                      type="date"
                      color="local"
                      fullWidth
                      margin="normal"
                      size="normal"
                      name="dateOfBirth"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={this.readForm}
                    />
                    <TextField
                      id="outlined-required"
                      label="First Name Arabic"
                      // defaultValue="Hello World"
                      variant="outlined"
                      type="text"
                      color="local"
                      fullWidth
                      margin="normal"
                      size="normal"
                      name="firstNameAr"
                      onChange={this.readForm}
                    />

                    <TextField
                      id="outlined-required"
                      label="Second Name Arabic"
                      // defaultValue="Hello World"
                      variant="outlined"
                      type="text"
                      color="primary"
                      fullWidth
                      margin="normal"
                      size="normal"
                      name="secondNameAr"
                      onChange={this.readForm}
                    />
                    <TextField
                      id="outlined-required"
                      label="Third Name Arabic"
                      variant="outlined"
                      type="text"
                      color="primary"
                      fullWidth
                      margin="normal"
                      size="normal"
                      name="thirdNameAr"
                      onChange={this.readForm}
                    />
                    <TextField
                      id="outlined-required"
                      label="Family Name Arabic"
                      variant="outlined"
                      type="text"
                      color="primary"
                      fullWidth
                      margin="normal"
                      size="normal"
                      name="familyNameAr"
                      onChange={this.readForm}
                    />
                    <TextField
                      id="outlined-required"
                      label="Passport Number"
                      variant="outlined"
                      type="text"
                      color="local"
                      fullWidth
                      margin="normal"
                      size="normal"
                      name="passportNum"
                      onChange={this.readForm}
                    />
                    {/* className={classes.formControl} */}
                    <FormControl >
        <InputLabel >Marital Status</InputLabel>
        <NativeSelect
              value={this.state.relationvalue}
              onChange={this.handleChange}
              fullWidth
              margin="normal"
              size="large"
          inputProps={{
            name: 'relationId',
            id: 'age-native-helper',
          }}
        >
             <option aria-label="None" value="" />
             <option value={1}>Single</option>
             <option value={2}>Married</option>
             <option value={3}>Divorced</option>
             <option value={4}>Widowed</option>
        </NativeSelect>
        <FormHelperText>Select a Value from the list </FormHelperText>
      </FormControl>
                  </Box>
                </Grid>
                <br />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={this.doRegister}
                >
                  Register
                </Button>
              </Grid>
            </Box>
          </Container>
        </FormGroup>
      </div>
    );
  }
}

export default PersonalInfo;

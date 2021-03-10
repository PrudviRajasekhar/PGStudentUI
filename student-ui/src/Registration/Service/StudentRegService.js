import react from "react";
import axios from "axios";

const USER_REG_BASE_URL = "http://localhost:8085/rest/studentreg/";

class StudentRegService {
  
  createStudent(regData) {
    console.log("i am in service abd the data is " + regData);
    let options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios.post(USER_REG_BASE_URL + "/save", regData, options);
  }
  CivilNumberExists(civilNum) {
    console.log("civilNum is " + civilNum);
    return axios.get(USER_REG_BASE_URL + "/find/" + civilNum);
  }

  }

export default new StudentRegService();

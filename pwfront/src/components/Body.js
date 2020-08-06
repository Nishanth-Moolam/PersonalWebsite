import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../constants/index";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      date: {},
    };
  }

  componentDidMount() {
    axios.get(API_URL + "covid/cases/").then((response) => {
      this.setState({ data: response.data });
      this.setState({ date: response.data[0].Date });
    });
  }

  render() {
    return (
      <div>
        Updated Yesterday!
        <ul>
          {this.state.data.map((province) => {
            if (province.Province !== "") {
              return (
                <li key={province.id}>
                  {province.Province} : {province.Cases}.
                  <br />
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Body;

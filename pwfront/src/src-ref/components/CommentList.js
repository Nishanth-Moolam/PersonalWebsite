import React, { Component } from "react";
import Comment from "./Comment";
import { API_URL } from "../constants/index";
import CommentForm from "./CommentForm";
import { connect } from "react-redux";
import axios from "axios";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Header ${this.props.token}`,
    };

    axios.get(API_URL + "api/comments/").then((response) => {
      this.setState({ comments: response.data.results });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.comments.map((comment) => {
            return (
              <li key={comment.id}>
                <Comment comment_data={comment} />
              </li>
            );
          })}
        </ul>
        <h2>Submit a Comment!</h2>
        <CommentForm requestType="post" comment_id={null} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(CommentList);

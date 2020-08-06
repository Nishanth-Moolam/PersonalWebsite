import React, { Component } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { API_URL } from "../constants/index";
import axios from "axios";
import { connect } from "react-redux";

class CommentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {},
    };
  }

  componentDidMount() {
    const comment_id = this.props.match.params.comment_id;
    fetch(API_URL + `api/comments/${comment_id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ comment: data }));
  }

  handleDelete = (event) => {
    const comment_id = this.props.match.params.comment_id;
    axios.delete(API_URL + `api/comments/${comment_id}`);
    this.props.history.push("/");
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <ul>
          <li key={this.state.comment.id}>
            <Comment comment_data={this.state.comment} />
          </li>
        </ul>
        <h2>Update Comment</h2>
        <CommentForm requestType="put" comment_id={this.state.comment.id} />
        <form onSubmit={this.handleDelete}>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(CommentDetail);

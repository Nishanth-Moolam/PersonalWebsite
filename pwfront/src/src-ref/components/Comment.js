import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var comment = {};

    try {
      //const x = this.props.comment_data["id"];
      comment = this.props.comment_data;
    } catch (err) {
      console.log("dont be sad");
    }

    return (
      <div>
        <h2>
          <b>
            {comment.id} :{" "}
            <a href={`/comment/${comment.id}`}>{comment.title}</a>
          </b>
        </h2>
        <i>{comment.content}</i>
      </div>
    );
  }
}

export default Comment;

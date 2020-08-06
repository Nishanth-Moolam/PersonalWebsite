import React from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { API_URL } from "../constants/index";
import { connect } from "react-redux";

class CommentForm extends React.Component {
  handleFormSubmit = async (event, requestType, comment_id) => {
    event.preventDefault();

    const postObj = {
      title: event.target.elements.title.value,
      content: event.target.elements.content.value,
    };

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`,
    };

    // const authAxios = axios.create({
    //   baseURL: API_URL,
    //   headers: {
    //     Authorization: `Bearer ${this.props.token}`,
    //   },
    // });

    if (requestType === "post") {
      try {
        await axios.post(API_URL + `api/comments/`, postObj).then((res) => {
          if (res.status === 201) {
            // this.props.history.push(`/`);
            console.log("it worked");
          }
          console.log(res);
        });
      } catch (err) {
        console.log(err);
      }
    } else if (requestType === "put") {
      try {
        await axios
          .put(API_URL + `api/comments/${comment_id}/`, postObj)
          .then((res) => {
            if (res.status === 200) {
              this.props.history.push(`/`);
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(event) =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.comment_id
            )
          }
        >
          <input name="title" type="text" placeholder="Title" />
          <input name="content" placeholder="Comment" />
          <br />
          <button type="submit">Submit</button>
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

export default connect(mapStateToProps)(CommentForm);

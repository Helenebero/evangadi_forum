import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "../../axios/axiosConfig";

const NewQuestion = () => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const titleRef = useRef();
  const questionRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value.trim();
    const question = questionRef.current.value.trim();

    if (!title || !question) {
      alert("Both fields are required.");
      return;
    }
    try {
      await axios.post(
        "/questions/newquestion",
        { title, question },
        {
          headers: { Authorization: `Bearer ${userData.token}` },
        }
      );
      titleRef.current.value = "";
      questionRef.current.value = "";
      navigate("/");
    } catch (err) {
      console.error("Problem:", err.response?.data?.msg || err.message);
      alert(err.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <section className="container body-no-bg" style={{ paddingTop: "100px" }}>
      <div className="d-flex flex-column align-items-center my-5">
        <h3>Steps to write a good question</h3>
        <ul className="list-unstyled" style={{ fontSize: "large" }}>
          <li>Summarize your question in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <div className="container" style={{ width: "90%" }}>
        <div className="text-center font-weight-bold mb-4">
          <h3>Ask a public question</h3>
          <Link to="/">Go to Question Page</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              ref={titleRef}
              className="form-control mb-3"
              style={{ height: "60px", borderRadius: "10px" }}
              maxLength="200"
              type="text"
              name="title"
              placeholder="Title"
            />
            <textarea
              ref={questionRef}
              className="form-control mb-3"
              style={{ height: "200px", borderRadius: "10px" }}
              maxLength="255"
              name="question"
              placeholder="Question Description..."
            />
            <button className="btn btn-lg btn-primary" type="submit">
              Post Your Question
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewQuestion;

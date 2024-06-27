import React from "react";
import { CgProfile } from "react-icons/cg";
import "./Answer.css";

const AnswerDetail = ({ answer }) => {
  return (
    <div className="header_question">
      <div className="question_user" style={{ textAlign: "center" }}>
        <CgProfile style={{ width: "65px", height: "65px" }} />
        <span>{answer ? answer.username : "Unknown User"}</span>
      </div>
      <div className="question_title" style={{ height: "80%" }}>
        <div>{answer ? answer.answer : "New Answer"}</div>
      </div>
    </div>
  );
};

export default AnswerDetail;

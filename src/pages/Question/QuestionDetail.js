import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaGreaterThan } from "react-icons/fa";
import "../Question/question.css";

function QuestionDetail({ question }) {
  const navigate = useNavigate();
  const questionRef = useRef();

  const handleClick = () => {
    if (question && question.question_id) {
      navigate(`/newanswer/${question.question_id}`);
    }
  };

  return (
    <div className="header_question" ref={questionRef} onClick={handleClick}>
      <div
        className="question_user"
        style={{ textAlign: "center", margin: "10px 15px" }}
      >
        <CgProfile style={{ width: "65px", height: "65px" }} />
        <div>{question ? question.username : "New User"}</div>
      </div>
      <div className="question_title">
        <div className="question_content">
          {question ? question.title : "New Title"}
        </div>
        <div className="question_arrow">
          <FaGreaterThan />
        </div>
      </div>
    </div>
  );
}

export default QuestionDetail;

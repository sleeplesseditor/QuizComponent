import React from 'react';
import './style/style.css';

const QuestionDetail = ({ question }) => {
    const { title } = question;

    return (
        <div>
            <h1 className="answer_title">{question.title}</h1>            
        </div>
    );
};

export default QuestionDetail;
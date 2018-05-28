import React from 'react';

const QuestionDetail = ({ question }) => {
    const { title, first_answer, second_answer, third_answer, fourth_answer, option } = question;

    return (
        <div className="">
            <h1>{title}</h1>
            <br/>
            <p>{first_answer}</p>
        </div>
    );
};

export default QuestionDetail;
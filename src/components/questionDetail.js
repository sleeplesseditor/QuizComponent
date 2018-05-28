import React from 'react';

const QuestionDetail = ({ question }) => {
    const { title, option_1, option_2 } = question;

    return (
        <div className="">
            <h1>{title}</h1>
            <br/>
            <p>{option_1}</p>
            <p>{option_2}</p>
        </div>
    );
};

export default QuestionDetail;
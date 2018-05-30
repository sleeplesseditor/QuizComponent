import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './style/style.scss';

class QuestionList extends Component {   
    componentWillMount() {
        this.props.fetchQuestions();
        console.log(this.props.questions);
    }

    renderQuestions(question) {
        return (
            <div key={question.title}>
                <h1 className="answer_title">{question.title}</h1>
                <br/>
                <div>
                    <label className="switch">
                        <input type="checkbox" />
                        <div className="slider round">
                            <p className="on">{question.answer1.option1}</p>
                            <p className="off"></p>
                        </div>
                    </label>
                </div>
            </div>
        );
    }
    
    //Helper function for 'Answer is correct/Answer is incorrect' display, targeting 'correct' flag in JSON files
    renderVerdict() {

    }

    render() {
        return (
            <div className="answer_list">
                {this.props.questions.map(this.renderQuestions)}
                <br />
                <p className="verdict">The answer is incorrect</p>
            </div>
        );
    }
}

//{this.renderVerdict}

function mapStateToProps(state) {
    return { questions: state.questions };
}

export default connect(mapStateToProps, actions)(QuestionList);
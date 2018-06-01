import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './style/style.scss';

class QuestionList extends Component {   
    componentDidMount() {
        this.props.fetchQuestions();
        console.log(this.props.questions);
    }

    //Pull keys from JSON to tidy up code
    renderQuestions(question) {
        const { left, right, title } = question;

        return (
            <div key={title}>
                <h1 className="answer_title">{title}</h1>
                <br/>
                <div>
                    <label className="switch">
                        <input type="checkbox" />
                        <div className="slider">
                                <p className="on">{left}</p>
                                <p className="off">{right}</p>
                        </div>
                    </label>
                </div>
            </div>
        );
    }
    
    //Helper function for 'Answer is correct/Answer is incorrect' display, targeting 'correct' flag in JSON files
    renderVerdict() {

    }

    //Plan to convert verdict p tag to if/else based on correct flag selection
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

function mapStateToProps(state) {
    return { questions: state.questions };
}

export default connect(mapStateToProps, actions)(QuestionList);
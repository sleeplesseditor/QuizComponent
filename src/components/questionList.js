import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './style/style.css';

class QuestionList extends Component {   
    componentWillMount() {
        this.props.fetchQuestions();
        console.log(this.props.questions);
    }

    renderQuestions(question) {
        return (
            <div>
                <h1 className="answer_title">{question.title}</h1>
            </div>
        );
    }

    render() {
        return (
            <div className="answer_list">
                {this.props.questions.map(this.renderQuestions)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { questions: state.questions };
}

export default connect(mapStateToProps, actions)(QuestionList);
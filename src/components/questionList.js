import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class QuestionList extends Component {   
    componentWillMount() {
        this.props.fetchQuestions();
        console.log(this.props.questions);
    }

    renderAnswers(question) {
        return (
            <div>
                <h1>{question.title}</h1>
            </div>
        );
    }

    render() {
        return (
            <div className="answer_list">
                {this.props.questions.map(this.renderAnswers)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { questions: state.questions };
}

export default connect(mapStateToProps, actions)(QuestionList);
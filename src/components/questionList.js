import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './style/style.css';

// import QuestionDetail from './questionDetail';

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
                        <span className="slider round"></span>
                    </label>
                </div>
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
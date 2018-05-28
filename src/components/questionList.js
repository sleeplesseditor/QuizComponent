import React, { Component } from 'react';
import axios from 'axios';

import QuestionDetail from './questionDetail';

class QuestionList extends Component {

    state = { 
        questions: [],
    }

    componentWillMount() {
        axios.get('https://gist.githubusercontent.com/sleeplesseditor/86759c6715ba89fe875ca886d759d482/raw/552d6ba67ee26e3f4dab87b85e6abca41c73a93e/quiz_question.json' )
            .then(res => {
                const questions = res.data;
                console.log(questions);
                this.setState({ questions });
            })
        // fetch('https://gist.githubusercontent.com/sleeplesseditor/86759c6715ba89fe875ca886d759d482/raw/552d6ba67ee26e3f4dab87b85e6abca41c73a93e/quiz_question.json')
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log(json);
        //         this.setState({ questions: json.questions });
        //     });
    }

    renderAnswers() {
        return this.state.questions.map(question => 
            <QuestionDetail key={question.title} question={question}/>
        );
    }

    render() {
        return (
            <div className="answer_list">
                {this.renderAnswers()}
            </div>
        );
    }
}

export default QuestionList;
import axios from 'axios';
import {
    FETCH_QUESTIONS
} from './types';

export function fetchQuestions() {
    const request = axios.get('https://gist.githubusercontent.com/sleeplesseditor/86759c6715ba89fe875ca886d759d482/raw/552d6ba67ee26e3f4dab87b85e6abca41c73a93e/quiz_question.json');
    
    return {
        type: FETCH_QUESTIONS,
        payload: request
    };
}
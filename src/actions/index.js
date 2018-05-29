import axios from 'axios';
import {
    FETCH_QUESTIONS
} from './types';

export function fetchQuestions() {
    const request = axios.get('https://gist.githubusercontent.com/sleeplesseditor/86759c6715ba89fe875ca886d759d482/raw/79d5b6ce83c128cce029ac628ccce5bdb749b8d1/question.json')

    return {
        type: FETCH_QUESTIONS,
        payload: request
    };
}
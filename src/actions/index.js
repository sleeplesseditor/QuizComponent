import axios from 'axios';
import {
    FETCH_QUESTIONS
} from './types';

//Pull question title and answer options from external file source for reusability
export function fetchQuestions() {
    const request = axios.get('https://gist.githubusercontent.com/sleeplesseditor/86759c6715ba89fe875ca886d759d482/raw/bffd4765ea6499b22e4e82c6998b5bd8a406e736/question.json')

    //Requires correctly formatted JSON file with correct answer flags
    return {
        type: FETCH_QUESTIONS,
        payload: request
    };
}
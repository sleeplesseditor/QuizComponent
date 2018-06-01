import axios from 'axios';
import {
    FETCH_QUESTIONS
} from './types';

//Pull question title and answer options from external file source for reusability
export function fetchQuestions() {
    const request = axios.get('https://gist.githubusercontent.com/sleeplesseditor/8d6693e67925967cdd6541489bbfa333/raw/446c5f509550d796a8af8501524b5c9d883deb35/question2.json')

    //Place fetched data into Redux state for access by components – potential for use in multiple quiz components in same application
    //Requires correctly formatted JSON file with correct answer flags
    return {
        type: FETCH_QUESTIONS,
        payload: request
    };
}
import axios from 'axios';

//Sign up for a free api key at openweathermap.org
const API_KEY;

const ROOT_URL = `"http://wasjustthinking.com:5000/?word=`;

export const FETCH_WORD = 'FETCH_WORD';

export function fetchWord(word) {
  const url = `${ROOT_URL}${word}`;
  const request = axios.get(url);
  return {
    type: FETCH_WORD,
    payload: request
  }

}

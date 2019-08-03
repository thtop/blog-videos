import axios from 'axios';

const KEY = 'AIzaSyCiFYtqDwGmlBMW5DZbZ6I_ifKBCZ1whlA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
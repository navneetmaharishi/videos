import axios from 'axios';

const Key = "AIzaSyCybp1UnwdCiGS1xPmjndGsZYoCFylvikc";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: Key,
    },
})
import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.kkbox.com/v1.1',
    headers: {
        Authorization: 'Bearer +SQdc4qmlLpgu9uq9V2pEQ=='
    }
});
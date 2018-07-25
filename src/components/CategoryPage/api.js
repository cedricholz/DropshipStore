import axios from 'axios';

export const fetchData = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
};
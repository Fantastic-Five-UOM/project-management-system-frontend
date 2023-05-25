import axios from 'axios';

var url = ''; 

export const submitLoginData = async (data) => {
    await axios({
        method: 'post',
        withCredentials: true,
        url: url +'Login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
        .then(function (response) {
    
            localStorage.setItem('userToken', JSON.stringify(response.data.token));

            console.log(response.data.token);
            return response;
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
};


const logout = () => {
    localStorage.removeItem('userToken');
    return axios.post(url + 'logout').then((response) => {
        return response.data;
    });
};

const getCurrentUser = () => {
    return localStorage.getItem('userToken');
};
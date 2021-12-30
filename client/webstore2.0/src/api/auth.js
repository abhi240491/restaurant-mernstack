import axios from 'axios';

export const signup = async(data) => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
        //"api/auth/signup" is the endpoint in the Backend where
        //the info related to signup will be sent and new user will be created
    const response = await axios.post('/api/auth/signup', data, config)
    return response;
}
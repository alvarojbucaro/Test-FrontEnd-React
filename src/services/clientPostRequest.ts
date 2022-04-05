// function clientPostRequest with axios
import axios from 'axios';
const clientPostRequest = async (url: string, data?: any) => {
    try {
        const response = await axios.get(url, data);
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default clientPostRequest;

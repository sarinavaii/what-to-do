/* eslint-disable no-undef */
import axios from '@core/services/api/interceptor';
import { api } from '@core/services/api/url';

const addTask = async (data) => {
    try {
        const results = await axios.post(`${api}/project`, data);
        return results.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export default addTask;

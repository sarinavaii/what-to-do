/* eslint-disable no-undef */
import axios from '@core/services/api/interceptor';
import { api } from '@core/services/api/url';

const getTasks = async (id) => {
    try {
        const results = await axios.get(`${api}/project/${id}`);
        return results.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export default getTasks;

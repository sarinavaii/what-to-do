/* eslint-disable no-undef */
import axios from '@core/services/api/interceptor';
import { api } from '@core/services/api/url';

const getProjects = async () => {
    try {
        const results = await axios.get(`${api}/get-projects`);
        return results.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export default getProjects;

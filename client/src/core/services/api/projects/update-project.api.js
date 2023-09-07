/* eslint-disable no-undef */
import axios from '@core/services/api/interceptor';
import { api } from '@core/services/api/url';

const updateProject = async (data) => {
    try {
        const results = await axios.put(`${api}/projects`, data);
        return results.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export default updateProject;

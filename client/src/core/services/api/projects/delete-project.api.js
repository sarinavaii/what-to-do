/* eslint-disable no-undef */
import axios from '@core/services/api/interceptor';
import { api } from '@core/services/api/url';

const addProject = async (data) => {
    try {
        const results = await axios.delete(`${api}/project`, data);
        return results.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export default addProject;

import * as axios from 'axios'
import {adviceUrl} from "../_constants";

export const getDeviceInfo = () => {
    return axios
        .get(adviceUrl)
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .catch((error) => {
            throw error;
        });
};
import axios from "axios";
import { async } from "q";

const baseURL = 'http://20.219.91.228:5000';
// const baseURLProd = 'http://20.219.91.228:5000';

export default {

    getViewers: async function () {
        try {
            const response = await axios.get(baseURL + 'viewersApi');
            return response.data;
        } catch (error) {
            console.error(error);
            throw (error);
        }
    },
    getWatchTime: async function () {
        try {
            const response = await axios.get(baseURL + 'watchTimeApi');
            return response.data;
        } catch (error) {
            console.error(error);
            throw (error);
        }
    },
    getAdImpressions: async function () {
        try {
            const response = await axios.get(baseURL + 'adApi');
            return response.data;
        } catch (error) {
            console.error(error);
            throw (error);
        }
    },
    getLinearReachApi: async function () {
        try {
            const response = await axios.get(baseURL + 'linearReachApi')
            return response.data
        } catch (error) {
            console.log(error);
            throw (error);
        }
    },
    getLinearWatchTime: async () => {
        try {
            const response = await axios.get(baseURL + 'linearWatchTimeApi')
            return response.data
        } catch (error) {
            console.log(error);
            throw (error)
        }
    },
    getLinearUpdateDates: async () => {
        try {
            const response = await axios.get(baseURL + 'executiveupdateapi')
            return response.data
        } catch (error) {
            console.log(error);
            throw (error)
        }
    },
    getDigitalViewers: async () => {
        try {
            const response = await axios.get(baseURL + 'ottViewersApi')
            return response.data
        } catch (error) {
            console.log(error);
            throw (error)
        }
    },
    getDigitalWatchTime: async () => {
        try {
            const response = await axios.get(baseURL + 'ottWatchTimeApi')
            return response.data
        } catch (error) {
            console.log(error);
            throw (error)
        }
    },
    getSocialListening: async () => {
        try {
            const response = await axios.get(baseURL + 'sociallisteningapi')
            return response.data
        } catch (error) {
            console.log(error);
            throw (error)
        }
    },
    getCumulativePerformanceData: async () => {
        try {
            const response = await axios.get(baseURL + 'ottGraphApi')
            return response.data
        } catch (error) {
            console.log(error);
            throw (error)
        }
    },
    getUpdateNextUpdate: async () => {
        try {
            const response = await axios.get(baseURL + 'update-next-update');
            return response.data
        } catch (error) {
            console.log(error);
            throw (error)
        }
    }

}
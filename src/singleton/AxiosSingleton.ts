import axios, { AxiosAdapter, AxiosInstance } from "axios";

class AxiosSingleton {
    private axiosInstance = axios.create({
        baseURL: "http://localhost:9090/api/v1",
        timeout: 1000
    })

    public getInstance() {
        return this.axiosInstance;
    }
}

export default AxiosSingleton;
import axios, { AxiosResponse } from 'axios';


export class HttpService {
    private static BE_DOMAIN = process.env["BE_DOMAIN"];
    private static axios = axios.create({
        // .. where we make our configurations
        baseURL: 'http://api.localhost'
    });
    static async post(endpoint: string, data: Record<string, string>) {
        try {
            let response: AxiosResponse = await this.axios.post(endpoint, data)
            return response
        } catch (err) {
            return err
        }
    }
    static async get(endpoint: string, data: Record<string, string> | Record<string, boolean>) {
        try {
            let response: AxiosResponse = await this.axios.get(endpoint, { params: data })
            return response
        } catch (err) {
            return err
        }
    }

    static async patch(endpoint: string, data: Record<string, string> | Record<string, boolean>) {
        try {
            let response: AxiosResponse = await this.axios.patch(endpoint, data)
            return response
        } catch (err) {
            return err
        }
    }
}
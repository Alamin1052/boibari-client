import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const instance = axios.create({
    baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const requestInterceptor = instance.interceptors.request.use(
            (config) => {
                const token = user?.accessToken;
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        const responseInterceptor = instance.interceptors.response.use(
            (response) => response,
            (error) => {
                return Promise.reject(error);
            }
        );

        return () => {
            instance.interceptors.request.eject(requestInterceptor);
            instance.interceptors.response.eject(responseInterceptor);
        };
    }, [user]);

    return instance;
};

export default useAxiosSecure;

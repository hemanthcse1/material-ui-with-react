import axiosInstance from "./axiosInstance";

interface LoginRequest {
    emailId: string;
    password: string;
}

export const loginUser = async (data: LoginRequest) => {
    const response = await axiosInstance.post('/users/login', data);
    return response.data;
}
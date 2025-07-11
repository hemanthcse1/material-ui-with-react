import axiosInstance from "./axiosInstance";

interface LoginRequest {
    emailId: string;
    password: string;
}

export const loginUser = async (data: LoginRequest) => {
    const response = await axiosInstance.post('/users/login', data);
    return response.data;
}

interface SignupRequest {
    firstName: string;
    lastName: string;
    emailId: string;
    mobileNumber: string;
    password: string;
}

export const signupUser = async (data: SignupRequest) => {
    const signUpResponse = await axiosInstance.post('/users/register', data);
    return signUpResponse.data;
}
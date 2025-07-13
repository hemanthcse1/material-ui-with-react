import axiosInstance from "./axiosInstance";

export interface Project {
    id: number;
    name: string;
    key: string;
    projectType: string;
    category: string;
    url: string;
}

export const fetchActiveProjects = async (): Promise<Project[]> => {
    const response = await axiosInstance.get('/projects')
    return response.data
}
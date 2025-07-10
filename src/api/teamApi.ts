import axiosInstance from "./axiosInstance";

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
}

export const fetchTeamMembers = async (): Promise<TeamMember[]> => {
    const response = await axiosInstance.get('/team');
    return response.data;
};
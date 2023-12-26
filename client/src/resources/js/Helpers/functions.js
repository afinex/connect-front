import axios from "axios"

export const getAccessTokenCookies = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_SERVER}/get-access-token`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching :', error);
    }
};

export const refreshAccessTokenCookies = async () => {
    const response = await axios.get(`${import.meta.env.VITE_APP_API_SERVER}/refresh`, {
        withCredentials: true,
    });
    return response.data;
};
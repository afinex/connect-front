import axios from 'axios';
import { refreshAccessTokenCookies } from '../Helpers/functions';
import { toast } from 'react-toastify';

export const handleApiError = async (error, dispatch) => {
  if (error.response && error.response.status === 403) {
    try {
      await refreshAccessTokenCookies();
    } catch (err) {
      return await handleRefreshTokenExpiration(dispatch);
    }
  } else {
    console.error('handleApiError:', err);
  }
};

export const handleRefreshTokenExpiration = async (dispatch) => {
    try {
        const res = await axios.post(
        `${import.meta.env.VITE_APP_API_SERVER}/logout`,
        {},
        {
            withCredentials: true,
        }
        );

        if (res.status === 200) {
            dispatch({
                type: 'LOGGED_OUT_USER',
                payload: null,
            });

            toast.success(`Logged out.`);
        } else {
            console.error(`handleRefreshTokenExpiration: ${res.status}`);
        }
    } catch (error) {
        console.error('Error logging out:', error);
    }
};

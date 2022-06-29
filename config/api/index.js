import axios from 'axios';
import Cookies from 'js-cookie';

export default async function callAPI(url, method, data, token, serverToken) {
    let headers = {};

    /* get token for Auth */
    if (serverToken) {
        headers = {
            Authorization: `Bearer ${serverToken}`,
        };
    } else if (token) {
        const tokenCookies = Cookies.get('token');
        if (tokenCookies) {
            const jwtToken = Buffer.from(tokenCookies, 'base64');
            headers = {
                Authorization: `Bearer ${jwtToken}`,
            };
        }
    }

    /* call api form axios */
    const response = await axios({
        url,
        method,
        data,
        headers,
    }).catch((error) => error.response);

    if (response.statusCode > 300) {
        const res = {
            error: true,
            message: response.data.message,
            statusCode: response.statusCode,
            data: null,
        };
        return res;
    }

    const { length } = Object.keys(response.data);
    const res = {
        error: false,
        message: 'success',
        data: length > 1 ? response.data : response.data.data,
    };
    return res;
}

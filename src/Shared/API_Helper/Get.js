import {requestHeaders} from "./requestBuilder";

const UseGet = (url, success, error) => {
    const myHeaders = requestHeaders();

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    const apiURl = process.env.REACT_APP_BASE_API_URL + url;

    fetch(apiURl, requestOptions).then(res => {
        if (!res.ok) {
            error(res.error);
        }
        return res.json();
    }).then(data => {
            success(data);
        }
    ).catch(err => {
        error(err);
    })
}
export default UseGet;
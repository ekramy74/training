import {requestFetch, requestHeaders} from "./requestBuilder";

const UseUpdate = (url, body, success, error) => {
    const raw = JSON.stringify(body);
    const myHeaders = requestHeaders();
    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
    };
    requestFetch(url, requestOptions, success, error);
}
export default UseUpdate;
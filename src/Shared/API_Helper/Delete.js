import {requestFetch, requestHeaders} from "./requestBuilder";

const UseDelete = (url, success,error) => {
    const myHeaders = requestHeaders();
    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders
    };
    requestFetch(url, requestOptions, success, error);
}
export default UseDelete;
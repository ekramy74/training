import {requestFetch, requestHeaders} from "./requestBuilder";


const UsePost = (url, body, success, error, isBodyFormData = false) => {
    //e.preventDefault();
    const myHeaders = requestHeaders(isBodyFormData);

    const requestBody = isBodyFormData ? body : JSON.stringify(body);
    console.log(body)

    const requestOptions = isBodyFormData ? {
            method: 'POST',
            headers: myHeaders,
            body: requestBody,
        } :
        {
            method: 'POST',
            headers: myHeaders,
            body: requestBody
        };


    requestFetch(url, requestOptions, success, error);
}
export default UsePost;


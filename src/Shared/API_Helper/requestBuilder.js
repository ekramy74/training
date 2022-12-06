export function requestHeaders(isFormData = false) {
    const token = localStorage.getItem('token');
    const myHeaders = new Headers();
    if (!isFormData) myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", token);

    return myHeaders;
}

export function requestFetch(url, requestOptions, success, onError) {
    const apiURl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_API_URL : process.env.REACT_APP_BASE_API_URL;
    fetch(`${apiURl}${url}`, requestOptions).then(response => {
        if (!response.ok) {
            onError(response.error)
        }
        return response.json()
    }).then(result => {
            success(result);
        }
    )
        .catch(error => {
            onError(error)
        });
}
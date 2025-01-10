export default function fetchHelper(url, options) {
    return fetch(url, options).then((response) => {
        if (!response.ok) {
            throw new Error("Http error");
        }
        return response.json();
    });
}
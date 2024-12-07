const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.test.frissonapp.com';

export const urlForImageId = image_id => {
    if (image_id) {
        return API_BASE_URL + '/v1/images/' + image_id + '/';
    }
    return null;
};

export const getPlaceByID = (id) => {
    return baseGetRequest('/v1/places/' + id)
}

export const getReviewsByPlaceID = (id) => {
    return baseGetRequest(`/v1/places/${id}/reviews?offset=0&limit=20`)
}

const baseGetRequest = (url) => {
    return fetch(API_BASE_URL + url).then((res) => res.json()).then(res => res)
}

export const fetchAndSetData = async (promise, setFunc) => {
    const res = await promise;
    setFunc(res)
}
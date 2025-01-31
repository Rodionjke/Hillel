export const requiredValidator = (value) => {
    if (!value || value.trim() === '') {
        return 'This field is required';
    }
    return undefined;
};

export const numberValidator = (value) => {
    return isNaN(value) || value <= 0 ? 'Must be a positive number' : undefined;
};

export const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login';
    }
};

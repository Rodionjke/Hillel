export const loginApi = async (credentials) => {
    const fakeAdmin = {
        username: 'admin',
        password: 'password123',
    };

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
        credentials.username === fakeAdmin.username &&
        credentials.password === fakeAdmin.password
    ) {
        const token = 'fake-jwt-token';
        localStorage.setItem('token', token);
        return {
            token: token,
            admin: true,
        };
    } else {
        throw new Error('Wrong data');
    }
};

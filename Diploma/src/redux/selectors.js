export const selectProducts = (state) => state.products.products;
export const selectLoading = (state) => state.products.loading;
export const selectModal = (state) => state.products.modal;
export const selectError = (state) => state.products.error;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectLoginError = (state) => state.auth.loginError;
export const selectShowPassword = (state) => state.auth.showPassword;
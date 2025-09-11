// menyimpan data login
export const setAuthData = (token, userData) => {
  localStorage.setItem("barierToken", token);
  localStorage.setItem("userData", JSON.stringify(userData));
  localStorage.setItem("userRole", userData.role);
};

// cek apakah sudah login
export const isAuthenticated = () => {
  return !!localStorage.getItem("barierToken");
};

// Dapatkan user role
export const getUserRole = () => {
  return localStorage.getItem("userRole");
};

// logout
export const logout = () => {
  localStorage.removeItem("barierToken");
  localStorage.removeItem("userData");
  localStorage.removeItem("userRole");
  window.location.href = "/login";
};

// dapatkan user data
export const getUserData = () => {
  const data = localStorage.getItem("userData");
  return data ? JSON.parse(data) : null;
};

import jwtDecode from 'jwt-decode';

/**
 * @returns {boolean} - Returns true if the user is authenticated, false otherwise.
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');

  if (!token) return false; // No token found, user is not authenticated

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    return decodedToken.exp > currentTime; // Check if token is expired
  } catch (error) {
    console.error('Token decoding error:', error);
    return false; // Error in decoding token, user is not authenticated
  }
};

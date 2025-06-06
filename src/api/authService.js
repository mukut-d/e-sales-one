import axios from "axios";
export const validateUserJWTToken = async (token) => {
  try {
    // Put Backend URL here
    const res = await axios.get("http://localhost:8000/auth/google-signin", {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data.data;
  } catch (error) {
    return error;
  }
};

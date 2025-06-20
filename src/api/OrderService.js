// const baseurl = "http://localhost:8000";
const baseurl = "https://e-sales-one-backend.onrender.com";

export const createOrder = async (orderData) => {
  console.log("oder data before sending " + JSON.stringify(orderData, null, 2));
  try {
    const response = await fetch(`${baseurl}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...orderData }),
    });
    const result = await response.json();

    if (!response.ok) {
      console.error("🧨 Order creation failed:", result);
      throw new Error(result.message || "Failed to create order");
    }
    return result;
  } catch (error) {
    console.error("🔥 createOrder error:", error);
    throw new Error(error.message);
  }
};

import { API_CONFIG } from "@/config/api";

/**
 * Utility for making requests to the external PHP backend
 */
export async function externalApiRequest<T = any>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  data?: any,
  options: RequestInit = {}
): Promise<T> {
  // Build the full URL
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  
  // Set up headers with CORS support
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };
  
  // Prepare the request options
  const requestOptions: RequestInit = {
    method,
    headers,
    credentials: "include", // This sends cookies if needed
    ...options,
  };
  
  // Add body for non-GET requests
  if (method !== "GET" && data) {
    requestOptions.body = JSON.stringify(data);
  }
  
  try {
    const response = await fetch(url, requestOptions);
    
    // Handle HTTP errors
    if (!response.ok) {
      // Try to get error details from response
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || `Request failed with status ${response.status}`
      );
    }
    
    // Parse JSON response
    return await response.json();
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}

/**
 * Helper for file uploads to PHP backend
 */
export async function uploadFormData(
  endpoint: string,
  formData: FormData
): Promise<any> {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      credentials: "include",
      // Don't set Content-Type here - the browser will set it with the correct boundary
    });
    
    // Handle HTTP errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || `Upload failed with status ${response.status}`
      );
    }
    
    return await response.json();
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
}
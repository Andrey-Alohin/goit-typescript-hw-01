import axios from "axios";

async function fetchData<T>(url: string) {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
fetchData<number>("/get-number");
fetchData<string>("/get-string");

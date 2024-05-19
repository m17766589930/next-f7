export const fetchData = async (): Promise<any> => {
  try {
    const response = await fetch(
      "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.year;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

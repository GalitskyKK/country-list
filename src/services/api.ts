import axios from "axios";

const API_URL = 'https://restcountries.com/v3.1'

export const fetchCountries = async () => {
   try {
      const response = await axios.get(`${API_URL}/all`);
      return response.data;
   } catch (error) {
      console.log(error);
   }
};

export const fetchCountryDetails = async (name: string) => {
   try {
      const response = await axios.get(`${API_URL}/name/${name}`);
      return response.data;
   } catch (error) {
      console.log(error);
   }
};


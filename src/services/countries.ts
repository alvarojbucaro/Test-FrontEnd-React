import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CountryM } from "../models/countryM";
import clientPostRequest from "./clientPostRequest";
const initialState: {
  value: CountryM[];
} = {
  value: [],
};

export const CountriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    updateContries: (state,newValue) => {
      state.value = newValue.payload;
    },
  },
});


export const fetchCountriesData=async ():Promise<CountryM[]>=>{
    return await clientPostRequest("https://restcountries.com/v3.1/all");
}
export const { updateContries } = CountriesSlice.actions;

export default CountriesSlice.reducer;

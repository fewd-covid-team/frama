const axios = require('axios');

type CasesType = { [key: string]: number };
type TimelineType = { cases: CasesType; deaths: CasesType; recovered: CasesType };
type CountryAPIDataType = { country: string; province: string[]; timeline: TimelineType };

async function getCountryData(iso2: string): Promise<CountryAPIDataType> {
  return axios
    .get(`https://disease.sh/v3/covid-19/historical/${iso2}`)
    .then(({ data }: { data: CountryAPIDataType }): CountryAPIDataType => data);
}

// async function getUSAData(): Promise<CountryAPIDataType> {
//   return getCountryData('US');
// }

// async function getRUData(): Promise<CountryAPIDataType> {
//   return getCountryData('RU');
// }

// async function getUAData(): Promise<CountryAPIDataType> {
//   return getCountryData('UA');
// }

// function check() {
//   getUSAData().then(console.log);
//   getRUData().then(console.log);
//   getUAData().then(console.log);
// }

// check();

// export { getUSAData, getRUData, getUAData };
export { getCountryData };
export type { CountryAPIDataType };

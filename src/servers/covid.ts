const api = require('novelcovid');

function pick(data: { cases: any; deaths: any }[]): { cases: any; deaths: any } {
  console.log('data is', data);
  const { cases, deaths } = data[0];
  return { cases, deaths };
}

async function getCountryData(iso2: string): Promise<any[]> {
  const target = api.historical.countries({ country: iso2 });
  console.log('target is', target);
  // return target.then(pick);
  return target.then(({ timeline }: any): any => timeline).then(pick);
}

async function getRuData() {
  return getCountryData('RU');
}

async function getUkrData() {
  return getCountryData('UA');
}

async function getUsData(): Promise<any[]> {
  return getCountryData('US');
}

function check() {
  getRuData().then(console.log);
  getUkrData().then(console.log);
  getUsData().then(console.log);
}

check();

export { getRuData, getUkrData, getUsData };

import { CountryAPIDataType } from '../servers/covid';

type TableDataType = {
  day: string;
  cases: number;
  deaths: number;
  recovered: number;
}[];

type PerDayDataType = {
  [key: string]: {
    cases: number;
    deaths: number;
    recovered: number;
  };
};

function PerDayToTableDataType(perDay: PerDayDataType): TableDataType {
  const keys = Object.keys(perDay);
  return keys.map((key) => ({ ...(perDay[key] || {}), day: key }));
}

function transformFromApiToTableFormat(apiData: CountryAPIDataType): TableDataType {
  const { timeline } = apiData;
  const { cases, deaths, recovered } = timeline;

  const perDay: PerDayDataType = {};

  type PerDayEntryType = [string, number];

  // FIXME: shit, refactor transformers
  const casesTransformer = ([key, value]: PerDayEntryType) => {
    perDay[key] = {
      ...(perDay[key] || {}),
      cases: value,
      deaths: 0,
      recovered: 0,
    };
  };
  Object.entries(cases).forEach(casesTransformer);

  const deathsTransformer = ([key, value]: PerDayEntryType) => {
    perDay[key] = {
      ...(perDay[key] || {}),
      deaths: value,
    };
  };
  Object.entries(deaths).forEach(deathsTransformer);

  const recoveredTransformer = ([key, value]: PerDayEntryType) => {
    perDay[key] = {
      ...(perDay[key] || {}),
      recovered: value,
    };
  };

  Object.entries(recovered).forEach(recoveredTransformer);

  return PerDayToTableDataType(perDay);
}

export { transformFromApiToTableFormat };

export type { TableDataType };

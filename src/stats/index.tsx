import * as React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {
  CountryAPIDataType, getCountryData,
} from '../servers/covid';
import { TableDataType, transformFromApiToTableFormat } from './utils';
import CountryPicker from './picker';

interface TableProps {
  info: { date: string, cases: number, deaths: number }[]
}

// type TableProps = any;

function Table({ info }: TableProps): JSX.Element {
  return (
    <LineChart
      width={500}
      height={300}
      data={info}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="cases" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
      {/* <Line type="monotone" dataKey="recovered" stroke="#ac84d8" /> */}
    </LineChart>
  );
}

// function CountryDataTable({ country }: { country: string }): JSX.Element {
//   const [info, setInfo]: [TableDataType, any] = React.useState([
//     {
//       day: '25/09/2021',
//       cases: 10,
//       deaths: 10,
//       recovered: 10,
//     },
//   ]);

//   React.useEffect(() => {
//     getCountryData(country).then((val: CountryAPIDataType) => {
//       setInfo(transformFromApiToTableFormat(val));
//     });
//   }, [country]);

//   return <Table info={info} />;
// }

function StatsScreen(): JSX.Element {
  return (
    <div>
      <h3> Stats screen </h3>
      <CountryPicker />
    </div>
  );
}

export default StatsScreen;

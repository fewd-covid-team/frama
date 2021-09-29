import * as React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import { CountryAPIDataType, getCountryData } from '../../servers/covid';
import { TableDataType, transformFromApiToTableFormat } from './utils';
import CountryPicker from './picker';
import { ChartWrapper, DiagramWrapper } from './index.styles';

interface TableProps {
  info: { day: string; cases: number; deaths: number }[];
}

function Table({ info }: TableProps): JSX.Element {
  return (
    <div>
      <ChartWrapper>
        <ResponsiveContainer>
          <LineChart
            data={info}
            margin={{
              top: 10,
              right: 30,
              left: 30,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cases" stroke="#f93e3e" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="deaths" stroke="#000000" />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
      <DiagramWrapper />
    </div>

  );
}

// TODO: find out if numbers are correct
function CountryDataTable(): JSX.Element {
  const [info, setInfo]: [TableDataType, any] = React.useState([
    {
      day: '25/09/2021',
      cases: 10,
      deaths: 10,
      recovered: 10,
    },
  ]);

  const currentCountry = useSelector((state: any) => state.country.currentCountry);
  React.useEffect(() => {
    getCountryData(currentCountry).then((val: CountryAPIDataType) => {
      setInfo(transformFromApiToTableFormat(val));
    });
  }, [currentCountry]);

  return <Table info={info} />;
}

function StatsScreen(): JSX.Element {
  return (
    <div>
      <CountryPicker />
      <CountryDataTable />
    </div>
  );
}

export default StatsScreen;

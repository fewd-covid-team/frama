import * as React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='day' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='cases' stroke='#8884d8' activeDot={{ r: 8 }} />
          <Line type='monotone' dataKey='deaths' stroke='#82ca9d' />
          {/* TODO: uncomment for an additional graph */}
          {/* <Line type="monotone" dataKey="recovered" stroke="#ac84d8" /> */}
        </LineChart>
      </ChartWrapper>
      <DiagramWrapper></DiagramWrapper>
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

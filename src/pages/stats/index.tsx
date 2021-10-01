import * as React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { useSelector } from 'react-redux';
import { CountryAPIDataType, getCountryData } from '../../servers/covid';
import { TableDataType, transformFromApiToTableFormat } from './utils';
import CountryPicker from './picker';
import { ChartWrapper, DiagramWrapper, Label } from './index.styles';

interface TableProps {
  info: { day: string; cases: number; deaths: number }[];
}

const COLORS = ['#0088FE', '#FF8042'];

function Table({ info }: TableProps): JSX.Element {
  return (
    <div>
      <ChartWrapper>
        <Label>Period data</Label>
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
    </div>
  );
}

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

function CovidPieChart({ data }: { data: TableDataType }): JSX.Element {
  const lastDay = data.pop() || {
    day: '11-11-11',
    cases: 0,
    deaths: 0,
  };
  const { cases, deaths, day } = lastDay;
  const newData = [
    { name: 'cases', value: cases },
    { name: 'deaths', value: deaths },
  ];
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={newData}
          cx="50%"
          cy="50%"
          outerRadius={110}
          fill="#8884d8"
          labelLine={false}
          key={`val-${day}`}
        >
          {newData.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} key={`val-${day}-${entry}`} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

function CountryDataPieChart(): JSX.Element {
  // TODO: shit, refactor to the global state
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
  return (
    <DiagramWrapper>
      <Label>Today</Label>
      <CovidPieChart data={info} />
    </DiagramWrapper>
  );
}

function StatsScreen(): JSX.Element {
  return (
    <div>
      <CountryPicker />
      <CountryDataTable />
      <CountryDataPieChart />
    </div>
  );
}

export default StatsScreen;

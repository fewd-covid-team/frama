import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getUsData } from '../servers/covid';

// const exampleData = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// interface TableProps {
//   info: { date: string, cases: number, deaths: number }[]
// }

type TableProps = any;

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
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}

function Example(): JSX.Element {
  const [info, setInfo] = React.useState([{}]);
  React.useEffect(() => {
    getUsData().then((val) => {
      setInfo(val);
    });
  }, []);

  console.log('current is', info);
  return <Table info={info} />;
}

function StatsScreen(): JSX.Element {
  return (
    <div>
      <h3> Stats screen </h3>
      <Example />
    </div>
  );
}

export default StatsScreen;

import * as React from 'react';
import './App.css';
import Header from './header';

// TODO: split to several files

// function Header() {
//   // same for all 3 endpoinds
//   // TODO: add form, statistics, and tips endpoints
//   return <header className="frama-header" />;
// }

// interface TableRowProps {
//   uniqueid: string;
//   name: string;
//   surname: string;
// }
// const TableRow = ({ uniqueid, name, surname }: TableRowProps): JSX.Element => (
//   // represents a single row in the table of with people names
//   // TODO: add horizantal positioning here, flex or smth like this
//   <div>
//     <span>
//       {' '}
//       {uniqueid}
//       {' '}
//     </span>
//     <span>
//       {' '}
//       {name}
//       {' '}
//     </span>
//     <span>
//       {' '}
//       {surname}
//       {' '}
//     </span>
//   </div>
// );

// function Table(people) {
//   return (
//     <div>
//       {people.map(({ uniqueid, name, surname }) => (
//         <TableRow uniqueid={uniqueid} name={name} surname={surname} />
//       ))}
//     </div>
//   );
// }

// function InputText(placeholder) {
//   // TODO: idk might be solved with some lib?
//   return (
//     <form>
//       <input type="submit" value={placeholder} />
//     </form>
//   );
// }

// function TraitorForm({ onClick }) {
//   // submits a new traitor, haha
//   // TODO: styling
//   // should have a way to change outside state
//   // some callback which takes name, surname of a new traitor
//   return (
//     <div>
//       <InputText placeholder="Name" />
//       <InputText placeholder="Surname" />
//       <button name="Submit traitor" onClick={onClick} />
//     </div>
//   );
// }

// function TraitorScreen() {
//   // TODO: should have state with traitors inside
//   // TraitorForm modifies it with some callback idk for now
//   // and Table should be able to display the data
//   const [traitors, setTraitors] = useState([]);
//   // todo: styling
//   return (
//     <div>
//       <Table people={traitors} />
//       <TraitorForm />
//     </div>
//   );
// }

// function ChoiceBar({ choices }) {
//   // choice of current country
//   return <div>// TODO:</div>;
// }

// function StatisticGraph(data) {
//   // TODO: use some react lib here, search for it
//   // plots data in graph form

//   return <div />;
// }

// function StatisticsChart(data) {
//   // TODO: use some react lib here, search for it
//   // plots data in chart form

//   return <div />;
// }

// function queryCovidData({ country }) {
//   // TODO: make an api call for the given country
//   // return covid data
//   return [];
// }

// function StatisticsScreen() {
//   // screen with covid stats

//   // TODO: add logic, save info from api to local state
//   // save current country to state, make choicebar modifying it
//   return (
//     <div>
//       <ChoiceBar />
//       <StatisticGraph data={[]} />
//       <ChoiceBar data={[]} />
//     </div>
//   );
// }

// function AdviceEntry({ humanInfo, adviceText }) {
//   // TODO: styling
//   const { name, pictureUrl } = humanInfo;

//   return (
//     <div>
//       <p>
//         {' '}
//         {name}
//         {' '}
//       </p>
//       <image src={pictureUrl} />
//       <p>
//         {' '}
//         {adviceText}
//         {' '}
//       </p>
//     </div>
//   );
// }

// function HumanAdviceTable() {
//   // TODO: styling, at least

//   const [tips, _] = useState([
//     // TODO: fill with predefined data
//     {
//       humanInfo: {
//         name: 'Danil Usmanov',
//         pictureUrl:
//           'https://cdn.mos.cms.futurecdn.net/j4wLX6ZTJqcki9AFrjRcUm.jpg',
//       },
//       adviceText: 'Wash your hands and do FEWD on time',
//     },
//   ]);
//   return (
//     <div>
//       {tips.map(({ humanInfo, adviceText }) => (
//         <AdviceEntry humanInfo={humanInfo} adviceText={adviceText} />
//       ))}
//     </div>
//   );
// }

// function AnonAdviceTable() {
//   return <div>//TODO:</div>;
// }

// function AdviceScreen() {
//   // TODO: add everything
//   return (
//     <div>
//       <HumanAdviceTable />
//       <AnonAdviceTable />
//     </div>
//   );
// }

// function Footer() {
//   // TODO: styling
//   return (
//     <div>
//       <p> Done by Egor Osokin and Danil Usmanov </p>
//     </div>
//   );
// }

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      {/* <InputText placeholder="example" /> */}
    </div>
  );
}

export default App;

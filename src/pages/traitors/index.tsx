import * as React from 'react';
import { useSelector } from 'react-redux';
import TraitorsForm from './form';
import {
  TraitorScreenWrapper, Title as TitleStyle, Table, Th, Td,
} from './index.styles';

function Title(): JSX.Element {
  return (
    <div>
      <TitleStyle>Betray your friend!</TitleStyle>
    </div>
  );
}

function TraitorsTable(): JSX.Element {
  const data: { id: string | number; name: string; lastName: string }[] = useSelector(
    (state: any) => state.traitors.traitors,
  );
  const columns = React.useMemo(
    () => [
      {
        name: 'ID',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        name: 'Name',
        accessor: 'name',
      },

      {
        name: 'Last name',
        accessor: 'lastName',
      },
    ],
    [],
  );

  return (
    <Table>
      <thead>
        <tr key="header=tr">
          {columns.map(({ name }) => (
            <Th key={`header-th-${name}`}>{name}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, lastName }) => (
          <tr key={`data-tr-${id}-${name}`}>
            <Td>{id}</Td>
            <Td>{name}</Td>
            <Td>{lastName}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

// TODO: add form for new traitor
function TraitorsScreen(): JSX.Element {
  return (
    <TraitorScreenWrapper>
      <Title />
      <TraitorsTable />
      <TraitorsForm />
    </TraitorScreenWrapper>
  );
}

export default TraitorsScreen;

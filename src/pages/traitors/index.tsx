import * as React from 'react';
import { useSelector } from 'react-redux';
import TraitorsForm from './form';
import TraitorScreenWrapper from './index.styles';

function Title(): JSX.Element {
  return (
    <div>
      <h3>Betray your friend!</h3>
    </div>
  );
}

function TraitorsTable(): JSX.Element {
  const data: { id: string | number, name: string, lastName: string }[] = useSelector((state: any) => state.traitors.traitors);
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
    <table style={{ border: 'solid 1px blue' }}>
      <thead>
        <tr key="header=tr">
          {columns.map(({ name }) => (
            <th key={`header-th-${name}`}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, lastName }) => (
          <tr key={`data-tr-${id}`}>
            <td>
              {' '}
              {id}
              {' '}
            </td>
            <td>
              {' '}
              {name}
              {' '}
            </td>
            <td>
              {' '}
              {lastName}
              {' '}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
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

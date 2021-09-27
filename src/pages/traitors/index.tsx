import * as React from 'react';
import TraitorScreenWrapper from './index.styles';

function Title(): JSX.Element {
  return (
    <div>
      <h3>Betray your friend!</h3>
    </div>
  );
}

function TraitorsTable(): JSX.Element {
  const data = React.useMemo(
    () => [
      {
        id: '1',
        name: 'Vladimir',
        surname: 'Putin',
      },
      {
        id: '2',
        name: 'Barak',
        surname: 'Obama',
      },
      {
        id: '3',
        name: 'Vladimir',
        surname: 'Putin',
      },
      {
        id: '4',
        name: 'Danil',
        surname: 'Usmanov',
      },
      {
        id: '5',
        name: 'Egor',
        surname: 'Osokin',
      },
    ],
    [],
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
        accessor: 'surname',
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
        {data.map(({ id, name, surname }) => (
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
              {surname}
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
    </TraitorScreenWrapper>
  );
}

export default TraitorsScreen;

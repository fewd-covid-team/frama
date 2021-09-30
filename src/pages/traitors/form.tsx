/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import {
  Formik, Form, ErrorMessage,
} from 'formik';
import { useDispatch } from 'react-redux';
import { addTraitor } from '../../store';
import { Button, Container, Field } from './index.styles';

function TraitorsForm(): JSX.Element {
  const dispatch = useDispatch();

  // TODO: doesn't work
  //   const onSubmitHandler = async (values: any) => { // TODO: better typing
  //     const { name, lastName } = values;
  //     const id = 1; // TODO: generate new one here

  //     console.log('dispatching addTraitor with', name, lastName, id);
  //     dispatch(addTraitor({ name, lastName, id }));
  //     return values;
  //   };

  const form = (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      validate={(values) => {
        const errors: { name: string, lastName: string } = { name: '', lastName: '' };

        if (!values.name) {
          errors.name = 'Name is required!';
        }
        if (!values.lastName) {
          errors.lastName = 'Last name is required!';
        }
        return errors;
      }}
    >
      <Form>
        <div>
          <Field id="name" name="name" placeholder="First Name" />
          <Field id="lastName" name="lastName" placeholder="Last Name" />
        </div>
        <Container>
          <ErrorMessage name="name">
            {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>
        </Container>
        <Container>
          <ErrorMessage name="lastName">
            {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>
        </Container>
        <Container>
          <Button type="submit">Submit</Button>
        </Container>
      </Form>
    </Formik>
  );

  return (
    <Container>
      {form}
    </Container>
  );
}

export default TraitorsForm;

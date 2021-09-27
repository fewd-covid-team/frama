/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import { useDispatch } from 'react-redux';
import { addTraitor } from '../../store';

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
        name: 'me',
        lastName: '123',
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
        <label htmlFor="name">First Name</label>
        <Field id="name" name="name" placeholder="Jane" />
        <ErrorMessage name="name">
          {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="lastName">Last name</label>
        <Field id="lastName" name="lastName" />
        <ErrorMessage name="lastName">
          {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );

  return (
    <div>
      {form}
    </div>
  );
}

export default TraitorsForm;

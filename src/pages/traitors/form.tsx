/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addTraitor } from '../../store';
import { Button, Container, Field } from './index.styles';

function TraitorsForm(): JSX.Element {
  const dispatch = useDispatch();

  const formContent = (
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
  );
  const form = (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
      }}
      onSubmit={(values) => {
        const { name, lastName } = values;
        const id = Math.floor(Math.random() * 10000);

        dispatch(addTraitor({ name, lastName, id }));
        return Promise.resolve(values);
      }}
      validate={(values) => {
        const errors: any = {};

        if (!values.name) {
          errors.name = 'Name is required!';
        }
        if (!values.lastName) {
          errors.lastName = 'Last name is required!';
        }
        return errors;
      }}
    >
      {formContent}
    </Formik>
  );

  return <Container>{form}</Container>;
}

export default TraitorsForm;

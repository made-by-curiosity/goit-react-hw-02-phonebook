import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { AddButton, PhonebookForm, ErrorText } from './Form.styled';

const schema = yup.object().shape({
  name: yup.string().required('Как же без имени?'),
  number: yup.string().required('А звонить куда?'),
});

const initialValues = {
  name: '',
  number: '',
};

const ValidationError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export class AddForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    console.log('values', values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={schema}
      >
        <PhonebookForm>
          <label htmlFor="name">
            <p>Name</p>
            <Field
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ValidationError name="name" />
          </label>
          <label htmlFor="number">
            <p>Number</p>
            <Field
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ValidationError name="number" />
          </label>
          <AddButton type="submit">Add Contact</AddButton>
        </PhonebookForm>
      </Formik>
    );
  }
}

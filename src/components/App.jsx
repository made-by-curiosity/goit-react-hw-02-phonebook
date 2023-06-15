import React, { Component } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { AddForm } from 'components/Form/Form';
import { Container } from './Container/Container';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  render() {
    const { contacts } = this.state;

    return (
      <Container titleText="Phonebook">
        <Section>
          <AddForm />
        </Section>
        <Section sectionTitle="Contacts">
          <ContactList contacts={contacts} />
        </Section>
      </Container>
    );
  }
}

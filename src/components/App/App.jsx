import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  // ДОДАЄМО КОНТАКТ
  addContact = contact => {
const exsistingContact=this.state.contacts.some(({name}) => name.toLowerCase() === contact.name.toLowerCase())

    if (exsistingContact) {
      Notify.failure(`${contact.name} is already in contacts`);
      return
    } 
    
    
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
    
}
 

  // Змінюємо значення контактів
  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };
  // Отримуємо змінені значення контактів
  getFilterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  // Видаляємо контакти
  onRemoveContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const visibleContacts = this.getFilterContacts();

    return (
      <div className={css.container}>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <div className={css.filterWrapper}>
          <Filter
            filter={this.state.filter}
            onFilterChange={this.onFilterChange}
          />

          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.onRemoveContact}
          />
        </div>
      </div>
    );
  }
}

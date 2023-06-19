import React from 'react';
import css from './ContactForm.module.css';


export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

 

  onInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  onSubmitChange = e => {
    e.preventDefault();
    this.props.addContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      number: '',
      name: '',
    });

  };

  render() {
    return (
      <form onSubmit={this.onSubmitChange} className={css.formwrapper}>
        <label className={css.labelName} htmlFor="inputName">
          <span>Name</span>
          <input
            className={css.inputField}
            name="name"
            id="inputName"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onInputChange}
            value={this.state.name}
          />
        </label>
        <label className={css.labelName} htmlFor="inputNumber">
          <span>Number</span>
          <input
            className={css.inputField}
            id="inputNumber"
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onInputChange}
            value={this.state.number}
          />
        </label>
        <button className={css.btnsubmit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

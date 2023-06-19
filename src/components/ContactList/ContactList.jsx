import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <div>
      {contacts.map(({ name, number, id}) => {
        return (
          <li
            className={css.contactItem}
            key={id}>
            <div className={css.wrapperContact}>
              <div>{name} :</div>
              <div> {number}</div>
            </div>

            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => onRemoveContact(id)}
            >Delete</button>
          </li>
        );
      })}
    </div>
  );
};

ContactList.Types = {
  contacts: PropTypes.object.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

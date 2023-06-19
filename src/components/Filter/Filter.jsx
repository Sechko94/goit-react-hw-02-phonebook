import css from './Filter.module.css'
import PropTypes from 'prop-types';



export const Filter = ({ value, onFilterChange }) => {
    return (
      <label className={css.labelFilter}>
        <span>Find contacts by name: </span>

        <input className={css.inputFilter}
          type="text"
          name="filter"
          value={value}
          onChange={onFilterChange}
        />
      </label>
    );
}

Filter.types = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
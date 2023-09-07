import PropTypes from 'prop-types';
import {
  CenterContainer,
  FilterTitile,
  ContFilter,
  FilterInput,
  FilterPlaceholder,
} from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <CenterContainer>
      <FilterTitile>Contacts</FilterTitile>
      <ContFilter>
        <FilterInput
          placeholder=" "
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
        <FilterPlaceholder htmlFor="filter">Find contact</FilterPlaceholder>
      </ContFilter>
    </CenterContainer>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

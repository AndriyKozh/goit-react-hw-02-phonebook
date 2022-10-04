import PropTypes from 'prop-types';

import { FilterLable, FilterInput, FilterBlock } from './Filter.style';

function Filter({ value, onChange }) {
  return (
    <FilterBlock>
      <FilterLable>
        Find contacts by name
        <FilterInput type="text" value={value} onChange={onChange} />
      </FilterLable>
    </FilterBlock>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

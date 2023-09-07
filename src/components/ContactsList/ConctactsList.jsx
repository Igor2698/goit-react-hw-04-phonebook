import PropTypes from 'prop-types';
import {
  ContContactList,
  ContListUl,
  ContListText,
  ContListItem,
  ContListBtn,
} from './ContactsList.styled';
const ContactsList = ({ onDeleteContact, filtered }) => {
  return (
    <ContContactList>
      <ContListUl>
        {filtered.map(({ id, name, number }) => (
          <ContListItem key={id}>
            <ContListText>
              {name}: <span className="number"> {number}</span>
            </ContListText>

            <ContListBtn type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </ContListBtn>
          </ContListItem>
        ))}
      </ContListUl>
    </ContContactList>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

import { PhonebookBlock, PhoneBookDot, PhoneBookBtn } from './PhoneBook.style';

function Phonebook({ contact, listDel }) {
  return (
    <PhonebookBlock>
      <PhoneBookDot></PhoneBookDot>
      <p>
        {contact.name}:{contact.number}
      </p>
      <PhoneBookBtn
        type={'button'}
        onClick={() => {
          listDel(contact.id);
        }}
      >
        delete
      </PhoneBookBtn>
    </PhonebookBlock>
  );
}

export default Phonebook;

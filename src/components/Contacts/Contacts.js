import Phonebook from 'components/Phonebook/Phonebook';

function Contacts({ contacts, listDel }) {
  return (
    <div>
      {contacts.map(contact => (
        <Phonebook key={contact.id} contact={contact} listDel={listDel} />
      ))}
    </div>
  );
}

export default Contacts;

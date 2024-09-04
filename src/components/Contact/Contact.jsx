export default function Contact({ contact, onDelete }) {
  return (
    <div>
      <p>{contact.id}</p>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
}

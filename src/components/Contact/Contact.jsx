export default function Contact({ contact }) {
  return (
    <div>
      <p>{contact.id}</p>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button>Delete</button>
    </div>
  );
}

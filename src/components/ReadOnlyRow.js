import React from 'react';

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteContact }) => {

  const handleClick = (event) => {
    handleEditClick(event, contact)
  }

  const handleDelete = () => {
    handleDeleteContact(contact.id)
  }

  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button type="button" onClick={handleClick}>Edit</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

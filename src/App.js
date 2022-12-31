import React, { useState, Fragment } from 'react';
import './App.css';
import data from './mock-data.json';
import { nanoid } from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    // event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  
  const handleEditClick = (event, contact) => {
    // event.preventDefault();
    setEditContactId(contact.id);
    
    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    
    setEditFormData(formValues);
  };
  
  const handleEditFormChange = (event) => {
    // event.preventDefault();
    
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    
    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    // event.preventDefault();
    
    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    }

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId)

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  }

  const handleCancelClick = () => {
    setEditContactId(null);
  }

  const handleDeleteContact = (contactId) => {
    // const newContacts = [...contacts];    
    // const newContactsArray = newContacts.filter(contact => contact.id !== contactId);
    // setContacts(newContactsArray);

    const newContacts = [...contacts]

    const index = contacts.findIndex(contact => contact.id === contactId)

    newContacts.splice(index, 1);

    setContacts(newContacts)
  }
  
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <Fragment key={contact.id}>
              {editContactId === contact.id ? (
                <EditableRow
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleEditFormSubmit={handleEditFormSubmit}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadOnlyRow
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteContact={handleDeleteContact}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>

      <div className="add-contact">
        <h2>Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Enter a name..."
            required
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Enter an address..."
            required
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter a phone number..."
            required
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter an email..."
            required
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default App;

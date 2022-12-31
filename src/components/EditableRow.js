import React from 'react';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleEditFormSubmit,
  handleCancelClick,
}) => {
  return (
      <tr>
        <td>
          <input
            type="text"
            name="fullName"
            placeholder="Enter a name..."
            onChange={handleEditFormChange}
            value={editFormData.fullName}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="address"
            placeholder="Enter an address..."
            onChange={handleEditFormChange}
            value={editFormData.address}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter a phone number..."
            onChange={handleEditFormChange}
            value={editFormData.phoneNumber}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="email"
            placeholder="Enter an email..."
            onChange={handleEditFormChange}
            value={editFormData.email}
            required
          />
        </td>
        <td>
          <button type="button" onClick={handleEditFormSubmit}>
            Save
          </button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
      </tr>
  );
};

export default EditableRow;

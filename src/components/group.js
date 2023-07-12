import React, { useState } from 'react';
import "../CSS/group.css"

const GroupContacts = () => {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [contactName, setContactName] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');

  const createGroup = () => {
    if (groupName.trim() !== '') {
      setGroups([...groups, { name: groupName, contacts: [] }]);
      setGroupName('');
    }
  };

  const addContact = () => {
    if (contactName.trim() !== '' && selectedGroup !== '') {
      const updatedGroups = groups.map((group) => {
        if (group.name === selectedGroup) {
          const updatedContacts = [...group.contacts, contactName];
          return { ...group, contacts: updatedContacts };
        }
        return group;
      });
      setGroups(updatedGroups);
      setContactName('');
    }
  };

  return (
    <div className="group-contacts-container">
      <div className="group-form">
        <h2>Create Group</h2>
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <button onClick={createGroup}>Create</button>
      </div>

      <div className="add-contact-form">
        <h2>Add Contact</h2>
        <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          <option value="">Select Group</option>
          {groups.map((group) => (
            <option key={group.name} value={group.name}>
              {group.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Contact Name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />
        <button onClick={addContact}>Add</button>
      </div>

      <div className="group-list">
        <h2>Groups and Contacts</h2>
        {groups.map((group) => (
          <div key={group.name} className="group">
            <h3>{group.name}</h3>
            <ul>
              {group.contacts.map((contact) => (
                <li key={contact}>{contact}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupContacts;

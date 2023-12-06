// ClientList.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientCard from './Clientcard1';

const clients = [
  {
    name: 'Barry Cuda',
    company: 'Global Technologies',
    designation : 'CEO',
    photo: 'https://source.unsplash.com/200x200/?person',
  },
  {
    name: 'Tressa Wexler ',
    company: 'Delta Infotech',
    designation : 'CEO',
    photo: 'https://source.unsplash.com/200x200/?person', 
  },
  {
    name: 'Ruby Bartlett',
    company: 'Cream Inc',
    designation : 'CEO',
    photo: 'https://source.unsplash.com/200x200/?person', 
  },
  {
    name: 'Misty Tison ',
    company: 'Wellfare Company',
    designation : 'CEO',
    photo: 'https://source.unsplash.com/200x200/?person', 
  },
  {
    name: 'Daniel Deacon ',
    company: 'Mustang Tech',
    designation : 'CEO',
    photo: 'https://source.unsplash.com/200x200/?person', 
  },
  {
    name: 'Walter Weaver ',
    company: 'International Software Inc',
    designation : 'CEO',
    photo: 'https://source.unsplash.com/200x200/?person', 
  },
  {
    name: 'Amanda ',
    company: 'Mercury Inc',
    designation : 'CEO',
    photo: 'https://source.unsplash.com/200x200/?person', 
  },
  {
    name: 'Betty Carlson',
    company: 'Carlson Tech',
    designation : 'CEO',
    photo: 'https://source.unsplash.com/200x200/?person', 
  },
 
];

const ClientList = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {clients.map((client, index) => (
          <div key={index} className="col-md-3">
            <ClientCard client={client} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;

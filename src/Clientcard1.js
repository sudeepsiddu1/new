import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ClientCard = ({ client }) => {
  return (
    <div className="card mb-3 text-center">
      <div className="d-flex justify-content-end align-items-start mt-2 mr-2">
      <i class="fa-solid fa-ellipsis-vertical"></i> </div>
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={client.photo}
          className="card-img-top rounded-circle"
          alt={client.name}
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{client.company}</h5>
        <p className="card-text">
           {client.name}<br />
           {client.designation}
        </p>
        
        <a href="/" className="btn btn-light">
          View Profile
        </a>
        <a href="/" className="btn btn-light ml-2">
          Message
        </a>
      </div>
    </div>
  );
};

export default ClientCard;
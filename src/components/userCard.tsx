// src/components/UserCard.tsx

import React from 'react';
import { User } from '../interfaces/user';

interface UserCardProps {
 user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
 return (
   <div className="user-card">
     <div className="profile-section">
       <div className="placeholder-image"></div>
       <div className="profile-info">
         <h3>{user.name}</h3>
         <p>@{user.username}</p>
       </div>
     </div>
    
     <div className="contact-section">
       <a href={`mailto:${user.email}`} className="contact-link">
         <span role="img" aria-label="Mail icon">&#x2709;&#xfe0f;</span> {user.email}
       </a>
       <a href={`tel:${user.phone}`} className="contact-link">
         <span role="img" aria-label="Phone icon">&#x260e;&#xfe0f;</span> {user.phone}
       </a>
       <a href={`https://${user.website}`} className="contact-link" target="_blank" rel="noopener noreferrer">
         <span role="img" aria-label="Web icon">&#x1f310;</span> {user.website}
       </a>
     </div>

     <div className="details-section">
       <div className="detail-item">
         <h4>Address</h4>
         <p>{user.address.street}, {user.address.suite}</p>
         <p>{user.address.city}</p>
         <p>{user.address.zipcode}</p>
         <a href={`https://www.google.com/maps/search/?api=1&query=$${user.address.geo.lat},${user.address.geo.lng}`} className="geo-link" target="_blank" rel="noopener noreferrer">
           <span role="img" aria-label="Location icon">&#x1f4cd;</span> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
         </a>
       </div>


       <div className="detail-item">
         <h4>Company</h4>
         <p>{user.company.name}</p>
         <p>"{user.company.catchPhrase}"</p>
         <p>{user.company.bs}</p>
       </div>
     </div>
   </div>
 );
};

export default UserCard;

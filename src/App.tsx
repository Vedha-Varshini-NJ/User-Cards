import React, { useEffect, useState } from 'react';
import './App.css';

// Interface to type the user data structure
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data: User[]) => {
        setUsers(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="app-container">
      <h1>Cards</h1>
      <div className="cards-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="profile-section">
              <div className="placeholder-image"></div>
              <div className="profile-info">
                <h3>{user.name}</h3>
                <p>@{user.username}</p>
              </div>
            </div>
            
            <div className="contact-section">
              <a href={`mailto:${user.email}`} className="contact-link">
                <span role="img" aria-label="Mail icon">✉️</span> {user.email}
              </a>
              <a href={`tel:${user.phone}`} className="contact-link">
                <span role="img" aria-label="Phone icon">📞</span> {user.phone}
              </a>
              <a href={`https://${user.website}`} className="contact-link" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="Web icon">🌐</span> {user.website}
              </a>
            </div>

            <div className="details-section">
              <div className="detail-item">
                <h4>Address</h4>
                <p>{user.address.street}, {user.address.suite}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat},${user.address.geo.lng}`} className="geo-link" target="_blank" rel="noopener noreferrer">
                  <span role="img" aria-label="Location icon">📍</span> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
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
        ))}
      </div>
    </div>
  );
};

export default App;
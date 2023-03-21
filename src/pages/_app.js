import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import React, { useState, useEffect } from 'react';


function App() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrent] = useState([]);
    const [showing, setShowing] = useState(false);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);
    
    const handleClick = (value) => () => {
      setCurrent(value);
      setShowing(true);
    };

    return (
      <div className='contacts'>
        <h1>
          Contacts
        </h1>
        <div name="contactList" className='contactList'>
          <div name="contactCard">
            {users.map(user => (
              <Card style={{ width: '18rem' }} className="user" >
                <Card.Body>
                  <Card.Title> {user.username}</Card.Title>
                  <Card.Subtitle>{user.name}</Card.Subtitle>
                  <Card.Text>{user.email}</Card.Text>
                  <Button variant="primary" size="sm" onClick={handleClick(user)}>View more</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
          { showing 
          ? <div name="contactDetails" className='contactDetails'>          
              <Card style={{ width: '40rem' }} >
                <Card.Body>
                  <Card.Title><b>{currentUser.username}'s</b> details</Card.Title>
                  <Card.Title>{currentUser.name}</Card.Title>
                  <Card.Subtitle>{currentUser.phone}</Card.Subtitle>
                  <Card.Subtitle>{currentUser.email}</Card.Subtitle>
                  <br></br>
                  <Card.Text><b>Website</b>
                  <br></br>{currentUser.website}</Card.Text>
                  <Card.Text><b>Address</b>
                  <br></br>{currentUser.address?.street} {currentUser.address?.suite}
                  <br></br>{currentUser.address?.city}
                  <br></br>{currentUser.address?.zipcode}
                  </Card.Text>
                  <Card.Text><b>Company</b>
                  <br></br>{currentUser.company?.name}
                  <br></br>{currentUser.company?.catchPhrase}
                  <br></br>{currentUser.company?.bs}
                  </Card.Text>
                </Card.Body>
              </Card>
          </div> 
          : null}
        </div>
      </div>
    );
  }

  export default App;






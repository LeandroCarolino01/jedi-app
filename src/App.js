import React, { useState, useEffect } from 'react';
import ForceCounter from './components/ForceCounter';
import './App.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'
import axios from 'axios';




function App() {

  const [data, setData] = useState({ sabers: [] })

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        '/data/sabers.json',
      );
      setData(result.data);
    }
    fetchData()
  }, []);




  return (
    <Container>
      <ForceCounter/>
      <CardColumns>
        {data.sabers.map((saber, index) => (
          <Card style={{ width: '18rem' }} key={index}>


            <Card.Body>

              <Card.Title>{saber.name}</Card.Title>

              <Card.Text>
                {}
              </Card.Text>

              <Button variant="primary">Go somewhere</Button>

            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </Container>
  );
}

export default App;

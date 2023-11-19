import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';

function App() {
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/profile");
      console.log("Respuesta del servidor:", response.data);
      setProfile(response.data[0]);
    } catch (error) {
      console.error("Error al obtener perfil: ", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <div>
        <h1>{profile && `${profile.name}`} {profile && `${profile.lastName}`}</h1>
        <Card body>{profile && `${profile.summary}`}</Card>
      </div>
      <div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Edad</Accordion.Header>
            <Accordion.Body>{profile && `${profile.age}`}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Ciudad de origen</Accordion.Header>
            <Accordion.Body>{profile && `${profile.city}, ${profile.country}`}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Correo electrónico</Accordion.Header>
            <Accordion.Body>{profile && `${profile.email}`}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
        <Carousel>
          {profile && Array.isArray(profile.Frameworks) && profile.Frameworks.map((framework, index) => (
            <Carousel.Item key={index}>
              <img src={`./assets/imagen${index + 1}.jpg`} alt={`Slide ${index + 1}`} />
              <Carousel.Caption>
                <h3>{framework.name}</h3>
                <p>{framework.level}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Herramienta</th>
              <th>Nivel de dominio</th>
              <th>Año de inicio</th>
              <th>Porcentaje</th>
            </tr>
          </thead>
          <tbody>
            {profile && Array.isArray(profile.Frameworks) && profile.Frameworks.map((framework, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{framework.name}</td>
                <td>{framework.level}</td>
                <td>{framework.year}</td>
                <td>
                  <ProgressBar
                    now={framework.percentage}
                    label={`${framework.percentage}%`}
                    variant={framework.percentage > 55 ? 'success' : 'warning'}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;

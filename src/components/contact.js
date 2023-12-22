import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
    
     
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              patil@domain.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              9405179161
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              pune,Wagholi
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;
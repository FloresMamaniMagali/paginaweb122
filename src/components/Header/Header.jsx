import { Button, Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import head_rightImg from '../../assets/headerRght.png';
import curve from '../../assets/curve.png';
import coock from '../../assets/cook.png';
import delivery from '../../assets/delivery.png';
import thumbs from '../../assets/thumbs.png';
import HeaderFoot from '../HeaderFoot/HeaderFoot';

const Header = () => {
  return (
    <div className='mt-5'>
      <Container>
        <Row>
          <Col md={6}>
            <div className="head_left">
              <span className='h_subTitle'>lenguajes de programacion</span>
              <div className="w-75 mt-2 h_title">
                <h1 style={{ color: '#FB9431' }}> python  </h1>
                <h1 style={{ color: '#3D3F42' }}> java   </h1>
                <h1 style={{ color: '#3D3F42' }}> c++   </h1>
              </div>
              <p className='text-secondary'>
                
              Los lenguajes de programación permiten a todos los dispositivos electrónicos,
               como ordenadores y smartphones, interpretar instrucciones y códigos que hacen posible crear sitios web, apps,
               apps web, programas y plataformas que actualmente utilizamos todos a diario.


              </p>
              <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                <Button className='bg_login fw-bold border-0'>informacion</Button>
                <Button className='contact_btn'>contact us</Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="head_right">
              <div className="imageContainer d-flex justify-content-end align-items-center shadow-sm rounded">
                <img src={head_rightImg} alt="headerr-image" className='head_rightImg' />
              </div>
            </div>
          </Col>
        </Row>


        <Row>
          <div className="d-flex my-4">
            <img src={curve} alt="curve" className='curve' />
          </div>
          <Col md={4}>
            <div className="box">
              <div className="boxContianer d-flex">
                <div className="">
                  <img src={coock} alt="coock" className='' style={{ width: '90%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="w-100">
                  <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }}>Delicious Food</h5>
                  <p className='text-secondary'>     
                  Un lenguaje de programación es un sistema de signos para comunicar individuos; 
                  se trata de un conjunto de instrucciones que permite la interacción de los humanos con las computadoras. Veamos cuales son los 10 lenguajes de programación más usados en la actualidad:

1. JavaScript
un lenguaje de programación orientado a objetos. Como es interpretado, no necesita compilación, entonces los navegadores leen el código y ejecutan las acciones indicadas. 
Esta característica, lo hace idóneo para crear páginas o aplicaciones web, con elementos interactivos o más visuales, de allí su relevancia en el desarrollo de videojuegos.

La capacidad de ejecutarse desde el navegador, lo hace el lenguaje más usado en el mundo, pues, aunque un sitio web esté hecho en otro lenguaje, puede contener algo desarrollado en JavaScript.
                  
                  
                  
                  
                     </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
              <div className="boxContianer d-flex">
                <div className="">
                  <img src={delivery} alt="coock" className='' style={{ width: '90%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="w-100">
                  <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }}>Fast Delivery</h5>
                  <p className='text-secondary'>      
                  El programador es el profesional que se ocupa de utilizar los lenguajes de programación 
                  para crear esas secuencias de instrucciones que, en conjunto, conformarán programas informáticos. 
                  Esto significa que debe comprender y manejar muy bien esos lenguajes.

                  
                          </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
              <div className="boxContianer d-flex">
                <div className="">
                  <img src={thumbs} alt="coock" className='' style={{ width: '90%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="w-100">
                  <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }}>Feedback
                    <small className='ms-3 fw-normal'>
                      <i className="fa-solid fa-star starr me-1"></i>
                      4.8 (14.5k)
                    </small></h5>
                  <p className='text-secondary'> 
                  Como una aproximación muy básica, puede decirse que a cada instrucción le corresponde una acción por parte del procesador, y que el código escrito se transforma en código máquina para que el procesador pueda procesarlo en lo que se conoce como lenguaje máquina, el cual se basa en una secuencia de ceros y unos (datos binarios).

                  
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="headerFoot my-4">
          <HeaderFoot />
        </div>
      </Container>
    </div>

  )
}

export default Header
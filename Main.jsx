import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineMoveToInbox } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          About Me and Portfolio
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#123', color: 'white' }}> {/* Set background color here */}
        <h1 style={{ color: 'yellow', textAlign: 'center' }}>About Me</h1>

        <h2 style={{ textAlign: 'center' }}>Personal Infos</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', color: 'white' }}>
          <div>
            <p><b>First Name:</b> Abdul</p>
            <p><b>Age:</b> 19</p>
            <p><b>Freelancer:</b> Available</p>
            <p><b>Phone:</b> +92 301 3618697</p>
            <p><b>Skype:</b> Abdul Ahad</p>
          </div>
          <div>
            <p><b>Last Name:</b> Ahad</p>
            <p><b>Nationality:</b> Pakistan</p>
            <p><b>Address:</b> Bahawalpur</p>
            <p><b>Email:</b> ahad83392@gmail.com</p>
            <p><b>Languages:</b> Urdu, English</p>
          </div>
        </div>

        <h2 style={{ textAlign: 'center' }}>Experience</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <h3 style={{ color: 'yellow', textAlign: 'center' }}>04+</h3>
            <p>Months of Experience</p>
          </div>
          <div>
            <h3 style={{ color: 'yellow', textAlign: 'center' }}>00</h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3 style={{ color: 'yellow', textAlign: 'center' }}>No</h3>
            <p>Customers Happy</p>
          </div>
          <div>
            <h3 style={{ color: 'yellow', textAlign: 'center' }}>No</h3>
            <p>Awards Granted</p>
          </div>
        </div>

        <h2 style={{ textAlign: 'center' }}>My Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 150px)', gap: '20px', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="circle" style={{
              position: 'relative',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'conic-gradient(#ff6f00 90%, #333 10%)'
            }}></div>
            <div style={{ marginTop: '10px', color: 'white' }}>HTML</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="circle" style={{
              position: 'relative',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'conic-gradient(#ff6f00 80%, #333 20%)'
            }}></div>
            <div style={{ marginTop: '10px', color: 'white' }}>CSS</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="circle" style={{
              position: 'relative',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'conic-gradient(#ff6f00 78%, #333 22%)'
            }}></div>
            <div style={{ marginTop: '10px', color: 'white' }}>Bootstrap</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="circle" style={{
              position: 'relative',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'conic-gradient(#ff6f00 50%, #333 50%)'
            }}></div>
            <div style={{ marginTop: '10px', color: 'white' }}>React</div>
          </div>
        </div>

        <h2 style={{ textAlign: 'center' }}>Education and Experience</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', color: 'white' }}>
          <div style={{ textAlign: 'center' }}>
            <MdOutlineMoveToInbox />
            <h3>Matric</h3>
            <p>Got 97% <br /> Done in 2019-20</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <MdOutlineMoveToInbox />
            <h3>Intermidiate</h3>
            <p>Got 80% <br /> Done in 2021-22</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <MdOutlineMoveToInbox />
            <h3>BS in Artificial Intelligence</h3>
            <p>Continue in semester 3rd <br /> 2023-27</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <MdOutlineMoveToInbox />
            <h3>Web Development</h3>
            <p>Done approximately <br /> Front end development</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Main() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [modalShow, setModalShow] = useState(false);

  return (
    <div>

      <div className="navbar-container">
        <ul style={{color:'white'}} className="navbar">
          <li className="nav-item">
            <i><FaAngleRight className='fas' />
            </i>
            <span className="nav-label">Home</span>
          </li>
          <li className="nav-item">
            <i><FaAngleRight className='fas' /></i>
            <span className="nav-label">About</span>
          </li>
          <li className="nav-item">
            <i><FaAngleRight className='fas' /></i>
            <span className="nav-label">Portfolio</span>
          </li>
          <li className="nav-item">
            <i><FaAngleRight className='fas' /></i>
            <span className="nav-label">Contact</span>
          </li>
        </ul>
      </div>




      <div className="main">
        <div className="a">
          <div className="b" data-aos="fade-up-right"></div>

          <div className="c" data-aos="fade-up-right">
            <h1 style={{ color: 'yellow' }}>--Hi I'm Abdul Ahad <br />Your Web designer</h1>
            <p style={{ color: 'whitesmoke' }}>
              Hi..... <br /> Meet here u'r  Web developer check my portfolio. Read my skills and experience and study... <br />Thanks.... <br /> Regards:Abdul Ahad
            </p>


            <button
              style={{ display: 'flex' }}
              className='btn12'
              onClick={() => setModalShow(true)}
            >
              Read More
              <div className="btn121"><FaArrowAltCircleRight /></div>
            </button>
          </div>
        </div>
      </div>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

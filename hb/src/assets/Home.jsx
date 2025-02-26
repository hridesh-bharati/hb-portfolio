import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel/Carousel'
import '../App.css';
import Card from './Card/Card';
import TestimonialSection from './Card/Testimonial';
import ContactForm from './Contact/Contact';
export default function Home() {
  const elementRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(elementRef.current, {
      strings: [
        "Web Developer", "Web Desinger", "Computer Operator", "Programmer"
      ],
      typeSpeed: 55,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const cardData = [
    {
      "pic": "url1",
      "title": "Coding",
      "Desc": "All Coding Work",
      "linkIcon": "<i className='bi bi-whatsapp'></i>"
    },
    {
      "pic": "url2",
      "title": "Design",
      "Desc": "Graphic and Web Design",
      "linkIcon": "<i className='bi bi-facebook'></i>"
    },
    {
      "pic": "url3",
      "title": "Marketing",
      "Desc": "Digital Marketing Strategies",
      "linkIcon": "<i className='bi bi-instagram'></i>"
    }
  ]
  const socialLinksData = [
    {
      "platform": "facebook",
      "url": "/facebook",
      "icon": "bi-facebook",
      "color": "#3b5998"
    },
    {
      "platform": "instagram",
      "url": "/instagram",
      "icon": "bi-instagram",
      "color": "#C13584"
    },
    {
      "platform": "linkedin",
      "url": "/linkedin",
      "icon": "bi-linkedin",
      "color": "#0e76a8"
    },
    {
      "platform": "github",
      "url": "/github",
      "icon": "bi-github",
      "color": "#333"
    },
    {
      "platform": "youtube",
      "url": "/youtube",
      "icon": "bi-youtube",
      "color": "#FF0000"
    },
    {
      "platform": "whatsapp",
      "url": "/whatsapp",
      "icon": "bi-whatsapp",
      "color": "#25D366"
    }
  ]
  const colleges = [
    {
      title: "Ramharsh Inter College",
      location: "Nichalul Maharajganj, Uttar Pradesh",
      description: "Ramharsh Inter College is dedicated to providing quality education and fostering holistic development. With a focus on academic excellence, extracurricular activities, and character building, we prepare students to face the challenges of the future. Our campus is equipped with modern facilities and a supportive learning environment."
    },
    {
      title: "Rastriya Inter College Bali",
      location: "Nichlaul Maharajganj, Uttar Pradesh",
      description: "Rastriya Inter College Bali aims to provide comprehensive education to students, focusing on academic growth and personal development. Our institution offers various programs and activities to ensure a well-rounded education."
    },
    {
      title: "Rajendra Prasad Tarachand P.G. College",
      location: "Nichlaul Maharajganj, Uttar Pradesh",
      description: "Rajendra Prasad Tarachand P.G. College is committed to excellence in higher education. We offer a range of undergraduate and postgraduate programs, along with ample opportunities for research and extracurricular activities, creating a vibrant academic environment."
    }
  ];
  return (
    <div>
      <Carousel />
      <div className=' text-white'>
        <div className="typingCard fw-medium">
          <h1 className='fw-bolder'>HRIDESH BHARATI</h1>
          <span ref={elementRef}></span>

        </div>
      </div>
      <div className="row d-flex justify-content-center w-100 mx-auto py-5 my-5 ">
        <h2 className="text-center text-secondary fw-bold">About Me</h2>
        <hr />
        <div className="col-sm-8 mb-3 mb-sm-0 ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-danger">Hridsh Bharati as a Developer:</h5>
              <p className="card-text fs-5">Hridesh Bharati is a skilled web developer and computer teacher based. Currently serving as a programmer and lab in-charge at Drishtee Computer Center, he leverages his expertise in web development to create robust and dynamic digital solutions. In addition to his technical work, Hridesh is dedicated to education, guiding students through programming challenges and fostering their growth in the tech field. His dual role as a practitioner and educator reflects his commitment to advancing both his own skills and the capabilities of his students.</p>
              <a href="#" className="btn btn-primary">More About Me</a>
              <hr />
              <div className="card text-center d-flex justify-content-center text-center">
                <div className="row text-start d-flex justify-content-center">
                  <Link className='text-secondary col-md-5 nav-link m-2 fw-bold fs-4' to={"/contact"}>Phone</Link>
                  <Link className='text-secondary col-md-5 nav-link m-2 fw-bold fs-4' to={"/contact"}>Email</Link>
                </div>
                <div className="row text-start d-flex justify-content-center">
                  <Link href="tel:7267995307" className='text-secondary col-md-5 nav-link m-2'>+91 7267995307</Link>
                  <Link href="mailto:hrideshbharati027@gmail.com" className='text-secondary col-md-5 nav-link m-2'>hrideshbharati027@gmail.com</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card rounded-0" style={{ width: '18rem', backgroundColor: 'var(--border-white)' }}>
            {/* <img src="img/pic1.jpg" className="card-img-top rounded-0 img-fluid" alt="..." /> */}
            <Card />

            <div className="card-body p-2 text-center d-flex justify-content-evenly">
              {socialLinksData.map((social, index) => (
                <Link to={social.url} key={index}>
                  <i className={`bi ${social.icon}`} style={{ fontSize: '25px', color: social.color }}></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex row justify-content-between container mx-auto my-5">
        <h2 className="text-center text-secondary fw-bold">Education</h2>
        <div class="card-group mt-4">
          <div class="card">
            <div class="card-body">
              <h5 className='text-secondary col-md-5 m-2 fw-bold'>2019 - 2020</h5>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 className='text-secondary col-md-5 m-2 fw-bold'>2021 - 2022</h5>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 className='text-secondary col-md-5 m-2 fw-bold'>2022 - 2025</h5>
            </div>
          </div>
        </div>
        <div className="tile-line-horizontal">
          <div style={{ left: '20%' }}></div>
          <div style={{ left: '40%' }}></div>
          <div style={{ left: '60%' }}></div>
          <div style={{ left: '80%' }}></div>
        </div>
        <div className="card-group mt-4">
          {colleges.map((college, index) => (
            <div className="card" key={index}>
              <div className="card-body">
                <h5 className="card-title">{college.title}</h5>
                <p className="text-body">{college.location}</p>
                <p className="text-body-secondary">{college.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-center"><button className='btn btn-warning btn-lg'>More</button></div>
        </div>

        {/* {
          cardData.map((item, i) => (
            <div className="col-md-4 d-flex justify-content-between " key={i}>
              <div className="card m-2" key={i}>
                <img src="img/pic1s.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          ))
        } */}
        <TestimonialSection />
        <ContactForm />
      </div>
    </div >
  )
}
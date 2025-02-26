import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback: "This product has completely transformed the way I work. I love the simplicity and efficiency it brings. Highly recommend it!"
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback: "An amazing experience! The team is incredibly helpful, and the platform is user-friendly. A must-have for any professional."
  },
  {
    name: "Samuel Clark",
    role: "Designer",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    feedback: "I’ve used many similar products, but this one stands out. It’s intuitive, effective, and has exceeded my expectations in every way."
  }
];


export default function TestimonialSection() {
  return (
    <div className="testimonial-section mt-5">
      <h2 className="text-center">What Our Users Are Saying</h2>
      <div className="row justify-content-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="card-img-top rounded-circle mx-auto mt-4"
                style={{ width: '80px', height: '80px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{testimonial.name}</h5>
                <h6 className="card-subtitle text-muted">{testimonial.role}</h6>
                <p className="card-text mt-3">{testimonial.feedback}</p>
                <p className="text-muted">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

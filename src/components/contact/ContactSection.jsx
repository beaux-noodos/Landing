import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeadphonesSimple, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactSection = () => {
  return (
    <section className="section_gap py-16">
      <div className="container mx-auto">
        <div className="relative h-80 mb-12">
          {/* Placeholder for map integration */}
          <div
            id="mapBox"
            className="absolute inset-0 bg-gray-200"
          // Assuming map will be embedded or handled differently
          >
            {/* For real usage, integrate map here */}
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="lg:w-1/4 md:w-1/2">
            <div className="contact_info">
              <div className="info_item mb-6">
                <FontAwesomeIcon icon={faHouse} className="ti-home text-2xl text-gray-600 mb-2"/>
                <h6 className="text-lg font-semibold">California, United States</h6>
                <p>Santa Monica Boulevard</p>
              </div>
              <div className="info_item mb-6">
              <FontAwesomeIcon icon={faHeadphonesSimple} className="ti-home text-2xl text-gray-600 mb-2"/>
                <h6>
                  <a href="tel:+4409865562" className="text-blue-500 hover:underline">00 (440) 9865 562</a>
                </h6>
                <p>Mon to Fri 9am to 6 pm</p>
              </div>
              <div className="info_item mb-6">
              <FontAwesomeIcon icon={faEnvelope} className="ti-home text-2xl text-gray-600 mb-2"/>
                <h6>
                  <a href="mailto:support@colorlib.com" className="text-blue-500 hover:underline">support@colorlib.com</a>
                </h6>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div className="lg:w-3/4 md:w-1/2">
            <form
              className="contact_form"
              action="contact_process.php"
              method="post"
              id="contactForm"
            >
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 pr-2">
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className="form-control w-full p-3 border border-gray-300 rounded"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      className="form-control w-full p-3 border border-gray-300 rounded"
                      id="email"
                      name="email"
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className="form-control w-full p-3 border border-gray-300 rounded"
                      id="subject"
                      name="subject"
                      placeholder="Enter Subject"
                      required
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 pl-2">
                  <div className="form-group mb-4">
                    <textarea
                      className="form-control w-full p-3 border border-gray-300 rounded"
                      name="message"
                      id="message"
                      rows="4"
                      placeholder="Enter Message"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  value="submit"
                  className="btn primary-btn bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

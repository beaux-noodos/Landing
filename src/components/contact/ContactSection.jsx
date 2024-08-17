import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeadphonesSimple, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactSection = () => {
  return (
    <section className="section_gap flex bg-background py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/4 md:w-1/2">
            <div className="contact_info">
              <div className="info_item mb-6">
                <FontAwesomeIcon icon={faHouse} className="ti-home text-2xl text-gray-600 mb-2" />
                <h6 className="text-lg font-semibold">Antananarivo, Madagascar</h6>
                <p>Ivandry Ambodivoanjo</p>
              </div>
              <div className="info_item mb-6">
                <FontAwesomeIcon icon={faHeadphonesSimple} className="ti-home text-2xl text-gray-600 mb-2" />
                <h6>
                  <a href="tel:+261349617885" className="text-blue-500 hover:underline">+261 34 96 178 85</a>
                </h6>
                <p>Mon to Fri 8am to 5 pm</p>
              </div>
              <div className="info_item mb-6">
                <FontAwesomeIcon icon={faEnvelope} className="ti-home text-2xl text-gray-600 mb-2" />
                <h6>
                  <a href="mailto:contact@pulse.com" className="text-blue-500 hover:underline">contact@pulse.com</a>
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
              <div className="flex flex-col w-1/2 mb-6">
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
                <div className="">
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
                <div className="text-right">
                <button
                  type="submit"
                  value="submit"
                  className="btn primary-btn bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

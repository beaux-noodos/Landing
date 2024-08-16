import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-area section_gap bg-primaryGreen text-background py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Top Products */}
          <div className="lg:w-1/6 md:w-1/2 p-4">
            <h4 className="text-lg font-semibold mb-4">Top Products</h4>
            <ul className="space-y-2 text-background">
              <li><a href="#" className="hover:text-gray-400">Managed Website</a></li>
              <li><a href="#" className="hover:text-gray-400">Manage Reputation</a></li>
              <li><a href="#" className="hover:text-gray-400">Power Tools</a></li>
              <li><a href="#" className="hover:text-gray-400">Marketing Service</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:w-1/6 md:w-1/2 p-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background">
              <li><a href="#" className="hover:text-gray-400">Jobs</a></li>
              <li><a href="#" className="hover:text-gray-400">Brand Assets</a></li>
              <li><a href="#" className="hover:text-gray-400">Investor Relations</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className="lg:w-1/6 md:w-1/2 p-4">
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-background">
              <li><a href="#" className="hover:text-gray-400">Jobs</a></li>
              <li><a href="#" className="hover:text-gray-400">Brand Assets</a></li>
              <li><a href="#" className="hover:text-gray-400">Investor Relations</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:w-1/6 md:w-1/2 p-4">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-background">
              <li><a href="#" className="hover:text-gray-400">Guides</a></li>
              <li><a href="#" className="hover:text-gray-400">Research</a></li>
              <li><a href="#" className="hover:text-gray-400">Experts</a></li>
              <li><a href="#" className="hover:text-gray-400">Agencies</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:w-2/6 md:w-1/2 p-4">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4 text-background">You can trust us. We only send promo offers.</p>
            <form
              target="_blank"
              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
              method="get"
              className="flex"
            >
              <input
                className="form-control w-full p-2 rounded-l-md border-none"
                name="EMAIL"
                placeholder="Your Email Address"
                onFocus={(e) => e.target.placeholder = ''}
                onBlur={(e) => e.target.placeholder = 'Your Email Address'}
                required
                type="email"
              />
              <button className="click-btn btn btn-default bg-primary text-secondary p-2 rounded-r-md">
                <span>Subscribe</span>
              </button>
              <div style={{ position: 'absolute', left: '-5000px' }}>
                <input
                  name="b_36c4fd991d266f23781ded980_aefe40901a"
                  tabIndex="-1"
                  value=""
                  type="text"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-300"><i className="ti-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-300"><i className="ti-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-300"><i className="ti-dribbble"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-300"><i className="ti-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

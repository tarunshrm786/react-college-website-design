// import React from 'react';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
// import '../footer.css';

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-columns">
//                 <div className="footer-column-logo">
//                     <div className="footer-logo">
//                         {/* Apply lazy loading */}
//                         <img src="NAD-Logo.png" alt="Farrmi Logo" loading="lazy" />
//                     </div>
//                     <p>National Academy of Design Sikar, Rajasthan, India, 769008</p>
//                     <p>Email: contact@nitrr.ac.in</p>
//                     <p>Phone: +91 123 456 7890</p>
                    
//                     <div className="social-icons">
//                         <div className="icon facebook"><FaFacebookF /></div>
//                         <div className="icon twitter"><FaTwitter /></div>
//                         <div className="icon linkedin"><FaLinkedinIn /></div>
//                         <div className="icon instagram"><FaInstagram /></div>
//                         <div className="icon youtube"><FaYoutube /></div>
//                     </div>
//                 </div>

//                 <div className="footer-column">
//                     <h4>IMPORTANT LINKS</h4>
//                     <p>Webmail</p>
//                     <p>NITRis</p>
//                     <p>Holidays</p>
//                     <p>Academic Calendar</p>
//                     <p>Academic TimeTable</p>
//                     <p>Admission Advt. & Notices</p>
//                     <p>Career</p>
//                     <p>Tenders</p>
//                     <p>Guest House</p>
//                     <p>Central Research Facility</p>
//                     <p>RTI</p>
//                 </div>

//                 <div className="footer-column-other-links">
//                     <h4>OTHER LINKS</h4>
//                     <p>NIRF</p>
//                     <p>NBA</p>
//                     <p>FTBI</p>
//                     <p>NAD Cell</p>
//                     <p>Unnat Bharat Abhiyan</p>
//                     <p>Internal Complaint Committee</p>
//                     <p>Institute Counselling Service</p>
//                     <p>Anti-Ragging</p>
//                     <p>GATI</p>
//                     <p>BIS Dashboard</p>
//                 </div>

//                 <div className="footer-column">
//                     <div className="social-media-grid">
//                         {/* Apply lazy loading to each image */}
//                         <img src="our-vision.jpg" alt="Our Vision" className="social-media-icon" loading="lazy" width="100" height="100" />
//                         <img src="img1.jpg" alt="Event  1" className="social-media-icon" loading="lazy" width="100" height="100" />
//                         <img src="img2.jpg" alt="Event 2" className="social-media-icon" loading="lazy" width="100" height="100" />
//                         <img src="img3.jpg" alt="Event  3" className="social-media-icon" loading="lazy" width="100" height="100" />
//                         <img src="img4.jpg" alt="Event  4" className="social-media-icon" loading="lazy" width="100" height="100" />
//                         <img src="imag5.jpg" alt="Event 5" className="social-media-icon" loading="lazy" width="100" height="100" />
//                         <img src="img6.jpg" alt="Event  6" className="social-media-icon" loading="lazy" width="100" height="100" />
//                         <img src="img7.jpg" alt="Event  7" className="social-media-icon" loading="lazy" width="100" height="100" />
//                         <img src="our-vision.jpg" alt="Our Vision" className="social-media-icon" loading="lazy" width="100" height="100" />
//                     </div>
//                 </div>
//             </div>
            
//             <div className="footer-bottom">
//                 <div className="footer-copyright">
//                     <p>Copyright © 2024 National Institute of Technology Rourkela. All Rights Reserved.</p>
//                 </div>
//                 <div className="footer-links">
//                     <a href="/terms-conditions">Terms & Conditions</a> | 
//                     <a href="/hyperlinking-policy">Hyperlinking Policy</a> | 
//                     <a href="/privacy-policy">Privacy Policy</a> | 
//                     <a href="/copyright">Copyright</a>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                {/* Logo and contact information */}
                <div className="footer-column-logo">
                    <div className="footer-logo">
                        <img src="NAD-Logo.png" alt="NAD Logo" loading="lazy" />
                    </div>
                    <p>Address: National Academy of Design, Opp. Grag hospital, near city center mall, SBl bank street, station road, Sikar (Rajasthan)</p>
                    <p>Email: Thenadskr@gmail.com</p>
                    {/* <p>Phone: +91 80588 66333</p>
                    <p>+919928423956</p> */}
                    <p>Phone: +91 80588 66333, +91 99284 23956</p>


                    {/* Social Media Icons */}
                    <div className="social-icons">
                        <div className="icon facebook"><FaFacebookF /></div>
                        <div className="icon twitter"><FaTwitter /></div>
                        <div className="icon linkedin"><FaLinkedinIn /></div>
                        <div className="icon instagram"><FaInstagram /></div>
                        <div className="icon youtube"><FaYoutube /></div>
                    </div>
                </div>


<div className="footer-column">
    <h4>IMPORTANT LINKS</h4>
    <ul>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/placement">Placement</Link></li>
        <li><Link to="/studentProfile">Student Verification</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/founding-members">Mentor</Link></li>
        <li><Link to="/staff">Our Team</Link></li>
        <li><Link to="/career">Career</Link></li>
    </ul>
</div>



                {/* Google Map Embed Section */}
                <div className="footer-column">
                    <h4>Find Us Here</h4>
                    <div className="map-container">


<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.41449949666!2d75.14450677456311!3d27.611676429706254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca24de881db71%3A0x3030d86063e67435!2sKhwaja%20Gharib%20Nawaz%20College%20of%20Nursing%2C%20Tala%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1689070271687!5m2!1sen!2sin"
                width="100%"
                height="300px"  // Updated map height
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="College Location"
              ></iframe>

                    </div>
                </div>
            </div>
            
            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p>Copyright © 2024 National Academy of Design. All Rights Reserved.</p>
                </div>
                <div className="footer-links">
                    <a href="/terms-conditions">Terms & Conditions</a> | 
                    <a href="/hyperlinking-policy">Hyperlinking Policy</a> | 
                    <a href="/privacy-policy">Privacy Policy</a> | 
                    <a href="/copyright">Copyright</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

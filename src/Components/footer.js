// import React from 'react';
// import '../footer.css'; // Make sure to create this CSS file for styling
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';


// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-columns">
         
//                   <div className="footer-column-logo">
//                     <div className="footer-logo">
//                     <img src="NAD-Logo.png" alt="Farrmi Logo" />
//                     </div>

//                  <p>   National Institute of Technology
// Rourkela, Odisha, India, 769008 </p>
//                     <p >Email: contact@nitrr.ac.in</p>
//                     <p >Phone: +91 123 456 7890</p>
//                     <div className="social-icons">
//         <img src="facebook-icon.png" alt="Facebook" />
//         <img src="twitter-icon.png" alt="Twitter" />
//         <img src="linkedin-icon.png" alt="LinkedIn" />
//         <img src="instagram-icon.png" alt="Instagram" />
//         <img src="youtube-icon.png" alt="YouTube" />
//     </div>

//                     </div>

//                 <div className="footer-column">
//                     <h4>IMPORTANT LINKS</h4>
//                     <p>Webmail</p>
//     <p>NITRis</p>
//     <p>Holidays</p>
//     <p>Academic Calendar</p>
//     <p>Academic TimeTable</p>
//     <p>Admission Advt. & Notices</p>
//     <p>Career</p>
//     <p>Tenders</p>
//     <p>Guest House</p>
//     <p>Central Research Facility</p>
//     <p>RTI</p>
//                 </div>

//                 <div className="footer-column-other-links">
//                     <h4>  OTHER LINKS</h4>
//                     <p>NIRF</p>
//     <p>NBA</p>
//     <p>FTBI</p>
//     <p>NAD Cell</p>
//     <p>Unnat Bharat Abhiyan</p>
//     <p>Internal Complaint Committee</p>
//     <p>Institute Counselling Service</p>
//     <p>Anti-Ragging</p>
//     <p>GATI</p>
//     <p>BIS Dashboard</p>
//                 </div>

//                   <div className="footer-column">
//                     <div className="social-media-grid">
//                         <img src="our-vision.jpg" alt="Facebook" className="social-media-icon" />
//                         <img src="img1.jpg" alt="Twitter" className="social-media-icon" />
//                         <img src="img2.jpg" alt="LinkedIn" className="social-media-icon" />
//                         <img src="img3.jpg" alt="Instagram" className="social-media-icon" />
//                         <img src="img4.jpg" alt="YouTube" className="social-media-icon" />
//                         <img src="imag5.jpg" alt="GitHub" className="social-media-icon" />

//                         <img src="img6.jpg" alt="Instagram" className="social-media-icon" />
//                         <img src="img7.jpg" alt="YouTube" className="social-media-icon" />
//                         <img src="our-vision.jpg" alt="GitHub" className="social-media-icon" />
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
// }

// export default Footer;

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../footer.css'; // Make sure to create this CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column-logo">
                    <div className="footer-logo">
                        <img src="NAD-Logo.png" alt="Farrmi Logo" />
                    </div>
                    <p>National Institute of Technology Rourkela, Odisha, India, 769008</p>
                    <p>Email: contact@nitrr.ac.in</p>
                    <p>Phone: +91 123 456 7890</p>
     
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
                    <p>Webmail</p>
                    <p>NITRis</p>
                    <p>Holidays</p>
                    <p>Academic Calendar</p>
                    <p>Academic TimeTable</p>
                    <p>Admission Advt. & Notices</p>
                    <p>Career</p>
                    <p>Tenders</p>
                    <p>Guest House</p>
                    <p>Central Research Facility</p>
                    <p>RTI</p>
                </div>

                <div className="footer-column-other-links">
                    <h4>OTHER LINKS</h4>
                    <p>NIRF</p>
                    <p>NBA</p>
                    <p>FTBI</p>
                    <p>NAD Cell</p>
                    <p>Unnat Bharat Abhiyan</p>
                    <p>Internal Complaint Committee</p>
                    <p>Institute Counselling Service</p>
                    <p>Anti-Ragging</p>
                    <p>GATI</p>
                    <p>BIS Dashboard</p>
                </div>

                <div className="footer-column">
                    <div className="social-media-grid">
                        <img src="our-vision.jpg" alt="Our Vision" className="social-media-icon" />
                        <img src="img1.jpg" alt="Event Image 1" className="social-media-icon" />
                        <img src="img2.jpg" alt="Event Image 2" className="social-media-icon" />
                        <img src="img3.jpg" alt="Event Image 3" className="social-media-icon" />
                        <img src="img4.jpg" alt="Event Image 4" className="social-media-icon" />
                        <img src="imag5.jpg" alt="Event Image 5" className="social-media-icon" />
                        <img src="img6.jpg" alt="Event Image 6" className="social-media-icon" />
                        <img src="img7.jpg" alt="Event Image 7" className="social-media-icon" />
                        <img src="our-vision.jpg" alt="Our Vision" className="social-media-icon" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p>Copyright © 2024 National Institute of Technology Rourkela. All Rights Reserved.</p>
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
}

export default Footer;

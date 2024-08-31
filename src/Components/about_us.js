import React from 'react';
import '../aboutUs.css'; // Ensure the path is correct

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="full-width-text">
                <h3 className="sub-heading">About National Academy of Design</h3>
                <p>
                    {/* NIT Rourkela is one of the premier national level institutions for technical education in the country and is funded by the Government of India. The Government of India has elevated the Regional Engineering College, Rourkela to a university under the name of National Institute of Technology, Rourkela.

                    The main objective of the Institute is to produce quality Engineers and Scientists in Graduate and Post-Graduate levels in various branches of Engineering and Science. The Institute is managed by the Board of Governors of National Institute of Technology (Rourkela) Society. */}

National Academy of Design is a leading national institution dedicated to the advancement of design education in the country. Supported by the Government of India, the Academy aims to cultivate excellence in the fields of design and the arts. Originally established as a Regional Design College, it has now evolved into a prestigious university under the name National Academy of Design. The primary goal of the Academy is to nurture top-tier designers and artists at both undergraduate and postgraduate levels across various design disciplines. The institution is governed by the Board of Governors of the National Academy of Design Society.

                </p>
            </section>
            <section className="vision-mission">
                <div className="vision-column">
                    <h2>Our Vision</h2>
                    <p>
                        To become an internationally acclaimed institution of higher learning that will serve as a source of knowledge and expertise for the society and be a preferred destination for undergraduate and graduate studies.
                    </p>
                </div>
                <div className="mission-column">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide a comprehensive and challenging education that prepares students for a successful career in their chosen field. We strive to foster an environment of intellectual curiosity and personal growth.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;

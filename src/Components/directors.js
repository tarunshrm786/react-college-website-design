import React from 'react';
import '../director.css'; // Ensure the CSS file is correctly linked

const Director = () => {
    return (
        <div className="director">
            <section className="director-message">
                <div className="message-text">
                    <h2>Message from the Director</h2>
                    <hr />
                    <p>
                        {/* It is a privilege for me to have assumed the position of Director, NIT Rourkela, on 18th February 2022. NIT Rourkela has a rich legacy of sixty dedicated years of service to the nation and is the pride of Odisha. Excellence in teaching and high-quality research are the pillars on which the Institute is built. The Institute aims to foster 21st-century skills and competencies supported by defined learning frameworks and industrial internships for the students as part of Industry 4.0. With these skillsets, our students are future-ready to make an impact at work in general and society in particular. Learn More
                     */}
It is an honor for me to have taken on the role of Director at the National Academy of Design. The Academy boasts a proud history of excellence in design education and is a beacon of creativity and innovation in the country. Building on decades of dedicated service to the nation, the Academy is committed to nurturing design thinking and fostering creative talent. Our focus on cutting-edge teaching methods and high-quality research ensures that we equip our students with the essential skills and competencies required for the 21st century. Through well-defined learning frameworks and industry partnerships, we prepare our students to be leaders in the design world, ready to make significant contributions to both their professions and society at large.

                    </p>
                    <p>
                        <br />
                        Prof. K. Umamaheshwar Rao
                        
                    </p>
                    <hr />
                </div>
                <div className="director-photo">
                    <img src="director-2.jpg" alt="Director" />
                </div>
            </section>
        </div>
    );
}

export default Director;

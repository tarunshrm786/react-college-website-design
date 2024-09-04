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
NAD College of Design & Business has been disseminating quality Design Education with an Individual Centric Focus for 22 years now, and it continues to do so! NAD’s mandate is to nurture a culture of design and social entrepreneurship, with a holistic, multi-disciplinary approach; and to create design professionals who can keep reinventing themselves and position design more strategically as an integrator of aesthetics, business, technologies and sociological concerns.
                    </p>
                    <p>
                        <br />
                        Sumit Kumar  <br />
                        Founder & Director   <br />
                        NAD College of Design & Business
                        
                    </p>
                    <hr />
                </div>
                <div className="director-photo">
                    <img src="founding-member.jpeg" alt="Director" />
                </div>
            </section>
        </div>
    );
}

export default Director;

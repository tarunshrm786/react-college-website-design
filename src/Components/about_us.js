import React from 'react';
import '../aboutUs.css'; 

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="full-width-text">
                <h3 className="sub-heading" style={{textAlign: 'center'}}>About National Academy of Design</h3>
                <p>

National Academy of Design is a leading national institution dedicated to the advancement of design education in the country. Supported by the Government of India, the Academy aims to cultivate excellence in the fields of design and the arts. Originally established as a Regional Design College, it has now evolved into a prestigious university under the name National Academy of Design. The primary goal of the Academy is to nurture top-tier designers and artists at both undergraduate and postgraduate levels across various design disciplines. The institution is governed by the Board of Governors of the National Academy of Design Society.

                </p>
            </section>
            <section className="vision-mission">
                <div className="vision-column">
                    <h2>Our Vision</h2>
                    <p>
                    To engage the natural potential of an individual through Design Education enabled by positive thought and action, and empowering them to evolve, through the spirit of wholistic co-creation.
                    </p>
                </div>
                <div className="mission-column">
                    <h2>Our Mission</h2>
                    <p>
                    Be an internationally acknowledged design institution built on an impeccable foundation of research and learning based on a broad spectrum of disciplines. To revive and renew the essence of time-honoured indigenous, knowledge, and practices, and ensure that their value and benefits are fully accessible to deal with problems faced by the present-day world. To collaborate with advanced Indian and foreign educational institutions, to develop, enhance and maintain global benchmarks in the quality and process of dissemination of knowledge and skills in Design. To enrol the youth of pluralistic identities and cultural contexts, and channelise and nurture their creative energies through inspirational learning experiences. Empower youth with a usable range of skill sets suited for industry and the emerging needs of society, which prepares them to be sensitive professionals and leaders, with the ability to transform the future. Establish a 'self-definition for women' by empowering and enabling them through education, towards becoming professionals and entrepreneurs, creating their own business or social enterprise and most importantly, in helping them form and nurture the thought processes of generations to come.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;

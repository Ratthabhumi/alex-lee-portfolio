import React from 'react';

const About = () => {
  return (
    <main className="container">
      <section className="about-section">
        <h2>Creative Visionary with Precision</h2>
        <div className="about-content">
          <div className="bio">
            <p className="lead-text">
              With over a decade of experience shaping visual identities, 
              I specialize in translating complex ideas into clean, 
              impactful designs that resonate across mediums.
            </p>
            <div className="details-grid">
              <div className="detail-item">
                <h4>Approach</h4>
                <ul>
                  <li>User-centered design philosophy</li>
                  <li>Cross-platform consistency</li>
                  <li>Sustainable design practices</li>
                </ul>
              </div>
              <div className="detail-item">
                <h4>Recognition</h4>
                <ul>
                  <li>Awwwards Site of the Day (2023)</li>
                  <li>Communication Arts Shortlist (2022)</li>
                  <li>Adobe Design Achievement Awards (2021)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="skills">
            <h3>Core Capabilities</h3>
            <div className="skill-chart">
              <div className="skill-category">
                <h4>Visual Design</h4>
                <p>Brand Systems, Art Direction, Typography</p>
              </div>
              <div className="skill-category">
                <h4>Digital Expertise</h4>
                <p>UI/UX, Motion Graphics, Prototyping</p>
              </div>
              <div className="skill-category">
                <h4>Strategy</h4>
                <p>Creative Direction, Design Thinking, Workshops</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
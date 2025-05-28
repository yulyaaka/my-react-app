export const InfoSection: React.FC = () => {
  return (
    <section className="content_section info">
      <div className="container">
        <div className="block block-1">
                <img src="./src/assets/images/image4.png" alt="Profile" width="100" height="100" />
                <h2>Creating an Online Presence is Hard. Jobly Makes it Easy for Recruiters to See you</h2>
                <p>Zhao Cui Founder at Jobly.co</p>
              </div>
          
              <h2 style= {{fontSize: '47px'}}> Everything you want to know in one place.</h2>
              <div className="block block-2">
                <div className="block block-3">
                <div className="content-wrapper">
                  <div className="content-text">
                    <img src="./src/assets/images/image5.png" alt="Profile" width="60" height="60" />
                    <h2>Pristia Candra</h2>
                    <p>Senior Product Designer</p>
                    <p style={{fontSize: '10px'}}>Los Angeles,USA • Fulltime Freelancer.</p>
                  </div>
                <div className="button-container">
                    <button className="custom-button">Figma</button>
                    <button className="custom-button">UI Design</button>
                    <button className="custom-button">UX Design</button>
                </div>
                </div>
                <div className="about">
                  <h3>About Me</h3>
                  <p style= {{ color: '#999797'}}>
                     Hi, I'm a final year student completing a bachelor's in Information Technology in QUT, with experience. 
                      We are the company behind the wildly successful DIY channel 5-Minute Crafts, the inspirational and 
                      creative channel Bright Side.
                  </p>
                </div>
             
                <div className="portfolio">
                <h3>Portfolio</h3>
                <div className="image-row">
                    <img src="./src/assets/images/Frame 427320285.png" alt="" className="portfolio-image" />
                    <img src="./src/assets/images/Frame 427320288.png" alt="" className="portfolio-image" />
                    <img src="./src/assets/images/Frame 427320289.png" alt="" className="portfolio-image" />
                    
                </div>
                <div className="content-window">
                <form>
                    <div className="form-group">
                        <label htmlFor="email"><i className="fas fa-envelope"></i>Email:</label>
                        <input type="email" id="email" name="email" placeholder="aaaaaaa@gmail.com" required/>
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="phone"><i className="fas fa-phone"></i>Phone Number:</label>
                        <input type="tel" id="phone" name="phone" placeholder="123456" required/>
                    </div>
            
                    <div className="button-group">
                        <button type="submit" className="primary-button">Download Resume</button>
                        <button type="reset" className="secondary-button">Message</button>
                    </div>
                </form>
                </div>
            </div>

            <div className="work">
              <h3>Work Experience</h3>
            </div>
            </div>
            </div>
      </div>
    </section>
  );
};
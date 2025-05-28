export const CallToAction: React.FC = () => {
  return (
    <section className="content_section place">
    <div className="section">
        <div className="left">
            <img src="./src/assets/images/image2.png" alt="Team working" />
        </div>
        <div className="right">
            <h1>Connect With Recruiter</h1>
            <p>Get instant access to a curated pool of top creative & tech talent actively seeking their next role. Find highly qualified job!</p>
        </div>
    </div>
  
    <div className="section dark-section">
        <div className="left">
            <h2>Set up your profile.Let jobs find you.</h2>
            <a href="#" className="button">Join Now</a>
        </div>
        <div className="right">
            <img src="./src/assets/images/image3.png" alt="People working" />
        </div>
    </div> 
    </section>
 );
};
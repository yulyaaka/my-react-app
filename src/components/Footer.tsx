import React from "react";
import '/src/assets/styles/footer.css'
import '/src/assets/styles/header.css'
import '/src/assets/styles/main.css'

export const Footer: React.FC=()=>{
    return (
    <footer className="page_footer footer">
    <h2>Jobly.co</h2>
    <p>We support a pool of diverse young creatives and engineers.</p>
    <p className="copyright"> © 2023 Jobly.co Copyright and All right reserved.</p>
    <p className="legal">Terms and Conditions Privacy Policy</p>
    </footer>
    );
};
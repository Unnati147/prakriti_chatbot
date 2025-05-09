import "../Styles/Footer.css";
import Logo from "../Assets/logo (2).png";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              <a href="#">
                <img src={Logo} width={200} alt="Website's Logo" />
              </a>
            </p>
            <p className="ft-description">
              Your holistic journey to Ayurvedic well-being. Harness the wisdom
              of Ayurveda with our chatbot, designed to personalize your path to
              health. Discover your Prakriti, balance your doshas, and embrace a
              harmonious life.
            </p>
          </div>
        </div>

        <div className="ft-copyright">
          <p>© 2024-2025 AyurBuddy. All rights reserved.</p>
        </div>
        <div className="ft-developlist flex flex-row justify-center items-center gap-1">
          Developed by Unnati Mittal {" "}
          and Kanchan {" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;

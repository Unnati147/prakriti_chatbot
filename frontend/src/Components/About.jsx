import AIayurveda from "../Assets/aiayurimg.jpg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={AIayurveda} alt="Ayurveda with AI" className="about-image1" />
      </div>
      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          {
            "Welcome to AyurInsights, where ancient Ayurvedic wisdom meets cutting-edge technology. We are on a mission to empower individuals with deep, personalized insights into their health, wellness, and inner constitution. AyurInsights was born from a powerful idea: What if we could merge the timeless principles of Ayurveda with the accuracy and adaptability of modern machine learning? Through this fusion, we aim to help people reconnect with their natural balance and make informed lifestyle choices rooted in tradition and powered by innovation."
          }
        </p>
        <h4 className="about-text-title">Your Solutions</h4>
        <SolutionStep
          title="Click On Chat Bot"
          description="Locate the Chat with our Ayurvedic Expert button on the homepage and click it."
        />
        <SolutionStep
          title="Start the Conversation"
          description="Once the chat interface opens, initiate a conversation with our AI-powered chatbot by responding to its greetings."
        />
        <SolutionStep
          title="Answer Questions"
          description="The chatbot will ask you a series of questions related to your health, lifestyle, and preferences. Provide honest and detailed responses."
        />
        <SolutionStep
          title="Prakriti Assessment"
          description="After analyzing your responses, the chatbot will determine your unique Ayurvedic Prakriti type (Vata, Pitta, or Kapha)."
        />
        <SolutionStep
          title="Receive Insights"
          description="You'll receive personalized insights and diet recommendations to help you achieve balance and well-being based on your Prakriti."
        />
      </div>
    </div>
  );
}

export default About;

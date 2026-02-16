import React, { useState, useRef, useEffect } from 'react';

const VoiceComponent = ({ messageText, showVoice = true }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = (text) => {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-IN';  // Indian English
      utterance.rate = 0.9;      // Clear speed
      utterance.pitch = 1.0;
      utterance.volume = 0.9;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  // Auto speak new questions
  // Detect whether message should be spoken (questions + result)
const shouldSpeak = (text) => {
  const keywords = [
    'your', 'do you', 'skin', 'hair', 'appetite', 'sleep',
    'complexion', 'texture', 'what', 'which', 'how is',
    'prakriti', 'vata', 'pitta', 'kapha', 'dosha', 'result'
  ];
  return keywords.some(keyword => text.toLowerCase().includes(keyword));
};

// Auto speak questions and result
useEffect(() => {
  if (messageText && shouldSpeak(messageText)) {
    const timer = setTimeout(() => speakText(messageText), 800);
    return () => clearTimeout(timer);
  }
}, [messageText]);


  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
    } else {
      speakText(messageText);
    }
  };

 if (!showVoice || !messageText ) return null;

  return (
    <div className="voice-controls mt-2 flex items-center gap-2 p-2">
      <button 
        className={`voice-btn ${isSpeaking ? 'speaking' : ''}`}
        onClick={toggleSpeech}
        title="🔊 सुनें प्रश्न"
      >
        {isSpeaking ? '⏹️' : '🔊'}
      </button>
      {isSpeaking && (
        <span className="speaking-indicator bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
          Speaking
        </span>
      )}
    </div>
  );
};

export default VoiceComponent;

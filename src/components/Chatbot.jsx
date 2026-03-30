import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { intents } from '../data/chatbotKnowledge';

// Safe data imports with fallbacks
let boardData = [];
let managementData = [];
let contactInfo = [];
let workingHours = [];

try {
  const board = require('../data/boardData');
  boardData = board.boardData || board.default || [];
} catch (e) { /* ignore */ }

try {
  const mgmt = require('../data/managementData');
  managementData = mgmt.managementData || mgmt.default || [];
} catch (e) { /* ignore */ }

try {
  const contact = require('../data/contactData');
  contactInfo = contact.contactInfo || contact.default || [];
  workingHours = contact.workingHours || [];
} catch (e) { /* ignore */ }

// FAQ chips
const faqChips = [
  { label: "🏦 What accounts do you offer?", query: "What types of accounts do you have?" },
  { label: "📱 How to download mobile app?", query: "How do I download and set up the Gadaa Bank mobile app?" },
  { label: "🕒 Branch opening hours", query: "What are branch opening hours?" },
  { label: "💰 Loan products", query: "What loan products do you offer?" },
  { label: "📞 Speak to a human", query: "Can I speak to a human agent?" }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm Gadaa Bot 👋. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showFaqChips, setShowFaqChips] = useState(false);
  const messagesEndRef = useRef(null);
  const fallbackCountRef = useRef(0);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { type: 'user', text }]);
  };

  const addBotMessage = (text, link = null) => {
    setMessages(prev => [...prev, { type: 'bot', text, link }]);
  };

  // Clean user input
  const cleanInput = (input) => {
    let cleaned = input.replace(/[^\w\s']/g, ' ');
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    return cleaned.toLowerCase();
  };

  // Match intent using keywords
  const matchIntent = (cleanedMsg) => {
    for (const intent of intents) {
      for (const keyword of intent.keywords) {
        if (cleanedMsg.includes(keyword.toLowerCase())) {
          // Prepare dynamic arguments for the response function
          const hotline = contactInfo.find(i => i.title === 'Hotline')?.details || '641';
          const email = contactInfo.find(i => i.title === 'Email')?.details || 'info@gadaabank.com.et';
          
          // Some responses need boardData, managementData, etc.
          let result;
          switch (intent.id) {
            case 'password_reset':
              result = intent.response(hotline);
              break;
            case 'branch_hours':
              result = intent.response(workingHours);
              break;
            case 'speak_to_human':
              result = intent.response(hotline, email);
              break;
            case 'contact':
              result = intent.response(hotline, email);
              break;
            case 'board':
              result = intent.response(boardData);
              break;
            case 'management':
              result = intent.response(managementData);
              break;
            default:
              result = intent.response();
          }
          return result;
        }
      }
    }
    return null;
  };

  const getBotResponse = (message) => {
    const rawMsg = message.toLowerCase().trim();
    const cleanedMsg = cleanInput(rawMsg);
    
    const matched = matchIntent(cleanedMsg);
    if (matched) return matched;
    
    // Fallback
    return { text: "I'm not sure I understand your question." };
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    addUserMessage(userMsg);
    setInput('');
    setShowFaqChips(false);
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(userMsg);
      addBotMessage(response.text, response.link);
      setIsTyping(false);

      if (response.text === "I'm not sure I understand your question.") {
        fallbackCountRef.current += 1;
        if (fallbackCountRef.current === 3) {
          const hotline = contactInfo.find(i => i.title === 'Hotline')?.details || '641';
          const email = contactInfo.find(i => i.title === 'Email')?.details || 'info@gadaabank.com.et';
          addBotMessage(`I'm having trouble understanding. Please call our support team at ${hotline} or email ${email} for assistance. We're happy to help!`);
        }
      } else {
        fallbackCountRef.current = 0;
      }

      setShowFaqChips(response.text === "I'm not sure I understand your question.");
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleChipClick = (query) => {
    setInput(query);
    handleSend();
  };

  return (
    // JSX unchanged from your previous version (the UI is identical)
    // ... (the entire return section is the same as before)
    // I'll include it here for completeness, but you can keep your existing UI.
    <>
      <div className="fixed bottom-6 left-6 z-50 group">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all focus:outline-none"
        >
          {isOpen ? (
            <FaTimes className="text-white text-xl" />
          ) : (
            <>
              <FaRobot className="text-white text-xl" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
            </>
          )}
        </motion.button>
        <div className="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm py-1 px-2 rounded whitespace-nowrap pointer-events-none">
          Chat with Gadaa Bot
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 w-80 sm:w-96 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200"
          >
            <div className="bg-gradient-to-r from-red-600 to-black p-3 text-white flex items-center">
              <FaRobot className="mr-2" />
              <span className="font-semibold">Gadaa Bot</span>
              <span className="ml-2 text-xs bg-green-500 px-2 py-0.5 rounded-full">Online</span>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-2 ${
                      msg.type === 'user'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.text}
                    {msg.link && (
                      <div className="mt-1">
                        {msg.link.startsWith('http') ? (
                          <a
                            href={msg.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm underline hover:opacity-80"
                          >
                            Click here
                          </a>
                        ) : (
                          <Link
                            to={msg.link}
                            className="text-sm underline hover:opacity-80"
                            onClick={() => setIsOpen(false)}
                          >
                            Click here
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-2 text-gray-800">
                    <span className="animate-pulse">Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {showFaqChips && (
              <div className="px-3 pb-2 flex flex-wrap gap-2 border-t border-gray-100 pt-2">
                {faqChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChipClick(chip.query)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            )}

            <div className="border-t p-2 flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                onClick={handleSend}
                className="bg-red-600 text-white px-3 rounded-r-lg hover:bg-red-700 transition-colors"
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
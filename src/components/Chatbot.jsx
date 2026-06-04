import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaPaperPlane, FaRobot, FaBolt, FaShieldAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { chatService, findPages } from '../services';

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
    { type: 'bot', text: "Hello! I'm Hayyuu Bot 👋. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showFaqChips, setShowFaqChips] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Removed verbose header highlights to save vertical space

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      // focus the input when the chat opens
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { type: 'user', text }]);
  };

  const addBotMessage = (text, links = null) => {
    setMessages((prev) => [...prev, { type: 'bot', text, links }]);
  };

  const buildHistory = (conversation) => (
    conversation
      .filter((message) => message.type === 'user' || message.type === 'bot')
      .map((message) => ({
        role: message.type === 'bot' ? 'assistant' : 'user',
        content: message.text,
      }))
      .filter((message) => message.content.trim() !== '')
  );

  const sendMessage = async (messageText) => {
    const trimmedMessage = messageText.trim();

    if (!trimmedMessage || isTyping) {
      return;
    }

    const nextConversation = [...messages, { type: 'user', text: trimmedMessage }];

    addUserMessage(trimmedMessage);
    setInput('');
    setShowFaqChips(false);
    setIsTyping(true);

    try {
      const response = await chatService.send({
        message: trimmedMessage,
        history: buildHistory(nextConversation),
      });

      const pages = findPages(trimmedMessage, 4);
      const replyText = response.reply || 'I could not generate a reply right now.';
      addBotMessage(replyText, pages && pages.length ? pages : null);
    } catch (error) {
      addBotMessage('I could not reach the assistant right now. Please try again in a moment.', null);
      setShowFaqChips(true);
    } finally {
      setIsTyping(false);
      // restore focus to input after sending
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const handleSend = () => {
    sendMessage(input);
    inputRef.current?.focus();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
      inputRef.current?.focus();
    }
  };

  const handleChipClick = (query) => {
    sendMessage(query);
  };

  const formatBubbleClasses = (type) => (
    type === 'user'
      ? 'ml-auto rounded-3xl rounded-br-sm bg-gradient-to-br from-red-600 to-red-700 text-white shadow-md shadow-red-600/20'
      : 'mr-auto rounded-3xl rounded-bl-sm bg-slate-100 text-slate-800 border border-slate-200'
  );

  return (
    <>
      <div className="fixed bottom-4 left-4 z-50 group sm:bottom-6 sm:left-6">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-red-600 via-red-600 to-slate-950 shadow-[0_16px_40px_rgba(15,23,42,0.35)] ring-1 ring-black/5 transition-all focus:outline-none sm:h-14 sm:w-14"
        >
          {isOpen ? (
            <FaTimes className="text-white text-lg sm:text-xl" />
          ) : (
            <>
              <FaRobot className="text-white text-lg sm:text-xl" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-green-500 animate-pulse sm:h-4 sm:w-4"></span>
            </>
          )}
        </motion.button>
        <div className="absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950 px-3 py-1 text-sm text-white opacity-0 shadow-lg transition-opacity pointer-events-none group-hover:opacity-100 sm:left-16">
          Chat with Hayyuu Bot
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-24 left-6 z-50 flex h-[34rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/95 shadow-[0_24px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:w-[24rem]"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-red-700 px-4 py-4 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_35%)]" />
              <div className="relative flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <FaRobot className="text-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold leading-tight">Hayyuu Bot</span>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-200 ring-1 ring-emerald-400/25">Online</span>
                  </div>
                  <p className="mt-1 text-sm text-white/70">Ask about accounts, loans, branches, digital services, or contact details.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close chat"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="relative mt-2">
                {/* Header compacted: quick prompts are available below when needed */}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_40%,#fff_100%)] px-3 py-4 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${formatBubbleClasses(msg.type)}`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-2 flex flex-col gap-1">
                        {msg.links.map((p, i) => (
                          <a key={i} href={p.url} target="_blank" rel="noreferrer" className="text-xs text-rose-700 hover:underline">
                            {p.title} — {p.url}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="mr-auto inline-flex items-center gap-2 rounded-3xl rounded-bl-sm border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-700">
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-red-500 [animation-delay:-0.2s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-red-500 [animation-delay:-0.1s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-red-500" />
                    </span>
                    <span className="font-medium">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {showFaqChips && (
              <div className="border-t border-slate-200 bg-white px-3 py-3">
                <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  <FaShieldAlt className="text-red-600" />
                  Quick prompts
                </div>
                <div className="flex flex-wrap gap-2">
                {faqChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChipClick(chip.query)}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                  >
                    {chip.label}
                  </button>
                ))}
                </div>
              </div>
            )}

            <div className="border-t border-slate-200 bg-white p-3">
              <div className="flex items-end gap-2 rounded-[1.35rem] border border-slate-200 bg-slate-50 p-2 shadow-inner shadow-slate-100">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  disabled={isTyping}
                  className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={isTyping || !input.trim()}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-slate-950 text-white shadow-md shadow-red-600/20 transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                  aria-label="Send message"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
              <p className="mt-2 px-1 text-[11px] text-slate-500">
                Press Enter to send. The assistant uses bank info from this site only.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
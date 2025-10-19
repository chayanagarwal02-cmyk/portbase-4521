'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, CornerDownLeft, Loader2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { portfolioAssistant } from '@/ai/flows/ai-portfolio-assistant';
import type { Role } from '@/lib/data';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const quickQuestions: { [key in Role]: string[] } = {
  hr: ['What is your leadership experience?', 'Which certifications do you have?'],
  'data-professional': ['Show me some code samples.', 'What are your top technical skills?'],
  'hiring-manager': ['Can you summarize your key achievements?', 'What projects are most relevant to data analytics?'],
  stalker: ['Tell me about your latest blog post.', 'What are your hobbies?'],
};

export function Chatbot({ role }: { role: Role }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! I'm an AI assistant. How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (query?: string) => {
    const text = query || inputValue;
    if (!text.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const result = await portfolioAssistant({ query: text, visitorType: role });
      setMessages([...newMessages, { sender: 'bot', text: result.answer }]);
    } catch (error) {
      console.error('AI assistant error:', error);
      setMessages([
        ...newMessages,
        { sender: 'bot', text: 'Sorry, I encountered an error. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-8 w-[calc(100%-2rem)] max-w-sm h-[60vh] bg-card/80 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl flex flex-col z-50"
          >
            <header className="p-4 border-b border-white/10 flex justify-between items-center">
              <h3 className="font-semibold text-card-foreground">AI Portfolio Assistant</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </header>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'bot' && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-primary/20'
                        : 'bg-secondary'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                   <Bot className="h-6 w-6 text-primary flex-shrink-0" />
                   <div className="max-w-[80%] p-3 rounded-lg bg-secondary flex items-center">
                     <Loader2 className="h-4 w-4 animate-spin"/>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className='p-4 border-t border-white/10'>
               <div className="flex flex-wrap gap-2 mb-2">
                {quickQuestions[role].map((q) => (
                  <Badge
                    key={q}
                    variant="outline"
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => handleSendMessage(q)}
                  >
                    {q}
                  </Badge>
                ))}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="Ask a question..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  className="bg-secondary"
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        size="icon"
        className="fixed bottom-4 right-4 sm:right-8 w-14 h-14 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(p => !p)}
        aria-label="Toggle AI Assistant"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={isOpen ? 'x' : 'plus'}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Plus className="h-7 w-7" />}
          </motion.div>
        </AnimatePresence>
      </Button>
    </>
  );
}

'use client'
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I create an account?',
    answer: 'Click the Sign In button and use Google login or your credentials to create a secure account instantly.'
  },
  {
    question: 'How can I add a new product?',
    answer: 'After logging in, go to the Dashboard and use the Add Product form. Fill in the details and submit.'
  },
  {
    question: 'Are my personal details safe?',
    answer: 'Yes, we use secure authentication and never share your information with third parties.'
  },
  {
    question: 'How do I view product details?',
    answer: 'Click on any product card or the Details button to see full information, including the seller.'
  },
  {
    question: 'Can I edit or delete my products?',
    answer: 'Currently, you can add products. Editing and deleting features are coming soon!'
  },
];

export default function Faqs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-10 px-2 sm:px-4 bg-gradient-to-br from-blue-950 via-gray-900 to-blue-900 text-blue-200">
      <div className="max-w-2xl sm:max-w-3xl mx-auto rounded-xl shadow-2xl bg-gray-900/80 border border-blue-700/30 p-4 sm:p-8 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-700/20 rounded-full blur-2xl z-0" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500/10 rounded-full blur-2xl z-0" />
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-center text-blue-100 drop-shadow-lg relative z-10">Frequently Asked Questions</h2>
        <ul className="space-y-4 sm:space-y-5 relative z-10">
          {faqs.map((faq, idx) => (
            <li key={idx} className="bg-gradient-to-r from-gray-800 via-gray-900 to-blue-900 rounded-xl border border-blue-700/20 shadow p-4 sm:p-5">
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-semibold text-blue-200 text-base sm:text-lg">{faq.question}</span>
                <span className={`ml-4 transition-transform duration-200 ${open === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`mt-2 sm:mt-3 text-blue-300 text-sm sm:text-base transition-all duration-300 ease-in-out ${open === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                {faq.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

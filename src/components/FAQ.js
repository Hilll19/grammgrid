'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Animasi sederhana dengan framer-motion

const faqData = [
  {
    question: "Mengapa penting untuk belajar bahasa Inggris?",
    answer: "Bahasa Inggris adalah bahasa internasional yang digunakan di berbagai bidang, seperti bisnis, pendidikan, teknologi, dan pariwisata. Menguasai bahasa Inggris membuka peluang lebih besar untuk berkomunikasi secara global dan meningkatkan karier."
  },
  {
    question: "Bagaimana bahasa Inggris bisa membantu dalam karier saya?",
    answer: "Menguasai bahasa Inggris meningkatkan kesempatan kerja, karena banyak perusahaan internasional dan industri global mencari karyawan yang mampu berkomunikasi dalam bahasa ini. Bahasa Inggris juga penting dalam mengikuti perkembangan informasi teknologi dan ilmu pengetahuan."
  },
  {
    question: "Apakah belajar bahasa Inggris sulit?",
    answer: "Belajar bahasa Inggris bisa menjadi tantangan, tetapi dengan metode yang tepat, latihan konsisten, dan materi yang relevan, siapa pun bisa mempelajarinya dengan efektif. Platform kami dirancang untuk membantu mempermudah proses belajar."
  },
  {
    question: "Apakah saya perlu fasih berbahasa Inggris untuk sukses?",
    answer: "Tidak perlu langsung fasih, tapi memiliki kemampuan dasar berbahasa Inggris sangat membantu dalam kehidupan sehari-hari dan karier profesional. Mulailah dari yang dasar dan kembangkan secara bertahap."
  },
  {
    question: "Kenapa harus belajar bahasa Inggris di platform ini?",
    answer: "Platform kami menawarkan materi yang komprehensif, mulai dari dasar hingga mahir, dengan metode belajar yang interaktif. Kami juga menyediakan latihan soal, video, dan kuis yang membantu memperkuat pemahaman."
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk belajar bahasa Inggris hingga fasih?",
    answer: "Waktu berbeda-beda, tetapi dengan belajar rutin, kamu bisa melihat perkembangan dalam beberapa bulan."
  },
  {
    question: "Apakah ada materi pembelajaran khusus untuk persiapan TOEFL dan IELTS?",
    answer: "Ya, kami menyediakan kursus khusus untuk persiapan tes TOEFL dan IELTS."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full h-[100vh] bg-[url('https://images.unsplash.com/photo-1581114638521-39632d61b79c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat shadow-lg">
      <div className="bg-white bg-opacity-90 w-full max-w-4xl mx-auto p-8 rounded-lg my-10">
        <h2 className="text-4xl font-extrabold text-center text-black mb-6">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center mb-8">Pertanyaan umum seputar pentingnya belajar bahasa Inggris</p>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b-2 border-gray-200">
              <button
                className="w-full text-left flex justify-between items-center py-4 px-2 text-lg font-medium text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className="text-gray-500">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 px-2 pb-4">{item.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

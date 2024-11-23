import React from "react";
// import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import "../app/globals.css";

export default function BasicEnglish() {
  return (
    <main className="flex-col justify-between bg-gray-100">
      <Navbar />
      <section className="bg-[url(https://images.unsplash.com/photo-1569585723140-efb9daaa18f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] opacity-95 bg-cover bg-center bg-no-repeat relative min-h-[920px] flex w-full">
        <div class="bg-opacity-25 flex items-end ">
          <div class="bg-white m-20 w-[700px] h-[400px] rounded-lg shadow">
            <span class="flex ml-14 mt-6 text-black text-3xl font-helvetica font-bold">
              DASAR DASAR BAHASA INGGRIS
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          {/* <ArrowLeft className="w-4 h-4 mr-2" /> */}
          Back to Home
        </Link>

        <h1 className="text-4xl text-black font-bold mb-8">
          Bahasa Inggris Umum Dasar
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Level Pemula</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Pengenalan Grammar Dasar
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Vocabulary Sehari-hari
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Simple Present Tense
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Level Menengah</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Past Tense & Future Tense
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Basic Conversation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Reading Comprehension
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

'use client'

import Link from "next/link";
import React from "react";

function Feature() {

  return (
    <div>
      <section className="bg-[url(https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] opacity-95 bg-cover bg-center bg-no-repeat relative min-h-[700px] py-24 w-full overflow-x-hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-screen">
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col w-full">
            <div className="text-center w-full max-w-2xl">
              <h2 className="text-4xl font-bold text-black leading-[3.25rem] mb-4">
                CATEGORI BELAJAR
              </h2>
              <p className="text-lg font-normal text-black">
                Pilihan belajar dari pemula sampai ahli dalam bahasa inggris
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-x-5 gap-y-8 w-full">
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 cursor-pointer transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#41382e]">
            <Link href="/BasicEnglish">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                      stroke="#4F46E5"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                  Bahasa Inggris Umum Dasar
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  Kuasai pondasi Bahasa Inggris dengan langkah mudah dan seru,
                  siap untuk menjelajahi dunia internasional!.
                </p>
            </Link>
              </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#41382e]">
              <Link href="/Listening">
              
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Listening ( Mendengarkan )
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Tajamkan kemampuan mendengar Anda, pahami setiap aksen dan gaya
                bicara dalam Bahasa Inggris dengan lebih percaya diri.
              </p>
              </Link>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#41382e]">
              <Link href="/Speaking">
              
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.4165 7.77185L14.9998 4.16669L6.58313 7.77185M14.9998 25.8334V16.5278M25.8332 19.7222V10.4167C25.8332 9.20198 25.8332 8.59464 25.6342 8.09598C25.4617 7.66381 25.1868 7.28878 24.8334 6.99909C24.4345 6.67034 23.8305 6.52371 22.6226 6.23044L16.0443 4.66656C15.5876 4.55621 15.3593 4.50103 15.1246 4.48302C14.916 4.46668 14.708 4.46668 14.4993 4.48302C14.2646 4.50103 14.0364 4.55621 13.5797 4.66656L6.99986 6.23044C5.7919 6.52371 5.18792 6.67034 4.78902 6.99909C4.43563 7.28878 4.16067 7.66381 3.98818 8.09598C3.78918 8.59464 3.78918 9.20198 3.78918 10.4167V19.7222C3.78918 20.9369 3.78918 21.5442 3.98818 22.0429C4.16067 22.475 4.43563 22.8501 4.78902 23.1398C5.18792 23.4685 5.7919 23.6152 6.99986 23.9084L13.5782 25.4723C14.035 25.5827 14.2633 25.6378 14.4979 25.6558C14.7065 25.6722 14.9145 25.6722 15.1231 25.6558C15.3578 25.6378 15.5861 25.5827 16.0428 25.4723L22.6226 23.9084C23.8305 23.6152 24.4345 23.4685 24.8334 23.1398C25.1868 22.8501 25.4617 22.475 25.6342 22.0429C25.8332 21.5442 25.8332 20.9369 25.8332 19.7222Z"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              </Link>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Speaking ( Berbicara )
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Bicara tanpa ragu! Tingkatkan kepercayaan diri dan lancarkan
                kemampuan berbicara Bahasa Inggris Anda.
              </p>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#41382e]">
              <Link href="/Reading">
              
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.4165 7.77185L14.9998 4.16669L6.58313 7.77185M14.9998 25.8334V16.5278M25.8332 19.7222V10.4167C25.8332 9.20198 25.8332 8.59464 25.6342 8.09598C25.4617 7.66381 25.1868 7.28878 24.8334 6.99909C24.4345 6.67034 23.8305 6.52371 22.6226 6.23044L16.0443 4.66656C15.5876 4.55621 15.3593 4.50103 15.1246 4.48302C14.916 4.46668 14.708 4.46668 14.4993 4.48302C14.2646 4.50103 14.0364 4.55621 13.5797 4.66656L6.99986 6.23044C5.7919 6.52371 5.18792 6.67034 4.78902 6.99909C4.43563 7.28878 4.16067 7.66381 3.98818 8.09598C3.78918 8.59464 3.78918 9.20198 3.78918 10.4167V19.7222C3.78918 20.9369 3.78918 21.5442 3.98818 22.0429C4.16067 22.475 4.43563 22.8501 4.78902 23.1398C5.18792 23.4685 5.7919 23.6152 6.99986 23.9084L13.5782 25.4723C14.035 25.5827 14.2633 25.6378 14.4979 25.6558C14.7065 25.6722 14.9145 25.6722 15.1231 25.6558C15.3578 25.6378 15.5861 25.5827 16.0428 25.4723L22.6226 23.9084C23.8305 23.6152 24.4345 23.4685 24.8334 23.1398C25.1868 22.8501 25.4617 22.475 25.6342 22.0429C25.8332 21.5442 25.8332 20.9369 25.8332 19.7222Z"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              </Link>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Reading ( Membaca )
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Temukan dunia baru di balik setiap halaman! Rasakan serunya
                membaca dalam Bahasa Inggris dengan mudah dan menyenangkan.
              </p>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#41382e]">
              <Link href="Writing">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.4165 7.77185L14.9998 4.16669L6.58313 7.77185M14.9998 25.8334V16.5278M25.8332 19.7222V10.4167C25.8332 9.20198 25.8332 8.59464 25.6342 8.09598C25.4617 7.66381 25.1868 7.28878 24.8334 6.99909C24.4345 6.67034 23.8305 6.52371 22.6226 6.23044L16.0443 4.66656C15.5876 4.55621 15.3593 4.50103 15.1246 4.48302C14.916 4.46668 14.708 4.46668 14.4993 4.48302C14.2646 4.50103 14.0364 4.55621 13.5797 4.66656L6.99986 6.23044C5.7919 6.52371 5.18792 6.67034 4.78902 6.99909C4.43563 7.28878 4.16067 7.66381 3.98818 8.09598C3.78918 8.59464 3.78918 9.20198 3.78918 10.4167V19.7222C3.78918 20.9369 3.78918 21.5442 3.98818 22.0429C4.16067 22.475 4.43563 22.8501 4.78902 23.1398C5.18792 23.4685 5.7919 23.6152 6.99986 23.9084L13.5782 25.4723C14.035 25.5827 14.2633 25.6378 14.4979 25.6558C14.7065 25.6722 14.9145 25.6722 15.1231 25.6558C15.3578 25.6378 15.5861 25.5827 16.0428 25.4723L22.6226 23.9084C23.8305 23.6152 24.4345 23.4685 24.8334 23.1398C25.1868 22.8501 25.4617 22.475 25.6342 22.0429C25.8332 21.5442 25.8332 20.9369 25.8332 19.7222Z"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              </Link>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Writing ( Menulis )
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Ciptakan tulisan yang memukau! Latih keterampilan menulis Anda
                hingga menghasilkan karya yang jelas dan kreatif
              </p>
            </div>
            <div className="flex justify-center mt-8 ml-6">
              <button className="bg-[#3A312A] text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-[#504538] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;

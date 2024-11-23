// components/AboutUs.js
import GrammGridAbout from '@/img/GrammarGridAbout';

export default function AboutUs() {
    return (
        <section id="about-us" className="bg-white py-16 text-black w-full min-h-screen">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <GrammGridAbout/>
                </div>
                <div className="w-full md:w-1/2 md:pl-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Tentang Kita
                    </h2>
                    <p className="text-lg mb-4">
                    Di GrammGrid, kami percaya pada kekuatan teknologi dan inovasi untuk mengubah pendidikan. Misi kami adalah membuat pembelajaran bahasa Inggris dapat diakses oleh semua orang, dari pemula hingga pelajar tingkat lanjut.
                    </p>
                    <a href="#more" className="inline-block bg-[#3A312A] text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-[#504538] transition">
                        More
                    </a>
                </div>
            </div>
        </section>
    );
}

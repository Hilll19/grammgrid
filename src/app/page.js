import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import AboutUs from "@/components/AbouUs";
import ArticelNews from "@/components/ArticelNews";
import Testimoni from "@/components/Testimoni";
import FAQ from "@/components/FAQ";
import Scholarship from "@/components/Scholarship";
import Sertificate from "@/components/Sertificate";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <AboutUs/>
      <Feature/>
      <Sertificate/>
      <Scholarship/>
      <ArticelNews/>
      <FAQ/>
      <Testimoni/>
      

      <section id="lessons" className="bg-gray-200 py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Example Lesson Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Lesson 1: Greetings</h3>
              <p className="text-gray-700 mb-6">Learn how to greet people and introduce yourself.</p>
              <a href="#" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">Start Lesson</a>
            </div>
            {/* Repeat Lesson Card for other lessons */}
          </div>
        </div>
      </section>

      <section id="practice" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Practice Exercises</h2>
          <p className="text-xl mb-8 text-gray-700">Test your knowledge with interactive practice exercises.</p>
          <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300">Start Practicing</a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Learn English. All rights reserved.</p>
          <p className="mt-4">Follow us on 
            <a href="#" className="text-blue-400 hover:underline ml-1">Twitter</a>, 
            <a href="#" className="text-blue-400 hover:underline ml-1">Facebook</a>, 
            <a href="#" className="text-blue-400 hover:underline ml-1">Instagram</a>
          </p>
        </div>
      </footer>
    </main>
  );
}

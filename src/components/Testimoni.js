import React from "react";

const TestimonialCard = ({ name, role, text }) => {
  return (
    <div className="bg-white shadow-lg transform transition-all hover:scale-105 duration-300 p-8 rounded-xl border border-gray-200">
      <p className="text-gray-600 italic mb-6">&quot;{text}&quot;</p>
      <div className="flex items-center">
        {/* Optionally, you can add a placeholder for an avatar or icon */}
        <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white mr-4">
          {/* Initials of the name */}
          {name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <span className="font-semibold text-lg text-gray-900">{name}</span>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimoni = () => {
  return (
    <section className="pb-12 mx-auto md:pb-20 bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-4 text-left md:py-8">
        <h4 className="text-4xl font-bold text-gray-900 tracking-wide uppercase text-center">
          What our users say
        </h4>
        <p className="mt-2 tracking-tight text-gray-700 text-xl md:text-2xl text-center">
          Hear it from our happy customers!
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <TestimonialCard
          name="John Doe"
          role="Customer"
          text="This product has changed my life for the better. I highly recommend it!"
        />
        <TestimonialCard
          name="Jane Smith"
          role="User"
          text="Amazing experience! The customer service was exceptional and the product exceeded my expectations."
        />
        <TestimonialCard
          name="Alice Brown"
          role="Customer"
          text="High quality and affordable! I will definitely be back for more."
        />
        <TestimonialCard
          name="David Lee"
          role="Customer"
          text="The design and functionality are top-notch. Love it!"
        />
        <TestimonialCard
          name="Chris Wong"
          role="User"
          text="Superb! The ease of use and customer service blew me away."
        />
        <TestimonialCard
          name="Emily White"
          role="Customer"
          text="An all-around great product. Worth every penny!"
        />
      </div>
    </section>
  );
};

export default Testimoni;

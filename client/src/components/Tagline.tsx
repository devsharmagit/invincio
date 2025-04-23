import React from 'react'

const Tagline = () => {
  return (
    <section className="py-20 bg-[#fff]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Patriotic Quote */}
          <div className="mb-12">
            <p className="text-2xl md:text-3xl italic text-[#2d4b41] font-medium leading-relaxed">
              "The future of India lies in its youth. The strength of the nation lies in the character of its people."
            </p>
            <p className="text-base text-gray-600 mt-3">- Dr. APJ Abdul Kalam</p>
          </div>

          {/* Goal Statement */}
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-[#718979] mb-3">Our Goal Is</p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
              To shape the leaders of tomorrow by instilling discipline, courage, and integrity in every cadet.
            </p>
          </div>

          {/* Leader's Tagline */}
          <div className="mt-12">
            <p className="text-3xl md:text-4xl font-bold text-[#2d4b41] leading-tight">
              "Leadership is not about being in charge. It's about taking care of those in your charge."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tagline
const Description = () => {
    return (
        <div className="herosection max-w-7xl mx-auto px-4 py-8">
            <div className="space-y-8">
                <section>
                    <h2 className="text-3xl font-bold mb-6">Career Counselling - How we make a difference?</h2>
                    
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Comprehensive Psychometric Assessments</h3>
                            <p className="text-gray-700">
                                Every child/individual is unique. Making the right career choice, finding your sweet spot is key to a successful and fulfilling career you love and enjoy long term. To help you get there, we leverage psychometric assessments designed by renowned Psychologist and Psychotherapist, Dr Chinu Agrawal, PhD. We carry out an in depth analysis of your unique strengths, interest, values, personality,skills and abilities to draw out an exhaustive list of career paths you can choose from.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Continued Support</h3>
                            <p className="text-gray-700">
                                Our relationship does not end with the first 3 sessions where you find your top career paths. We are happy to extend continued support to give you clarity and mid- course correction where required.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Holistic Approach and Psychological Support</h3>
                            <p className="text-gray-700">
                                We follow a holistic approach to career counselling, understanding the unique need of each child/individual. Where required we also provide additional psychological support through our Psychotherapist and Neurogetics Specialists to overcome stress, limiting beliefs, behaviors, challenges which may be roadblocks to unlocking your full potential.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mt-12">
                    <h2 className="text-3xl font-bold mb-6">Our Career Counselling and Study Abroad - Who is this for?</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <ul className="list-disc list-inside space-y-3 text-gray-700">
                            <li>Any young person looking for help in deciding what to study, or what to do in the next step of their professional life.</li>
                            <li>Students above Class 9 / Class 10 deciding which stream to take.</li>
                            <li>Students of Class 11/ 12 to decide the exams and degrees to pursue.</li>
                            <li>Students who need college application assistance.</li>
                            <li>College graduates who want to know what they need to pursue in post graduation.</li>
                            <li>Post graduates who need help to choose which career option is best for them.</li>
                            <li>Working individuals looking for a change of career path or looking at entrepreneurship.</li>
                        </ul>
                    </div>
                </section>
            </div>
            <div className="mt-12 text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
                    Book a Slot
                </button>
            </div>

            <div className="mt-16 relative h-[400px] rounded-xl overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2253193/settings_images/OghNmmsMTfuXZ8IGfxkn_woman-in-yellow-jacket-holding-red-book-3762800.jpg')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
                    <h2 className="text-5xl font-bold mb-6">Want To Study Abroad?</h2>
                    <p className="text-lg max-w-3xl mb-8">
                        We provide mentoring services to help you plan, prepare, apply and qualify with the right college to achieve your aspirations and career dreams.
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Description;
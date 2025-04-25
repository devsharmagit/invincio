import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import leaderimg1 from "../assets/leader1.jpeg";
import leaderimg2 from "../assets/leader2.jpeg";
import leaderimg3 from "../assets/leader3.jpeg"
import leaderimg4 from "../assets/leader4.jpeg"
import leaderimg5 from "../assets/leader5.jpeg"

const SecondSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-32 bg-[#eaeeed]/90">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants} className="mb-12 flex items-center justify-center gap-4">
            <img
              src={leaderimg1}
              alt="Leader 1"
              className="w-60 h-60 rounded-lg object-cover shadow-lg"
            />
            <img
              src={leaderimg2}
              alt="Leader 2"
              className="w-60 h-60 rounded-lg object-cover shadow-lg"
            />
            <img
              src={leaderimg4}
              alt="Lt Col Ankur Sabharwal"
              className="w-full h-full max-w-96 rounded-lg object-cover shadow-lg"
            />
            <img
              src={leaderimg3}
              alt="Leader 3"
              className="w-60 h-60 rounded-lg object-cover shadow-lg"
            />
            <img
              src={leaderimg5}
              alt="Leader 4"
              className="w-60 h-60 rounded-lg object-cover shadow-lg"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-3xl">
            <blockquote className="text-3xl md:text-4xl font-bold text-[#2d4b41] mb-8 leading-tight">
              "When preparation meets purpose, transformation happens."
            </blockquote>
            
            <p className="text-xl text-gray-600 mb-8">
              — Lt Col Ankur Sabharwal (Military Veteran) <br />
              CEO | Military Psychologist | Ex-VP Philips
            </p>

            <p className="text-2xl md:text-3xl font-semibold text-gray-700 leading-relaxed">
            At Invincio Services, we don't just train. We mold character, unlock potential, and instill the grit to lead from the front—be it in defence, corporate corridors, or community spaces.
            </p>

            <p className="text-xl md:text-2xl font-medium text-[#2d4b41] mt-8 italic leading-relaxed">
              "I've seen transformation in both soldiers and CEOs. It's the same engine and drivers : clarity, conviction, and courage."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondSection;
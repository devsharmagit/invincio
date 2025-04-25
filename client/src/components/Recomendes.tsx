import imageSrc from "../assets/recomendeds/image.jpg";

const Recomendes = () => {
  return (
    <section className="py-16 bg-white/90">
      <div className="container mx-auto px-4">
        <img src={imageSrc} alt="recomended" className="w-full max-w-screen-2xl mx-auto block object-contain rounded-xl" />
        <p className="text-xl font-semibold text-gray-700 mt-4 text-right">
        And the family of 300+ recommended candidates grows.
        </p>
        </div>
        </section>
  )
}

export default Recomendes
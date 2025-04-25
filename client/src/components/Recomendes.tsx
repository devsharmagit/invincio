import imageSrc from "../assets/recomendeds/image.jpg";

const Recomendes = () => {
  return (
    <section className="py-16 bg-white/90">
      <div className="container mx-auto px-4">
        <img src={imageSrc} alt="recomended" className="w-full max-w-screen-2xl mx-auto block object-contain rounded-xl" />
        </div>
        </section>
  )
}

export default Recomendes
import imageSrc from "../assets/recomendeds/image.jpg";

const Recomendes = () => {
  return (
    <section className="py-16 bg-[#eaeeed]">
      <div className="container mx-auto px-4">
        <img src={imageSrc} alt="recomended" className="w-9/12 max-w-7xl mx-auto block object-contain rounded-xl" />
        </div>
        </section>
  )
}

export default Recomendes
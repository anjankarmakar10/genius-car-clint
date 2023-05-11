const Slide = ({ image, slide, prev, next }) => {
  return (
    <article
      id={`slide${slide}`}
      className="carousel-item relative w-full rounded-lg overflow-hidden"
    >
      <img src={image} className="w-full object-cover" />
      <div className="absolute bottom-8 right-16 flex gap-8">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle bg-[#475165] border-0"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle bg-[#475165] border-0"
        >
          ❯
        </a>
      </div>
    </article>
  );
};

export default Slide;

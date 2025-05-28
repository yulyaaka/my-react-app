export const ImageSlider: React.FC = () => {
  return (
    <section className="main-image">
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img className="candidate-img" src="./src/assets/images/image1.png" />
          </div>
          <div className="swiper-slide">
            <img className="candidate-img" src="./src/assets/images/pic1.png" />
          </div>
          <div className="swiper-slide">
            <img className="candidate-img" src="./src/assets/images/image1.png" />
          </div>
          <div className="swiper-slide">
            <img className="candidate-img" src="./src/assets/images/pic1.png" />
          </div>
          <div className="swiper-slide">
            <img className="candidate-img" src="./src/assets/images/image1.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
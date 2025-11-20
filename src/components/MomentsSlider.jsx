import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MomentsSlider = () => {
  const moments = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x500/ff9acb/ffffff?text=Our+Moment+1",
      caption: "Our First Date ❤️",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x500/ffb3d9/ffffff?text=Our+Moment+2",
      caption: "That Beautiful Day 💕",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x500/ffc4e1/ffffff?text=Our+Moment+3",
      caption: "Forever Together 💖",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x500/ffd4e8/ffffff?text=Our+Moment+4",
      caption: "You & Me 💗",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/400x500/ffe0f0/ffffff?text=Our+Moment+5",
      caption: "Best Memories 💝",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="moments-section"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section-title"
      >
        Our Cute Moments Together 💕
      </motion.h2>

      <div className="slider-container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="moments-swiper"
        >
          {moments.map((moment) => (
            <SwiperSlide key={moment.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="moment-card"
              >
                <img src={moment.image} alt={moment.caption} />
                <div className="moment-caption">{moment.caption}</div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default MomentsSlider;

"use client";

import styles from "./TestimonialsSection.module.css";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      quote: "Impressive design and smooth performance. The code is well-structured and everything works flawlessly across devices. Highly recommended! The layout is intuitive and it helped speed up my workflow significantly.",
      name: "Alexander harad",
      role: "Creative director",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Monday_logo.svg"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      quote: "A beautifully crafted theme that's perfect for developers and designers. Fast loading and packed with useful components. Highly recommended! The layout is intuitive, and it helped speed up my workflow significantly.",
      name: "Matthew taylor",
      role: "Office manager",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <motion.div 
        className={`container ${styles.container}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className={styles.swiperContainer}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className={styles.testimonialLayout}>
                
                <div className={styles.imageCol}>
                  <div className={styles.imageWrapper}>
                    <img src={testimonial.image} alt={testimonial.name} className={styles.personImage} />
                    <div className={styles.scoreBadge}>
                      <div className={styles.scoreTop}>4.9</div>
                      <div className={styles.scoreStars}>
                        {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="white" className="text-white" />)}
                      </div>
                      <div className={styles.scoreLabel}>Verified score</div>
                    </div>
                  </div>
                </div>

                <div className={styles.textCol}>
                  <div className={styles.quoteMark}>"</div>
                  
                  <img src={testimonial.logo} alt="Company Logo" className={styles.companyLogo} />
                  
                  <p className={styles.quoteText}>
                    {testimonial.quote}
                  </p>
                  
                  <div className={styles.authorInfo}>
                    <h5 className={styles.authorName}>{testimonial.name}</h5>
                    <span className={styles.authorRole}>{testimonial.role}</span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const clients = [
  {
    src: "/clients/client1.png",
    alt: "Flora Client",
  },
  {
    src: "/clients/client2.png",
    alt: "Pearlstone Management Client",
  },
  {
    src: "/clients/client3.png",
    alt: "HTL Client",
  },
  {
    src: "/clients/client4.png",
    alt: "Client Company",
  },
  {
    src: "/clients/client5.png",
    alt: "Al Darmaky Client",
  },
];

export default function Clientele() {
  return (
    <section className="clientele-section">
      <div className="clientele-wrapper">
        <div className="clientele-heading-row">
          <div className="clientele-heading">
            <p>OUR CLIENTELE</p>
            <div className="clientele-heading-line" />
          </div>

          <div className="clientele-navigation">
            <button
              type="button"
              className="clientele-prev"
              aria-label="Previous clients"
            >
              ←
            </button>

            <button
              type="button"
              className="clientele-next"
              aria-label="Next clients"
            >
              →
            </button>
          </div>
        </div>

        <Swiper
          className="clientele-slider"
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".clientele-prev",
            nextEl: ".clientele-next",
          }}
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          grabCursor
          watchOverflow
          speed={650}
          spaceBetween={18}
          slidesPerView={5}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 18,
            },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.src}>
              <article className="clientele-card">
                <div className="clientele-image">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    sizes="(max-width: 599px) 50vw, (max-width: 899px) 33vw, (max-width: 1199px) 25vw, 20vw"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
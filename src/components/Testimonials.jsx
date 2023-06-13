import React from "react";
import OwlCarousel from "react-owl-carousel";
import testimonials from "../data/testimonials.json";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t, i18n } = useTranslation();

  return (
    <div className="rs-team style7 height-ctrl md-pb-70 md-pt-70">
      <div className="container">
        <div className="sec-title text-center mb-60">
          <h2 className="title title2 title3 text-middle">
            {t("testimonials")}
          </h2>
        </div>
        <OwlCarousel
          className="rs-carousel owl-carousel"
          loop={true}
          animateIn="flipInX"
          animateOut="slideOutDown"
          items={1}
          margin={30}
          autoplay={true}
          autoplayHoverPause={true}
          autoplayTimeout={5000}
          smartSpeed={800}
          dots={true}
          nav={false}
          navSpeed={false}
          center={false}
          navText={[
            "<i className='flaticon-left-arrow'></i>",
            "<i className='flaticon-right-arrow'></i>",
          ]}
          responsive={{
            0: {
              // items: 1,
              nav: false,
              dots: true,
              center: false,
            },
            768: {
              // items: 1,
              nav: false,
              dots: true,
              center: false,
            },
            992: {
              // items: 1,
              nav: false,
              dots: true,
              center: false,
            },
            1200: {
              // items: 1,
              nav: false,
              dots: true,
              center: false,
            },
          }}
        >
          {i18n.language === "sr"
            ? testimonials.sr.map((item, i) => (
                <div key={i} className="team-item mt-sm-5 mt-3">
                  <div className="team-inner-wrap">
                    <div className="team-content">
                      <div className="testimonial-images-wrap">
                        <img
                          className="mx-auto testimonial-img"
                          src="./assets/images/testimonials/quote-icon.png"
                          alt="quote icon"
                        />
                      </div>
                      <h3 className="testimonial-statement my-5">
                        “{item.statement}”
                      </h3>
                      <p className="testimonial-name">{item.name}</p>
                      <div className="images-wrap">
                        <img
                          className="w-auto mx-auto"
                          src="./assets/images/testimonials/star-rating.png"
                          alt="star rating icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : testimonials.en.map((item) => (
                <div className="team-item mt-sm-5 mt-3">
                  <div className="team-inner-wrap">
                    <div className="team-content">
                      <div className="testimonial-images-wrap">
                        <img
                          className="mx-auto testimonial-img"
                          src="./assets/images/testimonials/quote-icon.png"
                          alt="quote icon"
                        />
                      </div>
                      <h3 className="testimonial-statement my-5">
                        “{item.statement}”
                      </h3>
                      <p className="testimonial-name">{item.name}</p>
                      <div className="images-wrap">
                        <img
                          className="w-auto mx-auto"
                          src="./assets/images/testimonials/star-rating.png"
                          alt="star rating icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </OwlCarousel>
      </div>
    </div>
  );
}

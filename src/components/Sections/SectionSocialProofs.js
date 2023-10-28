import React from "react"
import SocialProofs from "../../data/socialProofs.json"
import SocialProofCard from "../Cards/SocialProofCard"
import Slider from "react-slick"
import "../../sass/components/_sectionOsztondij.scss"

const SectionSocialProofs = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="section--socail-proofs">
      <div className="section--social-proofs__wrapper">
        <h2 className="mb-20px section--osztondij--header heading heading--1">
          Rólunk mondták
        </h2>
        <div className="tight--desktop--container mt-20px section--social-proofs__cards">
          <Slider {...settings}>
            {SocialProofs.hungarian &&
              SocialProofs.hungarian.map(({ name, text, intro }, index) => (
                <SocialProofCard
                  key={index}
                  name={name}
                  intro={intro}
                  text={text}
                />
              ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default SectionSocialProofs

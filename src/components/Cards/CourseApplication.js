import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { CustomLink } from "../CustomLink"
import Button from "../Buttons/Button"

const CourseApplication = ({ courseDate, courseLink }) => {
  return (
    <div className="island-section">
      <div className="row">
        <h3 className="mb-20px clr-brand-orange font-family-primary">
          <strong>JELENTKEZÉS</strong>
        </h3>
      </div>
      <div className="row">
        <p>
          <strong>Tanfolyam kezdete</strong>
        </p>
      </div>
      <div className="row">
        <p>{courseDate}</p>
      </div>
      <div className="separator-horizontal mt-20px"></div>
      <div className="row">
        <p>
          <strong>Tanfolyami napok</strong>{" "}
        </p>
      </div>
      <div>
        <div className="jelentkezes-date">
          <div className="">
            <p className="clr-shades-gray span">KEDD</p>
            <p>19:00-20:30</p>
          </div>
          <div className="">
            <p className="clr-shades-gray span">PÉNTEK</p>
            <p>19:00-20:30</p>
          </div>
        </div>
        <p>4 hét / 8 alkalom</p>
      </div>
      <div className="separator-horizontal mt-20px"></div>
      <div className="row">
        <p>
          <strong>A tanfolyam költsége</strong>
        </p>
      </div>
      <div className="row">
        <p>30.000 Ft</p>
      </div>
      <div className="separator-horizontal mt-20px"></div>
      <div className="row">
        <p>
          <strong>Helyszín</strong>{" "}
        </p>
      </div>
      <div className="jelentkezes-address">
        <div>
          <p>
            <CustomLink
              link="/kapcsolat"
              title="Bandha Works Jógaiskola "
              classNames="link-decoration-remove"
            />
          </p>
        </div>
        <div>
          <p>
            <span className="jelentkezes-address-line body"> - </span>1027
            Budapest, Frankel Leó út 18.
          </p>
        </div>
      </div>
      <div className="separator-horizontal mt-20px"></div>
      <div className="row">
        {" "}
        <p className="mb-12px">
          <strong>Oktató</strong>
        </p>
      </div>
      <div className="row">
        <div className="jelentezes-teacher">
          <StaticImage
            className="avatar__image avatar__image--medium jelentezes-teacher--avatar zindex-1"
            src="../../images/istvan.png"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Szalai István jógatanár"
            placeholder="blurred"
          />

          <div>
            <CustomLink
              link="/szalai-istvan"
              title="Szalai István"
              classNames="link-decoration-remove body"
            />
            <p>KPJAYI Authorized Level 1</p>
          </div>
        </div>
      </div>
      <div className="separator-horizontal mt-20px"></div>

      <p>A tanfolyamra a részvételi díj kiegyenlítésével tudsz jelentkezni.</p>
      <div className="mt-20px jelentkezes-button">
        <Button
          type="button"
          buttonStyle="btn--primary--solid"
          onClick={() => {
            window.open(courseLink, "_blank", "noopener,noreferrer")
          }}
        >
          Jelentkezem
        </Button>
      </div>
    </div>
  )
}

export default CourseApplication

import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { CustomLink } from "../CustomLink"
import Button from "../Buttons/Button"

const CourseApplication = ({
  courseDate,
  courseLink,
  courseType,
  courseNote,
  courseName,
  courseWeekend,
  courseTeacher,
}) => {
  return (
    <div className="island-section">
      <div className="row mb-20px">
        {" "}
        <p className="clr-brand-orange">
          <strong>{courseDate}</strong>
        </p>{" "}
      </div>
      <div className="row">
        <h3 className="">
          <strong>{courseName}</strong>
        </h3>
      </div>
      <div className="row">
        <p className="clr-shades-gray">
          {!courseWeekend ? (
            <p>
              Kedd és péntek, 19:00 - 20:30 <br />4 hét, 8 alkalom
            </p>
          ) : (
            <p>
              Szombat és vasárnap, 10:00 - 12:00
              <br />2 hét, 4 alkalom
            </p>
          )}
          <strong className="clr-brand-orange">
            {" "}
            {courseNote ? courseNote : ""}
          </strong>
        </p>{" "}
      </div>
      <div className="separator-horizontal mt-20px"></div>
      {/* <div className="row">
        <p>
          <strong>A {courseType} költsége: </strong>30.000 Ft
        </p>
      </div>
      <div className="row">
        <p></p>
      </div>
      <div className="separator-horizontal mt-20px"></div> */}
      <div className="row">
        <div>
          {courseTeacher === "István" ? (
            <div className="jelentkezes-teacher">
              <StaticImage
                className="avatar__image avatar__image--medium jelentkezes-teacher--avatar zindex-1"
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
                <br />
                <span className="clr-shades-gray">
                  KPJAYI Authorized Level 1<br /> oktató
                </span>
              </div>
            </div>
          ) : (
            <div className="jelentkezes-teacher">
              <StaticImage
                className="avatar__image avatar__image--medium jelentkezes-teacher--avatar zindex-1"
                src="../../images/noemi.png"
                layout="fullWidth"
                loading="eager"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Gál Noémi jógatanár"
                placeholder="blurred"
              />
              <div>
                <CustomLink
                  link="/gal-noemi-andrea"
                  title="Gál Noémi Andrea"
                  classNames="link-decoration-remove body"
                />
                <br />
                <span className="clr-shades-gray">oktató</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="separator-horizontal mt-20px"></div>
      <div>
        {!courseLink ? (
          <p className="clr-brand-orange">
            <strong>Sajnos erre a képzésre már nincs szabad helyünk</strong>
          </p>
        ) : (
          <div className="mb-20px jelentkezes-button">
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
        )}
      </div>
      <div>
        {!courseLink ? (
          ""
        ) : (
          <p>
            A {courseType === "tanfolyam" ? "tanfolyamra" : "kurzusra"} a
            részvételi díj kiegyenlítésével tudsz jelentkezni.
          </p>
        )}
      </div>
    </div>
  )
}

export default CourseApplication

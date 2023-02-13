import React from "react"
import { useSchedule } from "../hooks/useScheduleQuery"
import { CustomLink } from "./CustomLink"
import Accordion from "./Accordion"
import "../sass/components/_scheduleroll.scss"

export default function ScheduleRoll() {
  let schedule = useSchedule()

  return (
    <div>
      {schedule
        .filter(schedule => new Date(schedule.date).getTime() > new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(
          ({
            date,
            class1,
            class2,
            class3,
            class4,
            description1,
            description2,
            description3,
            description4,
            signup1,
            signup2,
            signup3,
            signup4,
            time1,
            time2,
            time3,
            time4,
            teacher1,
            teacher2,
            teacher3,
            teacher4,
            teacherlink1,
            teacherlink2,
            teacherlink3,
            teacherlink4,
          }) => {
            let daysArray = [
              "vasárnap",
              "hétfő",
              "kedd",
              "szerda",
              "csütörtök",
              "péntek",
              "szombat",
            ]
            let day = new Date(date).getDay()
            let dayName = daysArray[day].toUpperCase()
            let monthDay = new Date(date)
              .toLocaleDateString("hu-HU", {
                month: "long",
                day: "numeric",
              })
              .toUpperCase()

            return (
              <>
                <br /> <br />
                <div className="schedule-wrapper">
                  <div className="bg-shades-darkerGray container-fluid">
                    <div className="container">
                      <div className="schedule-date-line clr-shades-gray">
                        <p>{dayName}</p>
                        <p>{monthDay}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="schedule-main-row">
                      <div className="schedule-class">
                        <h3>{time1}</h3>
                        <p>{class1}</p>
                        <div>
                          <CustomLink
                            //isInternal=false
                            link={teacherlink1}
                            classNames="body link-decoration-remove clr-brand-orange"
                            title={teacher1}
                          />
                        </div>
                      </div>
                      <div className="schedule-buy-ticket link-decoration-remove">
                        <CustomLink
                          link={signup1}
                          classNames="body clr-brand-orange"
                          title="Vásárlás"
                        />
                      </div>
                    </div>

                    <div className="schedule-details">
                      <Accordion
                        content={description1}
                        text="Részletek"
                        className="clr-shades-white span"
                      />
                    </div>
                  </div>
                  <div className={class2 == "null" ? "hide-class" : ""}>
                    <div className="schedule-main-row">
                      <div className="schedule-class">
                        <div>{time2}</div>
                        <div>{class2}</div>
                        <div>
                          <CustomLink
                            //isInternal=false
                            link={teacherlink2}
                            classNames="link-decoration-remove clr-shades-white"
                            title={teacher2}
                          />
                        </div>
                      </div>
                      <div className="schedule-buy-ticket link-decoration-remove ">
                        <CustomLink link={signup2} className="clr-shades-white">
                          BUY TICKET
                        </CustomLink>
                      </div>
                    </div>
                    <div className="schedule-details">
                      <Accordion
                        content={description2}
                        text="Részletek"
                        className="clr-brand-orange"
                      />
                    </div>
                  </div>
                  <div className={class3 == "null" ? "hide-class" : ""}>
                    <div className="schedule-main-row">
                      <div className="schedule-class">
                        <div>{time3}</div>
                        <div>{class3}</div>
                        <div>
                          <CustomLink
                            //isInternal=false
                            link={teacherlink3}
                            classNames="link-decoration-remove clr-shades-white"
                            title={teacher3}
                          />
                        </div>
                      </div>
                      <div className="schedule-buy-ticket link-decoration-remove ">
                        <CustomLink link={signup3} className="clr-shades-white">
                          BUY TICKET
                        </CustomLink>
                      </div>
                    </div>
                    <div className="schedule-details">
                      <Accordion
                        content={description3}
                        text="Részletek"
                        className="clr-brand-orange"
                      />
                    </div>
                  </div>
                  <div className={class4 == "null" ? "hide-class" : ""}>
                    <div className="schedule-main-row">
                      <div className="schedule-class">
                        <div>{time4}</div>
                        <div>{class4}</div>
                        <div>
                          <CustomLink
                            //isInternal=false
                            link={teacherlink4}
                            classNames="link-decoration-remove clr-shades-white"
                            title={teacher4}
                          />
                        </div>
                      </div>
                      <div className="schedule-buy-ticket link-decoration-remove ">
                        <CustomLink link={signup4} className="clr-shades-white">
                          BUY TICKET
                        </CustomLink>
                      </div>
                    </div>
                    <div className="schedule-details">
                      <Accordion
                        content={description4}
                        text="Részletek"
                        className="clr-brand-orange"
                      />
                    </div>
                  </div>
                  <br />
                </div>
              </>
            )
          }
        )}
    </div>
  )
}

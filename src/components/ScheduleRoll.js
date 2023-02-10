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
            return (
              <>
                <br /> <br />
                <div className="schedule-wrapper">
                  <div>
                    <h3>{date}</h3>
                  </div>
                  <div>
                    <div className="schedule-main-row">
                      <div className="schedule-class">
                        <div>{time1}</div>
                        <div>{class1}</div>
                        <div>
                          <CustomLink
                            //isInternal=false
                            link={teacherlink1}
                            classNames="link-decoration-remove clr-shades-white"
                            title={teacher1}
                          />
                        </div>
                      </div>
                      <div className="schedule-buy-ticket link-decoration-remove ">
                        <CustomLink
                          link={signup1}
                          classNames="clr-shades-white"
                          title="BUY TICKET"
                        />
                      </div>
                    </div>

                    <div className="schedule-details">
                      <Accordion
                        content={description1}
                        text="Részletek"
                        className="clr-brand-orange"
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

//Ferran's code
// import React from "react"
// import { useSchedule } from "../hooks/useScheduleQuery"
// import { useClasses } from "../hooks/useClassesQuery"
// import { useTeachers } from "../hooks/useTeachersQuery"
// import { element } from "prop-types"

// export default function ScheduleRoll() {
//   let schedule = useSchedule()
//   const classes = useClasses()
//   const getClassData = currentClass => {
//     const classData = classes.find(item => item.class === currentClass)
//     return classData
//   }
//   console.log(schedule)
//   return (
//     <div className="row">
//       {schedule.map(
//         ({ class1, teacher1, time1, date, class2, teacher2, time2 }) => {
//           let currentClass

//           if (class1) {
//             currentClass = getClassData(class1)
//           }
//           if (class2) {
//             currentClass = getClassData(class2)
//           }
//           console.log(currentClass)
//           // const currentClass = classes.find(
//           //   class1 => class1.shortdescription === classData1
//           // )

//           // const mergedClasses = {...class1, ...class2, class3}

//           // const currentTeacher = teachers.find(
//           //   teacher => teacher.name === teacherName
//           // )

//           return (
//             <>
//               <div className="row">
//                 <div className="col">{date}</div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                   {time1} {class1} {teacher1}
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                   {time2} {class2} {teacher2}
//                 </div>
//               </div>
//             </>
//           )
//         }
//       )}
//     </div>
//   )
// }

import React from "react"
import { useSchedule } from "../hooks/useScheduleQuery"

export default function ScheduleRoll() {
  let schedule = useSchedule()

  console.log(schedule)

  return (
    <div>
      {schedule.map(
        ({
          class1,
          teacher1,
          time1,
          date,
          class2,
          teacher2,
          time2,
          description1,
          description2,
          signup1,
          signup2,
          teacherlink1,
          teacherlink2,
        }) => {
          // const classShortdescription = classes.find(
          //   classid => classid.shortdescription === classShortdescription
          // )
          // console.log(classShortdescription)

          return (
            <>
              <div>
                <h3>{date}</h3>
              </div>
              <br />
              <div>
                {time1} {class1} {description1} {signup1} {teacher1}{" "}
                {teacherlink1}
              </div>
              <div>
                {time2} {class2} {description2} {signup2} {teacher2}{" "}
                {teacherlink2}
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

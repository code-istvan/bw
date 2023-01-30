import React from "react"
import { useSchedule } from "../hooks/useScheduleQuery"
import { useClasses } from "../hooks/useClassesQuery"
import { useTeachers } from "../hooks/useTeachersQuery"
import { element } from "prop-types"

export default function ScheduleRoll() {
  let schedule = useSchedule()
  const classes = useClasses()
  const getClassData = currentClass => {
    const classData = classes.find(item => item.class === currentClass)
    return classData
  }
  console.log(schedule)
  return (
    <div className="row">
      {schedule.map(
        ({ class1, teacher1, time1, date, class2, teacher2, time2 }) => {
          let currentClass

          if (class1) {
            currentClass = getClassData(class1)
          }
          if (class2) {
            currentClass = getClassData(class2)
          }
          console.log(currentClass)
          // const currentClass = classes.find(
          //   class1 => class1.shortdescription === classData1
          // )

          // const mergedClasses = {...class1, ...class2, class3}

          // const currentTeacher = teachers.find(
          //   teacher => teacher.name === teacherName
          // )

          return (
            <>
              <div className="row">{date}</div>
              <div className="row">
                {time1} {class1} {teacher1}
              </div>
              <div className="row">
                {time2} {class2} {teacher2}
              </div>
            </>
          )
        }
      )}
    </div>
  )
}

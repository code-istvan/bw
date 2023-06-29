import React, { useEffect, useState } from "react"

export default function Counter() {
  const initialDate = "2013-08-25"
  const [years, setYears] = useState(0)
  const [months, setMonths] = useState(0)
  const [days, setDays] = useState(0)

  useEffect(() => {
    const currentDate = new Date()
    const inputDate = new Date(initialDate)

    let yearDiff = currentDate.getFullYear() - inputDate.getFullYear()
    let monthDiff = currentDate.getMonth() - inputDate.getMonth()
    let dayDiff = currentDate.getDate() - inputDate.getDate()

    if (dayDiff < 0) {
      monthDiff -= 1
      dayDiff += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate()
    }

    if (monthDiff < 0) {
      yearDiff -= 1
      monthDiff += 12
    }

    setYears(yearDiff)
    setMonths(monthDiff)
    setDays(dayDiff)
  }, [initialDate])

  return (
    <div>
      <h1>
        {years} év, {months} hónap{days !== 0 && `, ${days} nap`}
      </h1>
    </div>
  )
}

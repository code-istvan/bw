import React, { useEffect, useState } from "react"

export default function Counter({ tag, className, language = "hu" }) {
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

  const Tag = tag || "h1"

  // Többes szám kezelése angolul
  const pluralize = (count, singular, plural) => {
    return count === 1 ? singular : plural
  }

  // Nyelvi szövegek kezelése
  const translations = {
    hu: {
      years: "év",
      months: "hónap",
      days: "nap",
    },
    eng: {
      years: count => pluralize(count, "year", "years"),
      months: count => pluralize(count, "month", "months"),
      days: count => pluralize(count, "day", "days"),
    },
  }

  // Nyelv kiválasztása
  const currentLanguage = translations[language]

  // Nyelvi szöveg megjelenítése
  const renderText = (count, type) => {
    const text = currentLanguage[type]
    return typeof text === "function" ? text(count) : text
  }

  return (
    <Tag className={`counter--wrapper ${className}`}>
      {years} {renderText(years, "years")}
      {months !== 0 && `, ${months} ${renderText(months, "months")}`}
      {days !== 0 && `, ${days} ${renderText(days, "days")}`}
    </Tag>
  )
}

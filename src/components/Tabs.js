import React, { useState, useEffect } from "react"
import "../sass/components/_tabs.scss"

const Tabs = ({ tabsData }) => {
  const isBrowser = typeof window !== "undefined"

  let defaultTabFromURL
  if (isBrowser) {
    defaultTabFromURL = new URLSearchParams(window.location.search).get("tab")
  }

  const defaultTab =
    tabsData.find(tab => tab.id === defaultTabFromURL)?.title ||
    tabsData[0].title

  const [selectedTab, setSelectedTab] = useState(defaultTab)

  const handleTabSelect = tab => {
    setSelectedTab(tab)
  }

  const selectedTabContent = tabsData.find(
    tab => tab.title === selectedTab
  )?.content

  useEffect(() => {
    if (isBrowser) {
      const handleURLChange = () => {
        const currentTabFromURL = new URLSearchParams(
          window.location.search
        ).get("tab")
        const currentTab = tabsData.find(
          tab => tab.id === currentTabFromURL
        )?.title
        if (currentTab) setSelectedTab(currentTab)
      }

      window.addEventListener("popstate", handleURLChange)

      return () => {
        window.removeEventListener("popstate", handleURLChange)
      }
    }
  }, [tabsData, isBrowser])

  return (
    <div className="tabs mt-40px">
      <div className="tabs__header mb-20px">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`tabs__label ${
              selectedTab === tab.title ? "active" : "not-active"
            }`}
            onClick={() => handleTabSelect(tab.title)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                handleTabSelect(tab.title)
                e.preventDefault() // Megelőzzük az alapértelmezett space eseményt
              }
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs__content">{selectedTabContent}</div>
    </div>
  )
}

export default Tabs

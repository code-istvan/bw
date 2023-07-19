import React, { useState } from "react"
import "../sass/components/_tabs.scss"

const Tabs = ({ tabsData }) => {
  const [selectedTab, setSelectedTab] = useState(tabsData[0].title)

  const handleTabSelect = tab => {
    setSelectedTab(tab)
  }

  const selectedTabContent = tabsData.find(
    tab => tab.title === selectedTab
  )?.content

  return (
    <div className="tabs mt-40px">
      <div className="tabs__header mb-20px">
        {tabsData.map((tab, index) => (
          <h3
            key={index}
            className={`tabs__label ${
              selectedTab === tab.title ? "active" : "not-active"
            }`}
            onClick={() => handleTabSelect(tab.title)}
          >
            {tab.title}
          </h3>
        ))}
      </div>
      <div className="tabs__content">{selectedTabContent}</div>
    </div>
  )
}

export default Tabs

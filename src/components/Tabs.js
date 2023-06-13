// import React, { useState } from "react"
// import "../sass/components/_tabs.scss"

// const Tabs = ({ tabs }) => {
//   const [selectedTab, setSelectedTab] = useState(0)

//   const handleTabSelect = index => {
//     setSelectedTab(index)
//   }

//   return (
//     <div className="tabs">
//       <div className="tabs__header">
//         {tabs.map((tab, index) => (
//           <h3
//             key={index}
//             className={`tabs__label ${selectedTab === index ? "active" : ""}`}
//             onClick={() => handleTabSelect(index)}
//           >
//             {tab.title}
//           </h3>
//         ))}
//       </div>
//       <div
//         className="tabs__content"
//         dangerouslySetInnerHTML={{ __html: tabs[selectedTab].content }}
//       ></div>
//     </div>
//   )
// }

// export default Tabs

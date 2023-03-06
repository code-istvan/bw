import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import ScheduleRoll from "../components/ScheduleRoll"

export default function Orarend() {
  return (
    <Layout>
      <Seo title="ÓRAREND" />
      <div className="row mt-80px">
        <h1>ÓRAREND</h1>
      </div>
      <ScheduleRoll />
    </Layout>
  )
}

import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Work from "../components/work"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-primary">
      <Hero/>
    </div>
    <div className="bg-tertiary">
      <Work/>
    </div>
  </Layout>
)

export default IndexPage

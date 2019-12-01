import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <section id="work" className="px-3 pt-12 pb-0 mx-auto sm:px-6 sm:pt-16 md:max-w-4xl md:pt-20 lg:pt-32 lg:max-w-6xl">
      <h1>Graphic Design</h1>
      <div className="flex flex-wrap -mx-3 md:px-3 xl:px-0 md:-mx-0 lg:-mx-3">
        lol 
      </div>
      <Link to="/">Go back to the homepage</Link>
    </section>
  </Layout>
)

export default SecondPage

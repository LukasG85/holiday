import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import Works from "../components/works/Works"
import Partners from "../components/partners/Partners"
import Ideas from "../components/ideas/Ideas"
import Contact from "../components/contact/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <Works />
    <Partners />
    <Ideas />
    <Contact />
  </Layout>
)

export default IndexPage

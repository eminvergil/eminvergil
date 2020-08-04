import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Bio from "../components/bio"
import BioText from "../components/bio-text"
import Buttons from "../components/buttons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bio />
    <BioText />
    <Buttons />
  </Layout>
)

export default IndexPage

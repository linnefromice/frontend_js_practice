import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const url = "https://api.nytimes.com/svc/topstories/v2/home.json"
const api_key = "XXXX"

const NyTimesPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`${url}?api-key=${api_key}`)
      .then(response => response.json())
      .then(resultDatas => {
        setDatas(resultDatas.results);
      })
    }, [])

  return (
    <Layout>
      <SEO title="New York Times Page" />
      <Link to="/">Go back to the homepage</Link>
      <div>
        {datas.map((data) => 
          <li>{data.title}</li>
        )}
      </div>
    </Layout>
  );
}

export default NyTimesPage

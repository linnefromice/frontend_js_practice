import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const url = "https://gateway.marvel.com/v1/public/characters" // hard coding "characters"
const ts = "1"
const api_key = "XXXX"
const hash = "f8f8379e2c88e5b003b7765cb1c730ea"

const MarvelPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`${url}?ts=${ts}&apikey=${api_key}&hash=${hash}`)
      .then(response => response.json())
      .then(resultDatas => {
        setDatas(resultDatas.data.results);
      })
    }, [])

  return (
    <Layout>
      <SEO title="Marvel Page" />
      <Link to="/">Go back to the homepage</Link>
      <div>
        {datas.map((data) => 
          <li>{data.name}</li>
        )}
      </div>
    </Layout>
  );
}

export default MarvelPage

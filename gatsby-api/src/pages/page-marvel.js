import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import md5 from "md5";

import Layout from "../components/layout"
import SEO from "../components/seo"

const url = "https://gateway.marvel.com/v1/public/characters" // hard coding "characters"
const ts = "1"
const public_key = "2897bec72a68cf322e6f4cba8b778ada"
const private_key = "XXXX"

const MarvelPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const hash = md5(ts + private_key + public_key)
    // const hash = "48239221234fde584946e8b0bf6141bd"
    fetch(`${url}?ts=${ts}&apikey=${public_key}&hash=${hash}`)
      .then(response => response.json())
      .then(resultDatas => {
        setDatas(resultDatas.data.results);
      })
      .catch(err => {
        console.log(err)
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


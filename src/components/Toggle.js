import React, { useState } from "react";
const { APIKEY } = ""

const Toggle = props => {
  const { setImages } = props
  const [buttonContent, setButtonContent] = useState("SEARCH")

  const handleSubmit = e => {
    e.preventDefault();
    const search = e.target[0].value
    console.log(search)
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}=${e.target[0].value}&limit=25&offset=0&rating=R&lang=en`).
    then(resp => resp.json()).
    then(json => {
      setImages(json.data)
      setButtonContent(
        <img src={json.data[Math.floor(Math.random() * json.data.length)].images.downsized_large.url}/>
        )
      })
  }




  return (
    <form onSubmit={handleSubmit}>
      <input type="text"/>
      <button>{buttonContent}</button>
    </form>
  )

}

export default Toggle

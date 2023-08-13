import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setDefinition(response.data);
    let apiKey = "c33d4a80d9533a8t8944b0aef1f6cbo2";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "c33d4a80d9533a8t8944b0aef1f6cbo2";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What would you like to define?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
              autoFocus={true}
            />
          </form>
          <div className="hint">i.e. coding, frontend, travel, reliable...</div>
        </section>
        <Results definition={definition} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

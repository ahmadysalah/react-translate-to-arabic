import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = (val) => {
  return `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200428T021732Z.a47b9c7034e7647c.a40b1a8a1d0d372b1e84c9f666ebc5cf19a0fc65&text=${val}&lang=ar`;
};

function Ex2(props) {
  const [word, setword] = useState("");
  const [trans, setTrans] = useState();

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (word)
    axios
      .get(URL(word), {
        cancelToken: source.token,
      })
      .then((result) => setTrans(result.data.text[0]))
      .catch(() => setTrans("لا يوجد ترجمة لهذا العنصر"));

    return () => source.cancel();
  },[word]);

  return (
    <>
      <h2> Exercise 2 </h2>
      <input
        type="text"
        className="input"
        value={word}
        onChange={(event) => setword(event.target.value)}
      ></input>
      <div className="translate">
        <h5>Translate : EN->AR</h5>
        <h2> {word && trans} </h2>
      </div>
    </>
  );
}

export default Ex2;

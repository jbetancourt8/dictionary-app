import { light } from "@material-ui/core/styles/createPalette";
import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, category, lightMode }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          className="audioStyle"
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser doesn't support audio element.
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMeaning"
                style={{
                  backgroundColor: lightMode ? "#3b5360" : "white",
                  color: lightMode ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr className="hrStyle" />

                {def.example && (
                  <span>
                    <b>Example : </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms : </b>
                    {def.synonyms.map((s) => `$(s), `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;

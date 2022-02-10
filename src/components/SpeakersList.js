import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";

const State = {
  loading: "Loading",
  complete: "Complete",
  error: "Error",
};

function SpeakersList({ showSessions }) {
  const [speakersData, setSpeakersData] = useState([]);
  const [state, setState] = useState(State.loading);
  const [error, setError] = useState("");

  const delay = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(2000);
        setState(State.complete);
        setSpeakersData(data);
      } catch (error) {
        setState(State.error);
        setError(error);
      }
    }
    delayFunc();
  }, []);

  function onFavoriteToggle(id) {
    const speakersRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });
    const speakerRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };
    const speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });

    setSpeakersData(speakersDataNew);
  }

  if (state === State.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakersData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpeakersList;

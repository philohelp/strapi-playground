import React, { useEffect, useState } from "react";

export default function Feedback({ feedbackActivated, setFeedbackActivated }) {
  useEffect(() => {
    setTimeout(function () {
      setFeedbackActivated("hide");
    }, 5000);
  }, [feedbackActivated]);
  if (feedbackActivated === "hide") return null;
  if (feedbackActivated === "error")
    return (
      <div>
        <p
          style={{
            color: "#D02A1F",
            fontSize: 12,
            marginRight: 12,
            marginTop: 12,
          }}
        >
          Une erreur s'est produite
        </p>
      </div>
    );
  return (
    <div>
      <p
        style={{
          color: "#5BB176",
          fontSize: 12,
          marginRight: 12,
          marginTop: 12,
        }}
      >
        Vos infos ont été mises à jour
      </p>
    </div>
  );
}

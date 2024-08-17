import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Function to generate the appropriate number of emoji
  const getEmoji = (minutes) => {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups);
    } else {
      const bento = Math.ceil(minutes / 10);
      return "🍱".repeat(bento);
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {getEmoji(minutes)} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

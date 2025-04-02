import React from "react";

const YouTubeEmbed =({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&playlist=${videoId}`;

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%", // Maintain 16:9 aspect ratio
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={embedUrl}
        title="YouTube video player"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;

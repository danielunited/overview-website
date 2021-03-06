import "../src/fonts/stylesheet.css";
import ReactPlayer from "react-player/file";
import video from "../src/sunrise.webm";
import static_background from "../src/static-background.jpeg";
// import React, { useState } from "react";

function App() {
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-end py-10 px-6">
      <div className="text-center max-w-2xl relative z-10">
        <h1 className="text-6xl font-bold mb-5 sm:text-6xl">Can You See It?</h1>
        <p>
          The Overview Effect is a cognitive shift in awareness reported by
          astronauts while viewing the Earth from
          orbit or from the lunar surface. It refers to the experience of seeing
          firsthand the reality of the Earth in space, which is immediately
          understood to be a tiny, fragile ball of life, hanging in the void,
          shielded and nourished by a paper-thin atmosphere.
        </p>
      </div>
      <ReactPlayer
        className="fixed inset-0 z-0 h-full object-cover sm:bg-none bg-center bg-no-repeat"
        url={video}
        width="100%"
        height="100%"
        loop={true}
        playing={true}
        volume={0}
        muted={true}
        controls={false}
        playsinline={true}
      />
    </div>
  );
}

export default App;

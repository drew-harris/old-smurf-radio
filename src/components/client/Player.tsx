"use client";

import { useEffect, useRef, useState } from "react";

interface PlayerProps {
  streamUrl: string;
}

export default function Player({ streamUrl }: PlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    // Get current time
    const now = new Date();
    const nowSeconds = now.getSeconds();
    const nowMinutes = now.getMinutes();
    console.log("SKIPPING");

    if (!audioRef || !audioRef.current) return;

    audioRef.current.currentTime = nowSeconds + nowMinutes * 60;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    if (!audioRef || !audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    // Disable seeking
    if (!audioRef || !audioRef.current) return;

    const prevent = (e: any) => {
      e.preventDefault();
      // const now = new Date();
      // const nowSeconds = now.getSeconds();
      // const nowMinutes = now.getMinutes();
      // console.log("SKIPPING");
      //
      // if (audioRef.current) {
      //   audioRef.current.currentTime = nowSeconds + nowMinutes * 60;
      // }
      // Seek to correct point
    };
    let listen = audioRef.current.addEventListener("seeking", prevent);
    audioRef.current.addEventListener("seeked", prevent);
    // audioRef.current.addEventListener("timeupdate", prevent);

    audioRef.current.addEventListener("play", (e) => {
      e.preventDefault();
      play();
    });

    audioRef.current.addEventListener("pause", (e) => {
      e.preventDefault();
      pause();
    });

    let localAudio = audioRef.current;

    return () => {
      localAudio.removeEventListener("seeking", prevent);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={streamUrl}></audio>
      {isPlaying ? (
        <button onClick={pause}>Pause</button>
      ) : (
        <button onClick={play}>Play</button>
      )}
    </div>
  );
}

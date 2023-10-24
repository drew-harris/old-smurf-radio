"use client";

import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

interface PlayerProps {
  streamUrl: string;
}

export default function Player({ streamUrl }: PlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    seek();
    if (audioRef.current) {
      audioRef.current.play();
    }

    setIsPlaying(true);
  };

  const seek = () => {
    // Get current time
    const now = new Date();
    const nowSeconds = now.getSeconds();
    const nowMinutes = now.getMinutes();
    console.log("SKIPPING");

    if (!audioRef || !audioRef.current) return;

    audioRef.current.currentTime = nowSeconds + nowMinutes * 60;
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
    };
    let listen = audioRef.current.addEventListener("seeking", prevent);
    audioRef.current.addEventListener("seeked", prevent);
    audioRef.current.addEventListener("timeupdate", (e) => {
      const currentTime = audioRef.current?.currentTime;
      const now = new Date();
      const nowSeconds = now.getSeconds();
      const nowMinutes = now.getMinutes();

      const absDifference = Math.abs(
        (currentTime || 0) - (nowSeconds + nowMinutes * 60),
      );
      if (absDifference > 5) {
        seek();
      }
    });

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-min items-center gap-8 rounded-sm bg-zinc-700 p-5">
      <div className="rounded-xl bg-red-500 p-2 text-white">LIVE</div>
      <audio ref={audioRef} src={streamUrl}></audio>
      {isPlaying ? (
        <div onClick={pause} className="p-2">
          <FontAwesomeIcon size="2x" icon={faPause} />
        </div>
      ) : (
        <div onClick={play} className="p-2">
          <FontAwesomeIcon size="2x" icon={faPlay} />
        </div>
      )}
    </div>
  );
}

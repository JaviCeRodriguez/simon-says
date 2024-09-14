"use client";

import { useState } from "react";
import { ButtonsPanel } from "@/components/buttons-panel";
import { COLORS, EMOJIS } from "@/lib/consts";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);

  const generateNewRandomIndex = () => {
    const index = Math.floor(Math.random() * COLORS.length);
    setSequence((prevSequence) => [...prevSequence, index]);
  };

  const handleButtonClick = (index: number) => {
    if (!isPlaying) return;

    const user = [...userSequence, index];
    console.log("user", user);
    setUserSequence((prevUserSequence) => [...prevUserSequence, index]);

    if (user.length <= sequence.length) {
      for (let i = 0; i < user.length; i++) {
        console.log(user[i], sequence[i]);
        if (user[i] !== sequence[i]) {
          setIsPlaying(false);
          return;
        }
      }
    }

    if (user.length === sequence.length) {
      setUserSequence([]);
      generateNewRandomIndex();
    }
  };

  const startGame = () => {
    setSequence([]);
    generateNewRandomIndex();
    setIsPlaying(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="text-4xl font-bold mt-8">Simon Game</h1>
      <h4 className="text-xl">Round {sequence.length}</h4>
      <p>
        debug:
        {sequence.map((index) => EMOJIS[index]).join(" ") || "No sequence"}
      </p>
      <p>
        debug:
        {userSequence.map((index) => EMOJIS[index]).join(" ") || "No sequence"}
      </p>
      <div className="">
        <ButtonsPanel onButtonClick={handleButtonClick} />
      </div>
      <div>
        <Button onClick={startGame} disabled={isPlaying}>
          {isPlaying ? "Restart!" : "Start"}
        </Button>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import { ButtonsPanel } from "@/components/buttons-panel";
import { COLORS } from "@/lib/consts";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

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
    setUserSequence((prevUserSequence) => [...prevUserSequence, index]);

    if (user.length <= sequence.length) {
      for (let i = 0; i < user.length; i++) {
        if (user[i] !== sequence[i]) {
          setIsPlaying(false);
          toast.error(`Game Over! Your score is ${sequence.length - 1}`);
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
    setUserSequence([]);
    generateNewRandomIndex();
    setIsPlaying(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-4xl font-bold mt-8">Simon Game</h1>
      <h4 className="text-xl">Round {sequence.length}</h4>
      <div className="my-20">
        <ButtonsPanel onButtonClick={handleButtonClick} />
      </div>
      <div>
        <Button
          onClick={startGame}
          variant={isPlaying ? "destructive" : "default"}
        >
          {isPlaying ? "Restart!" : "Start"}
        </Button>
      </div>
      <Toaster position="bottom-center" richColors />
    </main>
  );
}

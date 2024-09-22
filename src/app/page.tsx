"use client";

import { useEffect, useState } from "react";
import { ButtonsPanel } from "@/components/buttons-panel";
import { COLORS, DELAY_TIME } from "@/lib/consts";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function Home() {
  const [isInGame, setIsInGame] = useState(false);
  const [isPlayingSequence, setIsPlayingSequence] = useState(false);
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [userClickedButton, setUserClickedButton] = useState<number | null>(
    null
  );

  const generateNewRandomIndex = async () => {
    const index = Math.floor(Math.random() * COLORS.length);
    await new Promise((resolve) => setTimeout(resolve, 5 * DELAY_TIME));
    setSequence((prevSequence) => [...prevSequence, index]);
  };

  const handleButtonClick = (index: number) => {
    if (!isInGame) return;

    setUserClickedButton(index);
    setTimeout(() => setUserClickedButton(null), DELAY_TIME / 2);

    const user = [...userSequence, index];
    setUserSequence((prevUserSequence) => [...prevUserSequence, index]);

    if (user.length <= sequence.length) {
      for (let i = 0; i < user.length; i++) {
        if (user[i] !== sequence[i]) {
          setIsInGame(false);
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

  const playSequence = async () => {
    setIsPlayingSequence(true);
    for (const button of sequence) {
      setActiveButton(button);
      await new Promise((resolve) => setTimeout(resolve, DELAY_TIME));
      setActiveButton(null);
      await new Promise((resolve) => setTimeout(resolve, DELAY_TIME / 2));
    }

    setIsPlayingSequence(false);
  };

  const startGame = () => {
    setSequence([]);
    setUserSequence([]);
    generateNewRandomIndex();
    setIsInGame(true);
    setIsPlayingSequence(false);
  };

  useEffect(() => {
    if (sequence.length > 0) {
      playSequence();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sequence]);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-4xl font-bold mt-8">Round {sequence.length}</h1>
      <div className="my-20">
        <ButtonsPanel
          onButtonClick={handleButtonClick}
          activeButton={activeButton}
          userClickedButton={userClickedButton}
          isPlayingSequence={isPlayingSequence}
        />
      </div>
      <div>
        <Button
          onClick={startGame}
          variant={isInGame ? "destructive" : "default"}
        >
          {isInGame ? "Restart!" : "Start"}
        </Button>
      </div>
      <Toaster position="bottom-center" richColors />
    </main>
  );
}

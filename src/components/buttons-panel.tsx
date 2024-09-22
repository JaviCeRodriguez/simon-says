import { Button } from "./ui/button";
import { EMOJIS } from "@/lib/consts";

interface Props {
  onButtonClick: (index: number) => void;
  activeButton: number | null;
  userClickedButton: number | null;
  isPlayingSequence: boolean;
}

export const ButtonsPanel: React.FC<Props> = ({
  onButtonClick,
  activeButton,
  userClickedButton,
  isPlayingSequence,
}) => {
  const handleButtonClick = (index: number) => {
    if (isPlayingSequence) return;
    onButtonClick(index);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 rounded-full overflow-hidden">
      <Button
        className="rounded-none bg-red-500 hover:bg-red-600 w-48 h-48 flex items-center justify-center text-6xl"
        onClick={() => handleButtonClick(0)}
      >
        {(activeButton === 0 || userClickedButton === 0) && EMOJIS[0]}
      </Button>
      <Button
        className="rounded-none bg-blue-500 hover:bg-blue-600 w-48 h-48 flex items-center justify-center text-6xl"
        onClick={() => handleButtonClick(1)}
      >
        {(activeButton === 1 || userClickedButton === 1) && EMOJIS[1]}
      </Button>
      <Button
        className="rounded-none bg-green-500 hover:bg-green-600 w-48 h-48 flex items-center justify-center text-6xl"
        onClick={() => handleButtonClick(2)}
      >
        {(activeButton === 2 || userClickedButton === 2) && EMOJIS[2]}
      </Button>
      <Button
        className="rounded-none bg-yellow-500 hover:bg-yellow-600 w-48 h-48 flex items-center justify-center text-6xl"
        onClick={() => handleButtonClick(3)}
      >
        {(activeButton === 3 || userClickedButton === 3) && EMOJIS[3]}
      </Button>
    </div>
  );
};

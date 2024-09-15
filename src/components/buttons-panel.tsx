import { COLORS } from "@/lib/consts";
import { Button } from "./ui/button";

interface Props {
  onButtonClick: (index: number) => void;
}

export const ButtonsPanel: React.FC<Props> = ({ onButtonClick }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 rounded-full overflow-hidden">
      {COLORS.map((color, index) => (
        <Button
          key={color}
          className={`rounded-none bg-${color}-500 hover:bg-${color}-600 w-48 h-48 flex items-center justify-center text-6xl`}
          onClick={() => onButtonClick(index)}
        />
      ))}
    </div>
  );
};

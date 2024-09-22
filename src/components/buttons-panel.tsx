import { Button } from "./ui/button";

interface Props {
  onButtonClick: (index: number) => void;
}

export const ButtonsPanel: React.FC<Props> = ({ onButtonClick }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 rounded-full overflow-hidden">
      <Button
        className={`rounded-none bg-red-500 hover:bg-red-600 w-48 h-48 flex items-center justify-center text-6xl`}
        onClick={() => onButtonClick(0)}
      />
      <Button
        className={`rounded-none bg-blue-500 hover:bg-blue-600 w-48 h-48 flex items-center justify-center text-6xl`}
        onClick={() => onButtonClick(1)}
      />
      <Button
        className={`rounded-none bg-green-500 hover:bg-green-600 w-48 h-48 flex items-center justify-center text-6xl`}
        onClick={() => onButtonClick(2)}
      />
      <Button
        className={`rounded-none bg-yellow-500 hover:bg-yellow-600 w-48 h-48 flex items-center justify-center text-6xl`}
        onClick={() => onButtonClick(3)}
      />
    </div>
  );
};

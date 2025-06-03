// components/WaterControls.tsx
import React from 'react';

interface WaterControlsProps {
  onAddWater: (amount: number) => void;
  onResetWater: () => void;
}

const WaterControls: React.FC<WaterControlsProps> = ({ onAddWater, onResetWater }) => {
  return (
    <div className="water-controls">
      <button onClick={() => onAddWater(1)}>Добавить 1 стакан</button>
      <button onClick={() => onAddWater(5)}>Добавить 5 стаканов</button>
      <button onClick={onResetWater}>Сбросить</button>
    </div>
  );
};

export default WaterControls;

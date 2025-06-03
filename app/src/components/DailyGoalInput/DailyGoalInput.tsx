// components/DailyGoalInput.tsx
import React from 'react';

interface DailyGoalInputProps {
  dailyGoal: number;
  onGoalChange: (newGoal: number) => void;
}

const DailyGoalInput: React.FC<DailyGoalInputProps> = ({ dailyGoal, onGoalChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGoal = parseInt(e.target.value, 10);
    if (!isNaN(newGoal) && newGoal > 0) {
      onGoalChange(newGoal);
    }
  };

  return (
    <div className="daily-goal-input">
      <label htmlFor="dailyGoalInput">Дневная норма (стаканов): </label>
      <input
        id="dailyGoalInput"
        type="number"
        value={dailyGoal}
        onChange={handleChange}
        min="1"
      />
    </div>
  );
};

export default DailyGoalInput;

// components/WaterTracker.tsx
import React, { useState } from 'react';
import WaterDisplay from '../WaterDisplay/WaterDisplay';
import WaterControls from '../WaterControls/WaterControls';
import DailyGoalInput from '../DailyGoalInput/DailyGoalInput';
import './WaterTracker.css'; // Стили специфичные для WaterTracker

const WaterTracker: React.FC = () => {
  const [dailyGoal, setDailyGoal] = useState<number>(15);
  const [currentAmount, setCurrentAmount] = useState<number>(0);



  const addWater = (amount: number) => {
    setCurrentAmount((prevAmount) => Math.min(prevAmount + amount, dailyGoal));
  };

  const handleDailyGoalChange = (newGoal: number) => {
    setDailyGoal(newGoal);
    // Опционально: сбросить текущее количество воды, если новая цель меньше
    if (currentAmount > newGoal) {
      setCurrentAmount(newGoal);
    }
  };

  const resetWater = () => {
    setCurrentAmount(0);
  };

  return (
    <div className="water-tracker-container">
      <h1>Трекер воды</h1>
      <WaterDisplay currentAmount={currentAmount} dailyGoal={dailyGoal} />
      <DailyGoalInput dailyGoal={dailyGoal} onGoalChange={handleDailyGoalChange} />
      <p>Выпито: {currentAmount} из {dailyGoal} стаканов</p>
      <WaterControls onAddWater={addWater} onResetWater={resetWater} />
    </div>
  );
};

export default WaterTracker;

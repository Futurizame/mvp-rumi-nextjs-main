"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<{ targetDate: number }> = ({ targetDate }) => {
  const calculateTimeLeft = (target: number): TimeLeft => {
    const now = new Date().getTime();
    const difference = target - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-center">
      <div className="text-2xl font-bold mb-2">Comming soon</div>
      <div className="flex justify-center space-x-4">
        <div>
          <div className="text-xl font-semibold">{timeLeft.days}</div>
          <div className="text-gray-500">Días</div>
        </div>
        <div>
          <div className="text-xl font-semibold">{timeLeft.hours}</div>
          <div className="text-gray-500">Horas</div>
        </div>
        <div>
          <div className="text-xl font-semibold">{timeLeft.minutes}</div>
          <div className="text-gray-500">Minutos</div>
        </div>
        <div>
          <div className="text-xl font-semibold">{timeLeft.seconds}</div>
          <div className="text-gray-500">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

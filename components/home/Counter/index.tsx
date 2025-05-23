/* eslint-disable no-undef */
"use client";

import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface CounterProps {
  target: number;
  speed?: number;
}

const Counter: React.FC<CounterProps> = ({ target, speed = 50 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= target) return; 

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [count, target, speed]);

  return (
    <Typography variant="count" color="custom.white1" display={"block"}>
      {count}
    </Typography>
  );
};

export default Counter;

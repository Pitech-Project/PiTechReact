"use client";

import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface CounterProps {
  target: number;
  speed?: number; // Optional speed parameter
}

const Counter: React.FC<CounterProps> = ({ target, speed = 50 }) => {
    
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= target) return; // Stop when target is reached

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, speed);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [count, target, speed]);

  return <Typography variant="count" color="custom.white1" display={'block'}>{count}</Typography> 
};

export default Counter;

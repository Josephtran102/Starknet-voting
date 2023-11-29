import { Button } from "@radix-ui/themes";
import clsx from "clsx";
import React, { useState, MouseEvent, TouchEvent } from "react";
import { isMobile } from "react-device-detect";

type GenericButtonProps = {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export const GenericButton = ({
  label,
  onClick,
  className,
}: GenericButtonProps) => {
  const [isTapped, setIsTapped] = useState(false);

  const handleTouchStart = () => {
    if (isMobile) {
      setIsTapped(true);
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setIsTapped(false);
    }
  };

  return (
    <Button
      className={clsx(className)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  onClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  onClick: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent text-black transition duration-200 shadow-[inset_0_0_0_2px_#616467] hover:bg-[#616467] hover:text-white dark:text-neutral-200 ${otherClasses}`}
      onClick={onClick}
    >
      {position === "left" && <span className="mr-2">{icon}</span>}
      {title}
      {position === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default MagicButton;

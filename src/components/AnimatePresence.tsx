import React, { ReactNode } from 'react';

interface AnimatePresenceProps {
  children: ReactNode;
}

export const AnimatePresence: React.FC<AnimatePresenceProps> = ({ children }) => {
  return (
    <div className="page-enter-active">
      {children}
    </div>
  );
};
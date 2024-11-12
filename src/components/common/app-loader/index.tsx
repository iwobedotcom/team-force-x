import { useEffect, useState } from 'react';

const AppLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 seconds delay - adjust as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary z-[9999]">
      <div className="relative w-24 h-24">
        {/* Outermost circle */}
        <div className="absolute inset-0 rounded-full bg-white/20 animate-[ping_2s_ease-in-out_infinite]" />

        {/* Second circle */}
        <div className="absolute inset-2 rounded-full bg-white/30 animate-[ping_2s_ease-in-out_infinite_200ms]" />

        {/* Third circle */}
        <div className="absolute inset-4 rounded-full bg-white/40 animate-[ping_2s_ease-in-out_infinite_400ms]" />

        {/* Core circle - doesn't animate */}
        <div className="absolute inset-6 rounded-full bg-white animate-[ping_2s_ease-in-out_infinite_600ms]"></div>
      </div>
    </div>
  );
};

export default AppLoader;

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Loader = () => {
  const [loadingMessage, setLoadingMessage] = useState("Loading...");

  const loadingMessages = [
    "Getting ready...",
    "Baking shapes...",
    "Cleaning cobwebs...",
    "Brewing tea...",
    "Charging cursors...",
    "Loading modules...",
    "Fixing bugs...",
    "Optimizing doodles...",
    "Rendering ideas...",
    "Debugging shadows...",
    "Compiling creativity...",
    "Refactoring pixels...",
    "Drawing outlines...",
    "Writing code...",
    "Syncing layers...",
  ];

  // Ensure the message is set once the component mounts (on the client side)
  useEffect(() => {
    const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    setLoadingMessage(randomMessage);
  }, []);

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
      <Image
        src='/assets/maxloader.gif'
        alt='loader'
        width={100}
        height={100}
        className='object-contain'
      />
      <p className='text-sm font-bold text-primary-grey-300'>{loadingMessage}</p>
    </div>
  );
};

export default Loader;

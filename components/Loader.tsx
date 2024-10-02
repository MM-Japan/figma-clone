import Image from "next/image";


const loadingMessages = [
  "Getting ready...",
  "Baking shapes...",
  "Cleaning cobwebs...",
  "Brewing tea...",
  "Charging cursors...",
  "Loading modules...",
  "Fixing bugs...",
  "Refactoring pixels...",
  "Compiling creativity...",
  "Rendering ideas...",
  "Stacking layers...",
  "Caching coffee...",
  "Optimizing doodles...",
  "Aligning vectors...",
  "Debugging shadows...",
  "Syncing artboards...",
  "Tidying gradients..."
];

const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
    <Image
      src='/assets/maxloader.gif'
      alt='loader'
      width={100}
      height={100}
      className='object-contain'
    />
    <p className='text-sm font-bold text-primary-grey-300'>{randomMessage}</p>
  </div>
);

export default Loader;

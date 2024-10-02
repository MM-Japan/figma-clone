import Image from "next/image";

const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
    <Image
      src='/assets/maxloader.gif'
      alt='loader'
      width={100}
      height={100}
      className='object-contain'
    />
    <p className='text-sm font-bold text-primary-grey-300'>Getting ready...</p>
  </div>
);

export default Loader;

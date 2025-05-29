const Avatar = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-4'>Avatar Component</h1>
      <p className='text-lg text-gray-700 mb-8'>
        This is a placeholder for the Avatar component documentation.
      </p>
      <img
        src='/images/avatar-placeholder.png'
        alt='Avatar Placeholder'
        className='w-32 h-32 rounded-full shadow-lg'
      />
    </div>
  );
};
export default Avatar;

const BorderRadii = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Border Radii</h1>
      <p className='text-gray-700'>
        Border radii are used to create rounded corners on elements. You can use
        the following classes to apply border radii:
      </p>
      <div className='grid grid-cols-2 gap-4'>
        <div className='rounded-none bg-gray-200 p-4'>Rounded None</div>
        <div className='rounded-sm bg-gray-200 p-4'>Rounded Small</div>
        <div className='rounded-md bg-gray-200 p-4'>Rounded Medium</div>
        <div className='rounded-lg bg-gray-200 p-4'>Rounded Large</div>
        <div className='rounded-xl bg-gray-200 p-4'>Rounded Extra Large</div>
        <div className='rounded-full bg-gray-200 p-4'>Rounded Full</div>
      </div>
    </div>
  );
};
export default BorderRadii;

const Shadows = () => {
  return (
    <div className='shadows-page'>
      <h1>Shadows</h1>
      <p>Shadows are used to create depth and hierarchy in the design.</p>
      <div
        className='shadow-example'
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
        Example Shadow
      </div>
    </div>
  );
};
export default Shadows;

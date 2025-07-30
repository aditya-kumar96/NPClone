function Loader() {
    const style = 'w-16 h-16 border-8 border-blue-400 border-t-transparent rounded-full animate-spin';
    return (
      <div className="flex flex-col justify-center items-center  min-h-[300px]">
        {/* Spinner */}
        <div className={style} aria-label="loading" role="status" />
        {/* Loading text */}
        <span className="text-blue-600 font-medium">Loading...</span>
      </div>
    );
  }
  
  export default Loader;
  
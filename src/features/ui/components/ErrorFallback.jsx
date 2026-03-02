

function ErrorFallback(prop) {
  const { err } = prop;

 
  return (
    <div>
      {err && (
         <div className="text-red-500 text-center text-xl">
         {err.response?.data?.status_message || err.message}
         </div>

       
      )}
    </div>
  );
}

export default ErrorFallback;

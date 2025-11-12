export default function NameHeader() {
  return (
    <div className="bg-black/70 p-4 md:p-6 md:px-20 lg:px-40 rounded-xl text-center m-4 mb-1 md:mb-4 animate-slideInUp opacity-0">
      <div>
        <span 
          className="text-3xl md:text-4xl font-bold animate-fadeIn opacity-0"   
          style={{
            animationDelay: "0.5s",
          }}
        >
          Hi! I'm Kamil
        </span>
        <br />
        <span 
          className="text-md md:text-xl animate-fadeIn opacity-0"
          style={{
            animationDelay: "0.8s",
          }}
        >
          Software Developer
        </span>
      </div>
    </div>
  );
}
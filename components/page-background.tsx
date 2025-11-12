export default function PageBackground() {
  return (
    <video 
      autoPlay 
      muted 
      loop 
      playsInline 
      className="fixed right-0 bottom-0 min-h-full min-w-full object-cover hue-rotate-270 -z-10"
    >
        <source src="background.mp4" type="video/mp4"/>
    </video>
  );
}
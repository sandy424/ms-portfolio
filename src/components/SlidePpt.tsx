type SlideProps = {
  slideId: string;
};

export default function SlidePpt({slideId}:SlideProps) {
  return(
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded=lg overflow-hidden shadow-md mt-12">
      <iframe 
      src={`https://docs.google.com/presentation/d/${slideId}/embed?start=false&loop=false&delayms=3000`}
      className="absolute inset-0 w-full h-full"
      allowFullScreen
      loading="lazy" />
    </div>
  )
}
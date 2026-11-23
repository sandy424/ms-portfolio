type SlideProps = {
  slideId: string;
};

export default function SlidePpt({slideId}:SlideProps) {
  return(
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line bg-surface">
      <iframe 
      src={`https://docs.google.com/presentation/d/${slideId}/embed?start=false&loop=false&delayms=3000`}
      title="발표 자료"
      className="absolute inset-0 h-full w-full"
      allowFullScreen
      loading="lazy" />
    </div>
  )
}
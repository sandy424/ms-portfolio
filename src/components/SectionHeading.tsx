import { reveal } from "../lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div {...reveal()} className="max-w-2xl">
      <p className="font-serif text-2xl italic leading-none text-muted sm:text-[28px]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-sub sm:text-lg">{description}</p>
      )}
    </div>
  );
}

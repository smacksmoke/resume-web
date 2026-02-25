import Image from 'next/image';

export function HeroSection() {
  return (
    <main className="flex min-h-[calc(100vh-53px)] items-start justify-center px-4 pt-12 md:pt-16">
      <Image
        src="/images/student-card.jpg"
        alt="HSE Student Card — Danil Kazantsev"
        width={2082}
        height={1326}
        className="w-full max-w-[390px]"
        priority
      />
    </main>
  );
}

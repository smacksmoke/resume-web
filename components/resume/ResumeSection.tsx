import Image from 'next/image';

export function ResumeSection() {
  return (
    <main className="flex min-h-[calc(100vh-53px)] items-start justify-center px-4 pt-12 md:pt-16">
      <Image
        src="/images/resume-parchment.jpeg"
        alt="Resume — Danil Kazantsev"
        width={1024}
        height={1024}
        className="w-full max-w-[560px]"
        priority
      />
    </main>
  );
}

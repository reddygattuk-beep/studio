import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh w-full items-center justify-center bg-background px-6">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-10">
        
        {/* Mobile: Text First */}
        <div className="flex flex-col items-center justify-center text-center lg:hidden">
            <h1 className="font-extrabold leading-tight tracking-tighter">
                <span className="block" style={{ fontSize: 'clamp(18px, 2.2vw, 28px)' }}>👋 Hey</span>
                <span className="block text-foreground" style={{ fontSize: 'clamp(22px, 2.6vw, 34px)' }}>I am Keshava</span>
                <span className="block font-medium text-primary" style={{ fontSize: 'clamp(16px, 1.8vw, 22px)' }}>
                VLSI Engineer
                </span>
            </h1>
        </div>

        {/* Desktop: Photo First */}
        <div className="relative mx-auto flex h-full w-full max-w-md items-center justify-center py-6 lg:max-w-none lg:py-0">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg shadow-primary/10">
            <Image
              src="https://9du0c01mm4og13n7.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-16%20at%2013.41.42_ed2b7a57.jpg"
              alt="Keshava Reddygattu"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="z-0"
              priority
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          </div>
        </div>

        {/* Desktop: Text Second */}
        <div className="hidden items-center justify-center text-left lg:flex">
             <h1 className="font-extrabold leading-tight tracking-tighter">
                <span className="block" style={{ fontSize: 'clamp(18px, 2.2vw, 28px)' }}>👋 Hey</span>
                <span className="block text-foreground" style={{ fontSize: 'clamp(22px, 2.6vw, 34px)' }}>I am Keshava</span>
                <span className="block font-medium text-primary" style={{ fontSize: 'clamp(16px, 1.8vw, 22px)' }}>
                VLSI Engineer
                </span>
            </h1>
        </div>

      </div>
    </section>
  );
}

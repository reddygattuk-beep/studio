import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh w-full items-center justify-center bg-background">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-12 px-6 lg:grid-cols-2">
        {/* Mobile: Text First */}
        <div className="flex flex-col items-center justify-center text-center lg:hidden">
          <div className="py-12">
            <h1 className="text-5xl font-extrabold tracking-tighter text-foreground sm:text-7xl">
              <span className="block">👋 Hey</span>
              <span className="block">I am Keshava</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                VLSI Engineer
              </span>
            </h1>
          </div>
        </div>

        {/* Both Mobile & Desktop: Photo */}
        <div className="relative mx-auto flex h-full w-full max-w-md items-center justify-center py-6 lg:py-0">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
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
          <div className="py-12">
            <h1 className="text-6xl font-extrabold tracking-tighter text-foreground xl:text-8xl">
              <span className="block">👋 Hey</span>
              <span className="block">I am Keshava</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                VLSI Engineer
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

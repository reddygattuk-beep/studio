import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh w-full items-center justify-center bg-background px-6">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* Desktop: Photo First */}
        <div className="relative mx-auto hidden w-full max-w-[19rem] items-center justify-center py-6 lg:flex lg:py-0">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg shadow-primary/10 transition-all duration-300 hover:shadow-primary/20 hover:scale-105">
            <Image
              src="/kesha.jpg"
              alt="Keshava Reddygattu"
              width={500}
              height={500}
              fill
              className="z-0 object-cover object-center"
              priority
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left space-y-4">
          {/* Mobile Photo */}
          <div className="relative mx-auto flex h-full w-full max-w-[19rem] items-center justify-center py-6 lg:hidden lg:max-w-none lg:py-0">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg shadow-primary/10 transition-all duration-300 hover:shadow-primary/20 hover:scale-105">
              <Image
                src="/kesha.jpg"
                alt="Keshava Reddygattu"
                width={500}
                height={500}
                fill
                className="z-0 object-cover object-center"
                priority
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="font-extrabold leading-tight tracking-tighter">
              <span className="block" style={{ fontSize: '50px' }}>👋 Hey</span>
              <span
                className="block text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                style={{ filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.5))', fontSize: '70px' }}
              >
                I am Keshava
              </span>
              <span className="block font-medium text-primary" style={{ fontSize: '40px' }}>
                VLSI Engineer
              </span>
            </h1>
            <p className="max-w-md font-bold text-muted-foreground" style={{ fontSize: '20px' }}>
              I design chips that think fast and sip power. From architecture through verification and layout, I turn complexity into elegant hardware.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

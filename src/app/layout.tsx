import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const siteConfig = {
  title: 'Keshava Reddygattu | VLSI & Digital Design Engineer',
  description: 'The professional portfolio of Keshava Reddygattu, a VLSI and Digital Design Engineer specializing in RTL design, low-power techniques, and hardware acceleration.',
  url: 'https://circuitflow.example.com', // Replace with your actual domain
  author: 'Keshava Reddygattu',
  image: 'https://circuitflow.example.com/og-image.png', // Replace with your actual OG image URL
  twitterHandle: '@kesh7044', // Replace with your Twitter handle
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | Keshava Reddygattu`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{
      url: siteConfig.image,
      width: 1200,
      height: 630,
      alt: 'Keshava Reddygattu Portfolio Banner',
    }],
    siteName: 'CircuitFlow Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Keshava Reddygattu',
  url: siteConfig.url,
  jobTitle: 'VLSI & Digital Design Engineer',
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Illinois Institute of Technology',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'JNTU',
    }
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'InnoMountain'
  },
  sameAs: [
    'https://www.linkedin.com/in/kesh7044/',
    'https://github.com/kesh7044'
  ]
};

const skillsBackgroundScript = `
(function () {
  const section = document.getElementById("skills");
  if (!section) return;

  // Check if canvas already exists to avoid duplicates on HMR
  if (section.querySelector('.skills-bg')) return;

  const canvas = document.createElement("canvas");
  canvas.className = "skills-bg";
  section.prepend(canvas);

  const ctx = canvas.getContext("2d");
  let raf = 0;

  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  const resize = () => {
    const r = section.getBoundingClientRect();
    canvas.style.width = r.width + "px";
    canvas.style.height = r.height + "px";
    canvas.width = Math.floor(r.width * dpr);
    canvas.height = Math.floor(r.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  
  const ro = new ResizeObserver(resize);
  ro.observe(section);
  resize();

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const waves = [
    { color: "rgba(34, 211, 238, 0.12)", amp: 0.06, period: 260, speedSec: 30, y: 0.33 },
    { color: "rgba(56, 189, 248, 0.12)", amp: 0.05, period: 320, speedSec: 27, y: 0.55 },
    { color: "rgba(20, 184, 166, 0.10)", amp: 0.04, period: 380, speedSec: 35, y: 0.75 },
  ];

  function draw(tSec) {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    waves.forEach((wv, idx) => {
      const amp = h * wv.amp;
      const freq = (2 * Math.PI) / wv.period;
      const phase = (2 * Math.PI * tSec) / wv.speedSec * (idx % 2 ? 1 : -1);
      ctx.beginPath();
      const y0 = h * wv.y;
      for (let x = 0; x <= w; x += 2) {
        const y = y0 + Math.sin(x * freq + phase + idx * 0.6) * amp;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = wv.color;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = wv.color.replace("0.12", "0.25").replace("0.10", "0.20");
      ctx.shadowBlur = 6;
      ctx.stroke();
      ctx.shadowBlur = 0;
    });
  }

  if (reduceMotion) {
    draw(0);
    return;
  }

  const start = performance.now();
  const loop = (now) => {
    draw((now - start) / 1000);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  // No need for beforeunload, React strict mode in dev can cause issues
  // but this is fine for production. The resize observer will handle cleanup.
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
         <script
          id="skills-background-script"
          dangerouslySetInnerHTML={{ __html: skillsBackgroundScript }}
        />
      </body>
    </html>
  );
}

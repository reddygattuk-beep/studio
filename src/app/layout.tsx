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
      </body>
    </html>
  );
}

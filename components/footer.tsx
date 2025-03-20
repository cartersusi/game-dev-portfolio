import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="row-start-3 flex gap-6 p-6 flex-wrap items-center justify-center">
        <p
          className="flex items-center gap-2"
        >
          <Image
            aria-hidden
            src="/raccoon.jpg"
            alt="Raccoon"
            width={16}
            height={16}
          />
          Braeden Susi
        </p>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/braeden-susi-ba9b7921a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="Linkedin Icon"
            width={16}
            height={16}
          />
          Linkedin
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/PopSusi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github Icon"
            width={16}
            height={16}
          />
          Github
        </Link>
      </footer>
    )
}
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gold-500/10 py-6 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-ink-700/60 dark:text-white/30">
        <p>
          © {year}{' '}
          <span className="text-gold-600 dark:text-gold-500 font-medium">Thaddeus Ugwu</span>{' '}
          · ThadDev Studios LLC
        </p>
        <p>
          Built with{' '}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-500 transition-colors"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}

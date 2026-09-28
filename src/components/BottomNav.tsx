import { Button } from './Button';

export function BottomNav() {
  return (
    <nav
      aria-label="Floating navigation"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 sm:px-8 py-2 shadow-2xl flex items-center gap-5 sm:gap-6 border border-[#272B33] backdrop-blur-md bg-[#171A1F]/90"
    >
      <a
        href="#top"
        className="font-mondwest text-2xl font-semibold text-[#F5F5F5] hover:text-[#6C8EFF] transition-colors select-none"
        aria-label="Back to top"
      >
        A
      </a>
      <Button
        variant="primary"
        href="mailto:alif.agil@binus.ac.id"
        className="py-2.5 px-6 text-sm"
      >
        Start a chat
      </Button>
    </nav>
  );
}

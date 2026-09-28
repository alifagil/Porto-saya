import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-14 pb-28 sm:pb-32 px-6 max-w-[1200px] mx-auto border-t border-[#272B33]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
        {/* Brand & Brief Info */}
        <div className="md:col-span-6 flex flex-col items-start">
          <a
            href="#top"
            className="font-mondwest text-2xl sm:text-3xl font-semibold text-[#F5F5F5] hover:text-[#6C8EFF] transition-colors tracking-tight select-none"
          >
            Alif Agil
          </a>
          <p className="font-mono text-xs sm:text-sm text-[#9CA3AF] mt-2 max-w-sm leading-relaxed">
            Computer Science student specializing in Intelligent Systems &amp; Practical Software Engineering.
          </p>
          <a
            href="mailto:alif.agil@binus.ac.id"
            className="inline-flex items-center gap-2 mt-4 text-xs sm:text-sm font-mono text-[#6C8EFF] hover:text-[#7C8CFF] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>alif.agil@binus.ac.id</span>
          </a>
        </div>

        {/* Links Navigation */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <div className="font-mono text-xs uppercase tracking-wider text-[#9CA3AF] mb-1 font-semibold">
            Navigation
          </div>
          <a
            href="#work"
            className="text-sm sm:text-base text-[#9CA3AF] hover:text-[#6C8EFF] transition-colors font-medium"
          >
            Projects
          </a>
          <a
            href="#approach"
            className="text-sm sm:text-base text-[#9CA3AF] hover:text-[#6C8EFF] transition-colors font-medium"
          >
            About &amp; Approach
          </a>
          <a
            href="#skills"
            className="text-sm sm:text-base text-[#9CA3AF] hover:text-[#6C8EFF] transition-colors font-medium"
          >
            Skills &amp; Toolkit
          </a>
          <a
            href="#education"
            className="text-sm sm:text-base text-[#9CA3AF] hover:text-[#6C8EFF] transition-colors font-medium"
          >
            Education
          </a>
        </div>

        {/* Social / Connect */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <div className="font-mono text-xs uppercase tracking-wider text-[#9CA3AF] mb-1 font-semibold">
            Connect
          </div>
          <a
            href="https://www.linkedin.com/in/alif-agil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-[#9CA3AF] hover:text-[#6C8EFF] transition-colors font-medium inline-flex items-center gap-1.5 group"
          >
            <Linkedin className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#6C8EFF] transition-colors" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://github.com/alifagil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-[#9CA3AF] hover:text-[#6C8EFF] transition-colors font-medium inline-flex items-center gap-1.5 group"
          >
            <Github className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#6C8EFF] transition-colors" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="mailto:alif.agil@binus.ac.id"
            className="text-sm sm:text-base text-[#9CA3AF] hover:text-[#6C8EFF] transition-colors font-medium inline-flex items-center gap-1.5 group"
          >
            <Mail className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#6C8EFF] transition-colors" />
            <span>Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="pt-6 border-t border-[#272B33]/80 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-[#9CA3AF]">
        <div>
          &copy; {currentYear} Alif Agil. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-[#9CA3AF]/80">
          <span>Jakarta, Indonesia</span>
        </div>
      </div>
    </footer>
  );
}

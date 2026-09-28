import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  note: string;
}

const educationHistory: EducationItem[] = [
  {
    year: '2024 — Present',
    institution: 'BINUS University',
    degree: 'Bachelor of Computer Science',
    note: 'Focused on Intelligent Systems, Machine Learning algorithms, and applied software engineering solutions.',
  },
];

export function EducationSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section ref={ref} id="education" className="w-full py-16 px-6 max-w-[1200px] mx-auto">
      {/* Subtle section label */}
      <div
        className={`font-mono text-xs md:text-sm text-[#6C8EFF] font-semibold mb-2 tracking-normal uppercase ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.1s' }}
      >
        Latar Belakang
      </div>

      {/* Heading */}
      <h2
        className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#F5F5F5] tracking-tight mb-10 md:mb-12 ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.2s' }}
      ><span className="font-mondwest italic font-normal text-[#6C8EFF]">EDUCATION</span>
      </h2>

      {/* Clean Minimalist List inside Dark Card */}
      <div className="bg-[#171A1F] rounded-2xl md:rounded-3xl border border-[#272B33] shadow-lg overflow-hidden px-6 sm:px-8 md:px-10 divide-y divide-[#272B33]">
        {educationHistory.map((item, index) => (
          <div
            key={index}
            className={`py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline transition-colors hover:bg-[#1D2127] ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${0.15 * (index + 1)}s` }}
          >
            {/* Year / Period */}
            <div className="md:col-span-3 font-mono text-xs md:text-sm text-[#6C8EFF] font-semibold">
              {item.year}
            </div>

            {/* Institution & Degree */}
            <div className="md:col-span-5">
              <h3 className="font-mondwest text-xl md:text-2xl text-[#F5F5F5] font-semibold leading-snug">
                {item.institution}
              </h3>
              <p className="text-sm md:text-base text-[#9CA3AF] mt-0.5">
                {item.degree}
              </p>
            </div>

            {/* Note / Description */}
            <div className="md:col-span-4 text-xs md:text-sm text-[#9CA3AF] leading-relaxed mt-1 md:mt-0">
              {item.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

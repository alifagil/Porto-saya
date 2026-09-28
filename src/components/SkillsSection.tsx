import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface SkillItem {
  name: string;
  note?: string;
}

interface SkillGroup {
  category: string;
  items: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Software Development',
    items: [
      { name: 'Python' },
      { name: 'Flask' },
      { name: 'Git' },
    ],
  },
  {
    category: 'Data & Machine Learning',
    items: [
      { name: 'SQL' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Scikit-learn' },
      { name: 'Machine Learning' },
      { name: 'NLP' },
      { name: 'Data Preprocessing' },
      { name: 'Data Visualization' },
    ],
  },
  {
    category: 'Testing & Automation',
    items: [
      { name: 'Selenium', note: 'Beginner' },
      { name: 'Debugging' },
      { name: 'Functional Testing' },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Problem Solving' },
      { name: 'Analytical Thinking' },
      { name: 'Teamwork' },
      { name: 'Communication' },
      { name: 'Adaptability' },
      { name: 'Time Management' },
    ],
  },
];

export function SkillsSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section ref={ref} id="skills" className="w-full py-16 px-6 max-w-[1200px] mx-auto">
      {/* Subtitle label */}
      <div
        className={`font-mono text-xs md:text-sm text-[#6C8EFF] font-semibold mb-2 tracking-normal uppercase ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.1s' }}
      >
        Capabilities & Toolkit
      </div>

      {/* Main Heading */}
      <h2
        className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#F5F5F5] tracking-tight mb-10 md:mb-12 ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.2s' }}
      >
        Skills & <span className="font-mondwest italic font-normal text-[#6C8EFF]">Expertise</span>
      </h2>

      {/* Grid of skill categories matching dark card style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {skillGroups.map((group, groupIndex) => (
          <div
            key={group.category}
            className={`bg-[#171A1F] hover:bg-[#1D2127] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-9 border border-[#272B33] hover:border-[#6C8EFF]/40 shadow-lg transition-all duration-300 flex flex-col justify-between ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${0.2 + groupIndex * 0.1}s` }}
          >
            <div>
              {/* Category title */}
              <h3 className="font-mondwest text-2xl md:text-[26px] font-semibold text-[#F5F5F5] tracking-tight mb-4">
                {group.category}
              </h3>

              {/* Clean, unboxed text separated with subtle middle dots */}
              <p className="text-sm sm:text-base md:text-[17px] font-semibold text-[#F5F5F5] leading-relaxed tracking-tight">
                {group.items.map((item, idx) => (
                  <span key={item.name}>
                    {idx > 0 && (
                      <span className="text-[#6C8EFF] font-semibold mx-2 select-none">·</span>
                    )}
                    <span>
                      {item.name}
                      {item.note && (
                        <span className="italic font-normal text-[#9CA3AF] ml-1">
                          ({item.note})
                        </span>
                      )}
                    </span>
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

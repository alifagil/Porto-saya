import { ArrowUpRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { ProjectData } from '../data/projectsData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectData) => void;
  projects: ProjectData[];
}

function ProjectItem({
  project,
  index,
  onSelect,
}: {
  project: ProjectData;
  index: number;
  onSelect: (p: ProjectData) => void;
}) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className={`w-full flex flex-col group cursor-pointer ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.1 + index * 0.15}s` }}
      onClick={() => onSelect(project)}
    >
      {/* Project Meta & Heading */}
      <div className="mb-4 md:mb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 px-1">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono text-[#6C8EFF] font-semibold uppercase tracking-wider">
              {project.projectNumber}
            </span>
            <span className="text-[#272B33]">•</span>
            <span className="text-xs font-mono text-[#9CA3AF]">
              {project.yearAccomplished}
            </span>
          </div>
          <h3 className="font-mondwest text-2xl md:text-3xl lg:text-4xl font-semibold text-[#F5F5F5] tracking-tight group-hover:text-[#6C8EFF] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-[#9CA3AF] mt-1 max-w-2xl">
            {project.shortDescription}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-end">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full bg-[#171A1F] text-[#F5F5F5] group-hover:bg-[#6C8EFF] group-hover:text-[#0B0D10] transition-all duration-300 border border-[#272B33] group-hover:border-[#6C8EFF] shadow-sm font-medium">
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>

      {/* Cinematic Showcase Frame */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[520px] rounded-2xl md:rounded-3xl overflow-hidden border border-[#272B33] bg-[#111418] shadow-2xl group-hover:border-[#6C8EFF]/40 transition-all duration-500">
        {/* Main Image */}
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Dark Gradient Overlays for depth and text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl md:rounded-3xl pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-tight bg-[#171A1F]/90 backdrop-blur-md text-[#F5F5F5] border border-[#272B33] shadow-sm font-medium">
            {project.role}
          </span>
        </div>

        {/* Bottom Floating Interactive Button */}
        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 flex items-center pointer-events-none">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#171A1F]/90 backdrop-blur-md border border-[#272B33] text-[#F5F5F5] text-xs font-mono font-semibold shadow-lg transform translate-y-1 opacity-95 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-[#6C8EFF] group-hover:text-[#0B0D10] group-hover:border-[#6C8EFF] transition-all duration-300">
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection({ onSelectProject, projects }: ProjectsSectionProps) {
  return (
    <section id="work" className="max-w-[1200px] w-full px-6 py-12 md:py-16 mx-auto">
      {/* Section Header */}
      <div className="mb-10 md:mb-14">
        <div className="font-mono text-xs md:text-sm text-[#6C8EFF] font-semibold mb-2 tracking-normal uppercase">
          Work & Case Studies
        </div>
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#F5F5F5] tracking-tight">
          Featured <span className="font-mondwest italic font-normal text-[#6C8EFF]">Projects</span>
        </h2>
        <p className="text-sm md:text-base text-[#9CA3AF] max-w-2xl mt-2">
          A collection of software, data, and intelligent systems projects built through practical problem-solving, analysis, and iterative development.
        </p>
      </div>

      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((project, idx) => (
          <ProjectItem
            key={project.id}
            project={project}
            index={idx}
            onSelect={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
}

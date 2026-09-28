import { ArrowLeft, ExternalLink, Github, Presentation, ArrowUpRight } from 'lucide-react';
import { ProjectData } from '../data/projectsData';

interface ProjectDetailModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onSelectProject: (p: ProjectData) => void;
  allProjects: ProjectData[];
}

export function ProjectDetailModal({
  project,
  onClose,
  onSelectProject,
  allProjects,
}: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div
      id="project-detail-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0D10]/85 backdrop-blur-md flex justify-center p-3 sm:p-6 md:p-10 animate-fade-in"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'project-detail-overlay') {
          onClose();
        }
      }}
    >
      <div className="bg-[#171A1F] text-[#F5F5F5] w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-2xl border border-[#272B33] my-auto overflow-hidden flex flex-col relative max-h-[92vh]">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-[#171A1F]/95 backdrop-blur-md px-6 sm:px-10 py-4 border-b border-[#272B33] flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-[#9CA3AF] hover:text-[#6C8EFF] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </button>

          <div className="font-mono text-xs sm:text-sm text-[#6C8EFF] font-semibold">
            {project.projectNumber}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 sm:py-10 space-y-10">
          {/* Top Section: Two Column Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Project Meta Info */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1">
                  Project Title
                </div>
                <h1 className="font-mondwest text-3xl sm:text-4xl text-[#F5F5F5] font-semibold leading-tight">
                  {project.title}
                </h1>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1">
                  Year Accomplished
                </div>
                <div className="text-sm font-medium text-[#F5F5F5]">
                  {project.yearAccomplished}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1">
                  Role in Group Project
                </div>
                <div className="text-sm font-semibold text-[#F5F5F5]">
                  {project.role}
                </div>
              </div>

              {project.researchPaperTitle && (
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1">
                    Research Paper Title
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#9CA3AF] italic">
                    {project.researchPaperTitle}
                  </div>
                </div>
              )}

              {/* Key Learning Section */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-3">
                  Key Learning
                </div>
                <div className="space-y-3.5">
                  {project.keyLearnings.map((item, idx) => (
                    <div key={idx} className="text-xs sm:text-[13px] leading-relaxed">
                      <div className="font-semibold text-[#F5F5F5] tracking-tight">
                        {item.title}
                      </div>
                      <div className="text-[#9CA3AF] mt-0.5">
                        {item.description.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return (
                              <strong key={i} className="font-semibold text-[#F5F5F5]">
                                {part.slice(2, -2)}
                              </strong>
                            );
                          }
                          return part;
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Type */}
              <div className="pt-2 border-t border-[#272B33]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1">
                  Project Type
                </div>
                <div className="text-xs sm:text-sm italic text-[#9CA3AF]">
                  {project.projectType}
                </div>
              </div>

              {/* Publication Links */}
              <div className="pt-2 border-t border-[#272B33] space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-2">
                  Publication Link
                </div>

                {project.links.demo && (
                  <div className="text-xs sm:text-[13px] flex items-center gap-1.5 flex-wrap">
                    <span className="font-medium text-[#F5F5F5]">Demo Apps:</span>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6C8EFF] hover:text-[#7C8CFF] underline underline-offset-2 break-all inline-flex items-center gap-1 font-mono"
                    >
                      <span>{project.links.demo}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </div>
                )}

                {project.links.github && (
                  <div className="text-xs sm:text-[13px] flex items-center gap-1.5 flex-wrap">
                    <span className="font-medium text-[#F5F5F5]">Github:</span>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6C8EFF] hover:text-[#7C8CFF] underline underline-offset-2 break-all inline-flex items-center gap-1 font-mono"
                    >
                      <Github className="w-3 h-3 shrink-0" />
                      <span>{project.links.github}</span>
                    </a>
                  </div>
                )}

                {project.links.pitchDeck && (
                  <div className="text-xs sm:text-[13px] flex items-center gap-1.5 flex-wrap">
                    <span className="font-medium text-[#F5F5F5]">Pitch Deck:</span>
                    <a
                      href={project.links.pitchDeck}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6C8EFF] hover:text-[#7C8CFF] underline underline-offset-2 break-all inline-flex items-center gap-1 font-mono"
                    >
                      <Presentation className="w-3 h-3 shrink-0" />
                      <span>{project.links.pitchDeck}</span>
                    </a>
                  </div>
                )}

                {project.links.presentation && (
                  <div className="text-xs sm:text-[13px] flex items-center gap-1.5 flex-wrap">
                    <span className="font-medium text-[#F5F5F5]">Model Presentation:</span>
                    <a
                      href={project.links.presentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6C8EFF] hover:text-[#7C8CFF] underline underline-offset-2 break-all inline-flex items-center gap-1 font-mono"
                    >
                      <Presentation className="w-3 h-3 shrink-0" />
                      <span>{project.links.presentation}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Project Description */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-2">
                  Project Description
                </div>
                <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#9CA3AF]">
                  {project.description.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      {paragraph.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={i} className="font-semibold text-[#F5F5F5]">
                              {part.slice(2, -2)}
                            </strong>
                          );
                        }
                        return part;
                      })}
                    </p>
                  ))}
                </div>
              </div>

              {/* Single Large Focused Hero Image */}
              <div className="space-y-2 pt-2">
                <div className="w-full overflow-hidden rounded-2xl shadow-xl border border-[#272B33] bg-[#111418]">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[520px] object-cover object-top hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                <div className="text-center text-xs font-mono text-[#9CA3AF] italic">
                  {project.title} Platform Interface & Architecture Preview
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Switcher: Browse Other Projects */}
          <div className="pt-8 border-t border-[#272B33]">
            <div className="text-xs font-mono uppercase text-[#9CA3AF] mb-3">
              Explore Other Projects:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {allProjects.map((p) => {
                const isCurrent = p.id === project.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      onSelectProject(p);
                    }}
                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isCurrent
                        ? 'bg-[#252B45] text-[#6C8EFF] border-[#6C8EFF]/60 shadow-lg font-medium'
                        : 'bg-[#111418] hover:bg-[#1D2127] text-[#F5F5F5] border-[#272B33]'
                    }`}
                  >
                    <div>
                      <div className={`text-[11px] font-mono ${isCurrent ? 'text-[#6C8EFF]' : 'text-[#9CA3AF]'}`}>
                        {p.projectNumber}
                      </div>
                      <div className="font-mondwest text-lg font-semibold truncate mt-0.5">
                        {p.title}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs mt-3 pt-2 border-t border-current/15">
                      <span>{p.role}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

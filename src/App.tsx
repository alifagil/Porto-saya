import { useState } from 'react';
import { useInViewAnimation } from './hooks/useInViewAnimation';
import { Button } from './components/Button';
import { TestimonialSection } from './components/TestimonialSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PROJECTS_DATA, ProjectData } from './data/projectsData';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <div id="top" className="min-h-screen bg-[#0B0D10] text-[#F5F5F5] font-body selection:bg-[#6C8EFF] selection:text-[#0B0D10]">
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        className="w-full px-6 pt-12 md:pt-16 flex flex-col items-center justify-center text-center"
      >
        <div className="w-full max-w-[440px] mx-auto flex flex-col items-center">
          {/* Logo text */}
          <h1
            className={`font-mondwest text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#F5F5F5] tracking-normal mb-6 md:mb-8 mt-2 select-none ${
              heroInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Alif Agil
          </h1>

          {/* Tagline / Subtitle */}
          <p
            className={`font-mono text-xs md:text-sm text-[#9CA3AF] mb-2 tracking-normal ${
              heroInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Software Engineer • Intelligent Systems
          </p>

          {/* Main Heading */}
          <div
            className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#F5F5F5] tracking-tight whitespace-nowrap mb-2 ${
              heroInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <div>
              Building <span className="font-mondwest italic font-normal text-[#6C8EFF]">intelligent systems</span>,
            </div>
            <div>
              the <span className="font-mondwest italic font-normal text-[#6C8EFF]">practical way.</span>
            </div>
          </div>

          {/* Description: Hero Bio */}
          <div
            className={`flex flex-col gap-4 text-sm md:text-base text-[#9CA3AF] leading-relaxed mt-5 md:mt-6 text-center ${
              heroInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <p>
              I am a Computer Science student at BINUS University specializing in Intelligent Systems. I build practical software solutions through software development, data analysis, and machine learning, with a focus on solving problems through thoughtful engineering and reliable results.
            </p>
          </div>

          {/* Two buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 w-full justify-center ${
              heroInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <Button variant="primary" href="#work">
              View projects
            </Button>
            <Button variant="secondary" href="#approach">
              About Me
            </Button>
          </div>
        </div>
      </section>

      {/* 2. SHORT PERSONAL DESCRIPTION / APPROACH SECTION */}
      <section id="approach" className="w-full max-w-[840px] mx-auto px-6 pt-12 md:pt-16 pb-6 text-center">
        <div className="font-mono text-xs md:text-sm text-[#6C8EFF] font-semibold mb-3 tracking-normal uppercase">
          Approach & Mindset
        </div>
        <p className="text-lg md:text-2xl text-[#F5F5F5] font-normal leading-relaxed mb-8 md:mb-10">
          I enjoy turning real-world problems into practical solutions — combining software engineering, data analysis, and intelligent systems when they can create genuine value.
        </p>

        {/* Continuous Learning Block */}
        <div className="rounded-2xl bg-[#171A1F] border border-[#272B33] p-6 md:p-8 text-center shadow-lg">
          <h3 className="font-mono text-xs md:text-sm text-[#9CA3AF] mb-3 uppercase tracking-wide">
            Continuous Learning
          </h3>
          <p className="text-sm md:text-base text-[#9CA3AF] leading-relaxed max-w-[680px] mx-auto mb-6">
            I believe growth comes from consistently learning, adapting, and improving. Throughout my studies, I’ve worked to build stronger academic and technical foundations each semester, treating every challenge as an opportunity to improve.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-3 py-2 px-4 rounded-xl bg-[#111418] border border-[#272B33] text-xs md:text-sm font-mono text-[#F5F5F5]">
            <span className="text-[#F5F5F5] font-semibold">Learn</span>
            <span className="text-[#6C8EFF] font-bold">→</span>
            <span className="text-[#F5F5F5] font-semibold">Apply</span>
            <span className="text-[#6C8EFF] font-bold">→</span>
            <span className="text-[#F5F5F5] font-semibold">Improve</span>
            <span className="text-[#6C8EFF] font-bold">→</span>
            <span className="text-[#F5F5F5] font-semibold">Repeat</span>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION (Primary Focus - Placed immediately after Hero & Approach) */}
      <ProjectsSection
        projects={PROJECTS_DATA}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 4. ABOUT / PHILOSOPHY QUOTE SECTION */}
      <TestimonialSection />

      {/* 6. SKILLS & CAPABILITIES SECTION */}
      <SkillsSection />

      {/* 7. RIWAYAT PENDIDIKAN (EDUCATION) SECTION */}
      <EducationSection />

      {/* 7. PARTNER SECTION */}
      <PartnerSection />

      {/* 8. FOOTER */}
      <Footer />

      {/* 9. FIXED BOTTOM NAV */}
      <BottomNav />

      {/* 11. PROJECT DETAIL VIEW / CASE STUDY MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
        allProjects={PROJECTS_DATA}
      />
    </div>
  );
}

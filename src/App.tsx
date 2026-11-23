import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'motion/react';
import { NAV_ITEMS, type SectionSeoKey } from './data/portfolioData';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import LeadershipSection from './components/LeadershipSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const SECTION_THEME_CLASS: Record<SectionSeoKey, string> = {
  home: 'theme-hero',
  about: 'theme-about',
  skills: 'theme-skills',
  projects: 'theme-projects',
  experience: 'theme-experience',
  achievements: 'theme-achievements',
  education: 'theme-education',
  contact: 'theme-contact',
};

const SECTION_THEME_COLOR: Record<SectionSeoKey, string> = {
  home: '#080D1C',
  about: '#F2EFE7',
  skills: '#EAE6F5',
  projects: '#F7F3EA',
  experience: '#E9EDF0',
  achievements: '#FFF0C2',
  education: '#F5F2EB',
  contact: '#171717',
};

export default function App() {
  const [activeNavSection, setActiveNavSection] = useState<string>('home');
  const [activeSeoSection, setActiveSeoSection] = useState<SectionSeoKey>('home');

  useEffect(() => {
    const sectionIds: SectionSeoKey[] = [
      ...(NAV_ITEMS.map((item) => item.id) as SectionSeoKey[]),
      'education',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionSeoKey;
            setActiveSeoSection(id);
            if (id === 'education') {
              setActiveNavSection('achievements');
            } else {
              setActiveNavSection(id);
            }
          }
        });
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeThemeClass = SECTION_THEME_CLASS[activeSeoSection] ?? 'theme-hero';
  const activeThemeColor = SECTION_THEME_COLOR[activeSeoSection] ?? '#080D1C';

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="theme-color" content={activeThemeColor} />
      </Helmet>
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen">
          {/* Skip Navigation Link for Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[#43E5FF] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#080D1C]"
          >
            Skip to main content
          </a>

          <CustomCursor activeThemeClass={activeThemeClass} />
          <Navbar
            activeSection={activeNavSection}
            activeThemeClass={activeThemeClass}
          />

          <main id="main-content" className="relative z-10">
            <HeroSection isSeoActive={activeSeoSection === 'home'} />
            <AboutSection isSeoActive={activeSeoSection === 'about'} />
            <ExpertiseSection isSeoActive={activeSeoSection === 'skills'} />
            <ProjectsSection isSeoActive={activeSeoSection === 'projects'} />
            <ExperienceSection isSeoActive={activeSeoSection === 'experience'} />
            <LeadershipSection isSeoActive={activeSeoSection === 'achievements'} />
            <EducationSection isSeoActive={activeSeoSection === 'education'} />
            <ContactSection isSeoActive={activeSeoSection === 'contact'} />
          </main>

          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </MotionConfig>
    </HelmetProvider>
  );
}

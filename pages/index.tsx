import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { personalInfo, courses, skills, experiences, selfEvaluation } from '../data/profile';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';
import SkillCard from '../components/SkillCard';
import TimelineItem from '../components/TimelineItem';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [issues, setIssues] = useState<any[]>([]);
  const [loadingIssues, setLoadingIssues] = useState(false);

  const tabs = [
    { id: 'about', label: '关于我' },
    { id: 'projects', label: '主修课程' },
    { id: 'skills', label: '技能特长' },
    { id: 'experience', label: '经历' },
    { id: 'thoughts', label: '碎碎念' },
  ];

  useEffect(() => {
    if (activeTab === 'thoughts' && issues.length === 0) {
      setLoadingIssues(true);
      fetch('https://api.github.com/repos/yihangyang666/yihangyang666.github.io/issues?state=open')
        .then(res => res.json())
        .then(data => {
          setIssues(Array.isArray(data) ? data : []);
          setLoadingIssues(false);
        })
        .catch(err => {
          console.error("Failed to fetch issues", err);
          setLoadingIssues(false);
        });
    }
  }, [activeTab]);

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-4 xl:col-span-3">
          <div className="glass-card rounded-2xl p-8 text-center sticky top-24 animate-slide-up">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse-slow blur-md"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 ring-4 ring-white/5">
                <Image
                  src="/image/picture.png"
                  alt={personalInfo.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">{personalInfo.name}</h1>
            <p className="text-primary-light font-medium mb-6">{personalInfo.education} @ {personalInfo.school}</p>

            <div className="space-y-3 text-left bg-white/5 rounded-xl p-5 mb-6 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="w-5 text-center mr-3">🎂</span> {personalInfo.birth}
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-5 text-center mr-3">📍</span> {personalInfo.location}
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-5 text-center mr-3">🎓</span> {personalInfo.major}
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-5 text-center mr-3">📧</span> <span className="truncate">{personalInfo.email}</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <a href="https://github.com/yihangyang666" target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors hover:text-white text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Content Tabs */}
        <div className="lg:col-span-8 xl:col-span-9 animate-fade-in" style={{ animationDelay: '0.2s' }}>

          <div className="flex space-x-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                    px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex-shrink-0
                    ${activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}
                  `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="min-h-[500px]">
            {activeTab === 'about' && (
              <div className="space-y-6 animate-slide-up">
                <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" /></svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="w-1 h-8 bg-primary rounded-full mr-3"></span>
                    自我评价
                  </h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed font-light text-lg">
                    {selfEvaluation.map((item, i) => (
                      <p key={i} className="flex items-start">
                        <span className="mr-3 mt-2 text-primary">❝</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
                {courses.map((course, index) => (
                  <CourseCard key={index} name={course.name} color={course.color} />
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-up">
                {skills.map((skill, index) => (
                  <SkillCard key={index} name={skill.name} type={skill.type} />
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="glass-card p-8 rounded-2xl animate-slide-up">
                <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">我的经历</h2>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <TimelineItem
                      key={index}
                      period={exp.period}
                      title={exp.title}
                      achievement={exp.achievement}
                      details={exp.details}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'thoughts' && (
              <div className="space-y-6 animate-slide-up">
                {loadingIssues ? (
                  <div className="flex justify-center items-center h-40">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : issues.length > 0 ? (
                  issues.map((issue) => (

                    <div key={issue.id} className="glass-card hover:bg-white/5 transition-colors p-6 rounded-xl group cursor-pointer">
                      <Link href={`/post?id=${issue.number}`} className="block">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{issue.title}</h3>
                          <span className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded">
                            {new Date(issue.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="text-gray-400 line-clamp-3 text-sm">
                          {issue.body}
                        </div>
                        <span className="inline-block mt-4 text-primary text-sm hover:underline">Read Article →</span>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-10">暂无内容，请移步 GitHub 查看。</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
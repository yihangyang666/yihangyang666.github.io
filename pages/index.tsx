import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const personalInfo = {
    name: '李墨飞扬',
    birth: '2003.04.03',
    location: '安徽 亳州',
    education: '本科',
    phone: '173-5673-2261',
    email: '286178216@qq.com',
    university: '中北大学',
    major: '数据科学与大数据技术',
  };

  const skills = [
    '数据结构',
    '计算机组成原理',
    '计算机网络',
    '操作系统',
    'Python',
    '大数据处理技术',
    '时间序列分析',
    '数字图像处理',
    '机器学习与数据挖掘',
  ];

  const experiences = [
    {
      period: '2023.01-2024.06',
      title: '计算机科学与技术学院采编部副部',
      details: [
        '主导多场技术讲座与校园活动的采编工作',
        '协助采编部部长完成对新同学的培训工作',
        '带领新同学积极参与学校和学院组织的志愿活动',
      ],
    },
    {
      period: '2023.01-2023.09',
      title: '第四届中国大学生智能照明和智能穿戴创新创业大赛',
      achievement: '决赛一等奖',
    },
    {
      period: '2024.07',
      title: '第七届全国大学生数学数学竞赛暨数学精英挑战赛',
      achievement: '三等奖',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>李墨飞扬的个人网站</title>
        <meta name="description" content="李墨飞扬的个人简历和项目展示" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* 个人信息卡片 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-48 h-48 relative mb-4 md:mb-0 md:mr-6">
              <Image
                src="/avatar.jpg"
                alt="李墨飞扬"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">出生年月：{personalInfo.birth}</p>
                  <p className="text-gray-600">现居城市：{personalInfo.location}</p>
                  <p className="text-gray-600">最高学历：{personalInfo.education}</p>
                  <p className="text-gray-600">联系电话：{personalInfo.phone}</p>
                </div>
                <div>
                  <p className="text-gray-600">邮箱地址：{personalInfo.email}</p>
                  <p className="text-gray-600">学校：{personalInfo.university}</p>
                  <p className="text-gray-600">专业：{personalInfo.major}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 导航标签 */}
        <div className="flex mb-6 border-b">
          <button
            className={`px-4 py-2 ${
              activeTab === 'about'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('about')}
          >
            关于我
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'skills'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('skills')}
          >
            技能特长
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'experience'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('experience')}
          >
            经历
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'projects'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('projects')}
          >
            项目展示
          </button>
        </div>

        {/* 内容区域 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === 'about' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">关于我</h2>
              <p className="text-gray-600 leading-relaxed">
                我是一名就读于中北大学数据科学与大数据技术专业的学生。我热爱编程和数据分析，
                同时也积极参与校园活动和各类竞赛。在学习期间，我注重理论知识的掌握，也重视实践能力的培养。
                我希望能够在未来的工作中运用所学知识，为企业创造价值。
              </p>
            </div>
          )}

          {activeTab === 'skills' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">技能特长</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-3 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">经历</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <div className="text-gray-500">{exp.period}</div>
                    <div className="font-semibold text-lg">{exp.title}</div>
                    {exp.achievement && (
                      <div className="text-primary">{exp.achievement}</div>
                    )}
                    {exp.details && (
                      <ul className="list-disc list-inside mt-2">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-600">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">项目展示</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">招聘推荐系统</h3>
                  <p className="text-gray-600 mb-4">
                    基于机器学习的招聘职位推荐系统，可以根据用户的技能和经验推荐合适的职位。
                  </p>
                  <a
                    href="#"
                    className="text-primary hover:text-secondary"
                  >
                    查看详情 →
                  </a>
                </div>
                {/* 可以添加更多项目 */}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2024 李墨飞扬. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 
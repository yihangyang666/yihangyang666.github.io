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
    <div className="layui-layout layui-layout-admin">
      <Head>
        <title>李墨飞扬的个人网站</title>
        <meta name="description" content="李墨飞扬的个人简历和项目展示" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="layui-header">
        <div className="layui-logo">李墨飞扬的个人网站</div>
      </div>

      <div className="layui-body" style={{ padding: '15px' }}>
        {/* 个人信息卡片 */}
        <div className="layui-card">
          <div className="layui-card-header">个人信息</div>
          <div className="layui-card-body">
            <div className="layui-row">
              <div className="layui-col-md3">
                <div style={{ width: '200px', height: '200px', position: 'relative' }}>
                  <Image
                    src="/profile-photo.jpg"
                    alt="李墨飞扬"
                    layout="fill"
                    objectFit="cover"
                    className="layui-circle"
                  />
                </div>
              </div>
              <div className="layui-col-md9">
                <h2>{personalInfo.name}</h2>
                <div className="layui-row">
                  <div className="layui-col-md6">
                    <p><i className="layui-icon layui-icon-date"></i> 出生年月：{personalInfo.birth}</p>
                    <p><i className="layui-icon layui-icon-location"></i> 现居城市：{personalInfo.location}</p>
                    <p><i className="layui-icon layui-icon-read"></i> 最高学历：{personalInfo.education}</p>
                    <p><i className="layui-icon layui-icon-cellphone"></i> 联系电话：{personalInfo.phone}</p>
                  </div>
                  <div className="layui-col-md6">
                    <p><i className="layui-icon layui-icon-email"></i> 邮箱地址：{personalInfo.email}</p>
                    <p><i className="layui-icon layui-icon-home"></i> 学校：{personalInfo.university}</p>
                    <p><i className="layui-icon layui-icon-form"></i> 专业：{personalInfo.major}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 导航标签 */}
        <div className="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
          <ul className="layui-tab-title">
            <li className={activeTab === 'about' ? 'layui-this' : ''} onClick={() => setActiveTab('about')}>关于我</li>
            <li className={activeTab === 'skills' ? 'layui-this' : ''} onClick={() => setActiveTab('skills')}>技能特长</li>
            <li className={activeTab === 'experience' ? 'layui-this' : ''} onClick={() => setActiveTab('experience')}>经历</li>
            <li className={activeTab === 'projects' ? 'layui-this' : ''} onClick={() => setActiveTab('projects')}>项目展示</li>
          </ul>
          <div className="layui-tab-content">
            {activeTab === 'about' && (
              <div className="layui-tab-item layui-show">
                <div className="layui-text">
                  <p>
                    我是一名就读于中北大学数据科学与大数据技术专业的学生。我热爱编程和数据分析，
                    同时也积极参与校园活动和各类竞赛。在学习期间，我注重理论知识的掌握，也重视实践能力的培养。
                    我希望能够在未来的工作中运用所学知识，为企业创造价值。
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="layui-tab-item layui-show">
                <div className="layui-row layui-col-space10">
                  {skills.map((skill, index) => (
                    <div key={index} className="layui-col-md4">
                      <div className="layui-card">
                        <div className="layui-card-body">{skill}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="layui-tab-item layui-show">
                <ul className="layui-timeline">
                  {experiences.map((exp, index) => (
                    <li key={index} className="layui-timeline-item">
                      <i className="layui-icon layui-timeline-axis">&#xe63f;</i>
                      <div className="layui-timeline-content layui-text">
                        <h3 className="layui-timeline-title">{exp.period}</h3>
                        <h4>{exp.title}</h4>
                        {exp.achievement && (
                          <p className="layui-text-success">{exp.achievement}</p>
                        )}
                        {exp.details && (
                          <ul>
                            {exp.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="layui-tab-item layui-show">
                <div className="layui-row layui-col-space15">
                  <div className="layui-col-md6">
                    <div className="layui-card">
                      <div className="layui-card-header">招聘推荐系统</div>
                      <div className="layui-card-body">
                        <p>基于机器学习的招聘职位推荐系统，可以根据用户的技能和经验推荐合适的职位。</p>
                        <a href="#" className="layui-btn layui-btn-primary">查看详情</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="layui-footer">
        © 2024 李墨飞扬. All rights reserved.
      </div>
    </div>
  );
} 
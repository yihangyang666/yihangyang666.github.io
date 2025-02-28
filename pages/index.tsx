import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    // @ts-ignore
    if (window.layui) {
      // @ts-ignore
      window.layui.use(['element', 'layer', 'util'], function(){
        // @ts-ignore
        var element = layui.element;
        // @ts-ignore
        var util = layui.util;
        
        // 固定条
        util.fixbar({
          bars: [
            {icon: 'layui-icon-top', type: 'top'},
            {icon: 'layui-icon-dialogue'}
          ],
          click: function(type: string){
            if(type === 'top'){
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }
        });

        // 重新渲染
        element.render('nav');
        element.render('tab');
        element.render('progress');
      });
    }
  }, [activeTab]);

  const personalInfo = {
    name: '李墨飞扬',
    birth: '2003.04.03',
    location: '安徽 亳州',
    education: '本科在读',
    phone: '173-5673-2261',
    email: '286178216@qq.com',
    university: '中北大学',
    major: '数据科学与大数据技术',
    github: 'https://github.com/yihangyang666'
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
    <div className={`layui-layout layui-layout-admin ${loaded ? 'layui-anim layui-anim-upbit' : ''}`}
         style={{
           backgroundImage: 'url(/image/background.png)',
           backgroundSize: 'cover',
           backgroundAttachment: 'fixed'
         }}>
      <Head>
        <title>李墨飞扬的个人网站</title>
        <meta name="description" content="李墨飞扬的个人简历和项目展示" />
        <link rel="icon" href="/favicon.ico" />
        <link href="//unpkg.com/layui@2.9.23/dist/css/layui.css" rel="stylesheet" />
        <script src="//unpkg.com/layui@2.9.23/dist/layui.js"></script>
      </Head>

      <div className="layui-header">
        <div className="layui-logo layui-bg-black">李墨飞扬的个人网站</div>
        <ul className="layui-nav layui-layout-right">
          <li className="layui-nav-item">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <i className="layui-icon layui-icon-login-github"></i> GitHub
            </a>
          </li>
          <li className="layui-nav-item">
            <a href={`mailto:${personalInfo.email}`}>
              <i className="layui-icon layui-icon-email"></i> 联系我
            </a>
          </li>
        </ul>
      </div>

      <div className="layui-body" style={{ padding: '15px', backgroundColor: '#f2f2f2' }}>
        {/* 个人信息卡片 */}
        <div className="layui-card layui-anim layui-anim-scale">
          <div className="layui-card-header" style={{ height: 'auto', lineHeight: '28px' }}>
            <h2 style={{ margin: '10px 0' }}>
              <i className="layui-icon layui-icon-user"></i> 个人信息
            </h2>
          </div>
          <div className="layui-card-body">
            <div className="layui-row">
              <div className="layui-col-md3">
                <div style={{ 
                  width: '200px', 
                  height: '200px', 
                  position: 'relative', 
                  margin: '0 auto',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}>
                  <Image
                    src="/image/myphoto.jpg"
                    alt="李墨飞扬"
                    layout="fill"
                    objectFit="cover"
                    className="layui-anim layui-anim-rotate"
                  />
                </div>
              </div>
              <div className="layui-col-md9">
                <h2 className="layui-elip" style={{ 
                  fontSize: '24px',
                  marginBottom: '20px',
                  color: '#009688'
                }}>{personalInfo.name}</h2>
                <div className="layui-row">
                  <div className="layui-col-md6">
                    <p className="layui-text"><i className="layui-icon layui-icon-date"></i> 出生年月：{personalInfo.birth}</p>
                    <p className="layui-text"><i className="layui-icon layui-icon-location"></i> 现居城市：{personalInfo.location}</p>
                    <p className="layui-text"><i className="layui-icon layui-icon-read"></i> 最高学历：{personalInfo.education}</p>
                    <p className="layui-text"><i className="layui-icon layui-icon-cellphone"></i> 联系电话：{personalInfo.phone}</p>
                  </div>
                  <div className="layui-col-md6">
                    <p className="layui-text"><i className="layui-icon layui-icon-email"></i> 邮箱地址：{personalInfo.email}</p>
                    <p className="layui-text"><i className="layui-icon layui-icon-home"></i> 学校：{personalInfo.university}</p>
                    <p className="layui-text"><i className="layui-icon layui-icon-form"></i> 专业：{personalInfo.major}</p>
                    <p className="layui-text">
                      <i className="layui-icon layui-icon-login-github"></i> GitHub：
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="layui-font-blue">
                        {personalInfo.github}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 导航标签 */}
        <div className="layui-tab layui-tab-card" lay-filter="info-tab" style={{ marginTop: '20px' }}>
          <ul className="layui-tab-title">
            <li className={activeTab === 'about' ? 'layui-this' : ''} onClick={() => setActiveTab('about')}>
              <i className="layui-icon layui-icon-about"></i> 关于我
            </li>
            <li className={activeTab === 'skills' ? 'layui-this' : ''} onClick={() => setActiveTab('skills')}>
              <i className="layui-icon layui-icon-star"></i> 技能特长
            </li>
            <li className={activeTab === 'experience' ? 'layui-this' : ''} onClick={() => setActiveTab('experience')}>
              <i className="layui-icon layui-icon-time"></i> 经历
            </li>
            <li className={activeTab === 'projects' ? 'layui-this' : ''} onClick={() => setActiveTab('projects')}>
              <i className="layui-icon layui-icon-app"></i> 项目展示
            </li>
          </ul>
          <div className="layui-tab-content">
            <div className={`layui-tab-item ${activeTab === 'about' ? 'layui-show' : ''} layui-anim layui-anim-fadeIn`}>
              <div className="layui-text">
                <blockquote className="layui-elem-quote">
                  我是一名就读于中北大学数据科学与大数据技术专业的学生。我热爱编程和数据分析，
                  同时也积极参与校园活动和各类竞赛。在学习期间，我注重理论知识的掌握，也重视实践能力的培养。
                  我希望能够在未来的工作中运用所学知识，为企业创造价值。
                </blockquote>
              </div>
            </div>

            <div className={`layui-tab-item ${activeTab === 'skills' ? 'layui-show' : ''} layui-anim layui-anim-fadeIn`}>
              <div className="layui-row layui-col-space15">
                {skills.map((skill, index) => (
                  <div key={index} className="layui-col-md4">
                    <div className="layui-card layui-bg-gray hover-shadow">
                      <div className="layui-card-body">
                        <div className="layui-progress layui-progress-big" lay-showpercent="true">
                          <div className="layui-progress-bar" lay-percent="90%"></div>
                        </div>
                        <h3 className="layui-elip" style={{ marginTop: '10px' }}>{skill}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`layui-tab-item ${activeTab === 'experience' ? 'layui-show' : ''} layui-anim layui-anim-fadeIn`}>
              <ul className="layui-timeline">
                {experiences.map((exp, index) => (
                  <li key={index} className="layui-timeline-item">
                    <i className="layui-icon layui-timeline-axis">&#xe63f;</i>
                    <div className="layui-timeline-content layui-text">
                      <div className="layui-timeline-title">
                        <span className="layui-badge layui-bg-green">{exp.period}</span>
                      </div>
                      <h3 className="layui-timeline-title" style={{ color: '#009688' }}>{exp.title}</h3>
                      {exp.achievement && (
                        <p>
                          <span className="layui-badge-rim">{exp.achievement}</span>
                        </p>
                      )}
                      {exp.details && (
                        <ul className="layui-text">
                          {exp.details.map((detail, idx) => (
                            <li key={idx} style={{ listStyle: 'disc inside' }}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`layui-tab-item ${activeTab === 'projects' ? 'layui-show' : ''} layui-anim layui-anim-fadeIn`}>
              <div className="layui-row layui-col-space15">
                <div className="layui-col-md6">
                  <div className="layui-card hover-shadow">
                    <div className="layui-card-header">
                      <span className="layui-badge layui-bg-blue">进行中</span> 招聘推荐系统
                    </div>
                    <div className="layui-card-body">
                      <p>基于机器学习的招聘职位推荐系统，可以根据用户的技能和经验推荐合适的职位。</p>
                      <div className="layui-progress layui-progress-big" lay-showpercent="true">
                        <div className="layui-progress-bar layui-bg-blue" lay-percent="80%"></div>
                      </div>
                      <div style={{ marginTop: '10px' }}>
                        <a href="#" className="layui-btn layui-btn-primary layui-border-blue">
                          <i className="layui-icon layui-icon-release"></i> 查看详情
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="layui-footer" style={{ textAlign: 'center', padding: '15px 0' }}>
        <p>© 2024 李墨飞扬. All rights reserved.</p>
        <p>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="layui-font-gray">
            <i className="layui-icon layui-icon-login-github"></i>
          </a>
        </p>
      </div>

      <style jsx global>{`
        .hover-shadow:hover {
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        .layui-card {
          border-radius: 4px;
          overflow: hidden;
          background-color: rgba(255, 255, 255, 0.95);
        }
        .layui-nav {
          background-color: rgba(35, 38, 46, 0.9);
        }
        .layui-layout-admin .layui-header {
          background-color: rgba(35, 38, 46, 0.9);
        }
        .layui-layout-admin .layui-body {
          background-color: transparent;
        }
        .layui-timeline-content {
          padding-left: 25px;
          background-color: rgba(255, 255, 255, 0.95);
          padding: 15px;
          border-radius: 4px;
        }
        .layui-timeline-title {
          margin-bottom: 10px;
        }
        .layui-progress {
          margin-bottom: 15px;
        }
        .layui-tab-content {
          background-color: rgba(255, 255, 255, 0.95);
        }
      `}</style>
    </div>
  );
} 
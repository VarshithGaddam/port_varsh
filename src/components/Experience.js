import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const workExperience = [
    {
      title: 'AI Engineer Intern',
      company: 'Remote — US-Based Client Project',
      period: '2025',
      icon: '🤖',
      color: '#ff6b35',
      responsibilities: [
        'Designed a financial analysis system converting complex SEC filings into insights using Python and NLP',
        'Built automated workflows that reduced manual data analysis time by 40% while ensuring data integrity',
        'Implemented a full RAG pipeline with error-handling logic to improve the reliability of LLM outputs',
        'Conducted systematic module testing to ensure consistent reporting across various large-cap filings'
      ]
    },
    {
      title: 'AI/ML Intern',
      company: 'EVOASTRA VENTURES PVT LTD — Remote',
      period: '2025',
      icon: '🧠',
      color: '#ff8c42',
      responsibilities: [
        'Developed CNN-based object detection models for real-world datasets using Python & OpenCV',
        'Collaborated with teams to automate data extraction from images via OCR techniques and text analytics',
        'Performed model evaluation and bug fixing, improving overall system accuracy and stability by 15%'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Hackathon Winner',
      description: 'Developed an AI-driven environmental cleanup system',
      icon: '🏆',
      color: '#fed330',
      stats: { label: 'Achievement', value: '1st Place' }
    },
    {
      title: 'LeetCode Champion',
      description: 'Solved 380+ problems with 365+ day consistency streak',
      icon: '💻',
      color: '#26de81',
      stats: { label: 'Problems', value: '380+' }
    },
    {
      title: 'Academic Excellence',
      description: 'Maintained high CGPA throughout academic career',
      icon: '🎯',
      color: '#ff6b35',
      stats: { label: 'CGPA', value: '8.3/10' }
    }
  ];

  const problemSolvingStats = [
    { label: 'LeetCode Problems', value: '380+', icon: '📊' },
    { label: 'Consistency Streak', value: '365+ Days', icon: '🔥' },
    { label: 'Topics Mastered', value: 'DSA', icon: '🧩' },
    { label: 'Difficulty Level', value: 'Medium-Hard', icon: '⚡' }
  ];

  return (
    <motion.div 
      className="experience-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="experience-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Experience & Achievements
      </motion.h2>

      <div className="experience-content">
        <div className="work-experience-section">
          <h3 className="section-heading">Professional Experience</h3>
          <div className="work-experience-list">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                className="work-card"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ x: 10, scale: 1.02 }}
                style={{ '--accent-color': job.color }}
              >
                <div className="work-card-header">
                  <div className="work-icon-wrapper" style={{ background: job.color }}>
                    <span className="work-icon">{job.icon}</span>
                  </div>
                  <div className="work-info">
                    <h4 className="work-title">{job.title}</h4>
                    <p className="work-company">{job.company}</p>
                    <span className="work-period">{job.period}</span>
                  </div>
                </div>
                <ul className="work-responsibilities">
                  {job.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                    >
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h3 className="section-heading">Key Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ '--accent-color': achievement.color }}
              >
                <div className="achievement-icon-wrapper">
                  <span className="achievement-icon">{achievement.icon}</span>
                </div>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-stat">
                  <span className="stat-label">{achievement.stats.label}</span>
                  <span className="stat-value">{achievement.stats.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="problem-solving-section">
          <h3 className="section-heading">Problem Solving Excellence</h3>
          <motion.div
            className="leetcode-showcase"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            <div className="leetcode-header">
              <div className="leetcode-logo">
                <span className="logo-icon">💡</span>
                <h4>LeetCode Journey</h4>
              </div>
              <div className="leetcode-badge">Active Solver</div>
            </div>
            
            <div className="stats-grid">
              {problemSolvingStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-box"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="stat-icon">{stat.icon}</span>
                  <div className="stat-content">
                    <div className="stat-value-large">{stat.value}</div>
                    <div className="stat-label-small">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="topics-covered">
              <h5>Topics Mastered</h5>
              <div className="topics-tags">
                {['Arrays', 'Trees', 'Graphs', 'Dynamic Programming', 'Linked Lists', 'Algorithms'].map((topic, i) => (
                  <motion.span
                    key={i}
                    className="topic-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.1 }}
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

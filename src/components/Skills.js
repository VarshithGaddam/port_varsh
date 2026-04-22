import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: '💻',
      color: '#ff6b35',
      skills: ['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript']
    },
    {
      title: 'AI & Machine Learning',
      icon: '🧠',
      color: '#ff8c42',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Keras']
    },
    {
      title: 'Data Science',
      icon: '📊',
      color: '#ffa552',
      skills: ['NumPy', 'Pandas', 'Transformers', 'LLMs', 'Matplotlib']
    },
    {
      title: 'Vector Databases',
      icon: '🔍',
      color: '#ff6b35',
      skills: ['Qdrant', 'Pinecone', 'ChromaDB', 'LangChain', 'FAISS']
    },
    {
      title: 'Web Development',
      icon: '🌐',
      color: '#ff8c42',
      skills: ['FastAPI', 'Flask', 'React', 'Node.js', 'TailwindCSS']
    },
    {
      title: 'Databases & Cloud',
      icon: '🗄️',
      color: '#ffa552',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'GCP']
    },
    {
      title: 'DSA & Problem Solving',
      icon: '🎯',
      color: '#ff6b35',
      skills: ['LeetCode (380+)', 'Dynamic Programming', 'Graphs & Trees', 'Algorithms', 'Data Structures']
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      color: '#ff8c42',
      skills: ['Git', 'Docker', 'Linux', 'VS Code', 'Jupyter']
    }
  ];

  return (
    <motion.div 
      className="skills-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="skills-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="skills-title">Technical Expertise</h2>
        <p className="skills-subtitle">A comprehensive overview of my technical skills and proficiencies</p>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: catIndex * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="skill-card-header" style={{ borderColor: category.color }}>
              <div className="skill-icon-wrapper" style={{ background: category.color }}>
                <span className="skill-icon">{category.icon}</span>
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: category.color, color: '#ffffff' }}
                  style={{ borderColor: category.color }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="skills-footer"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="skills-stats">
          <div className="stat-item">
            <span className="stat-number">8+</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">40+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">380+</span>
            <span className="stat-label">Problems Solved</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;

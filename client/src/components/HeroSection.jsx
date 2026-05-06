import { motion } from 'framer-motion';
import { GitBranch, Code2, Terminal, Braces } from 'lucide-react';

const floatingIcons = [
  { Icon: GitBranch, x: '10%', y: '20%', delay: 0, duration: 6 },
  { Icon: Code2, x: '85%', y: '15%', delay: 1, duration: 7 },
  { Icon: Terminal, x: '75%', y: '70%', delay: 2, duration: 5 },
  { Icon: Braces, x: '15%', y: '75%', delay: 0.5, duration: 8 },
  { Icon: GitBranch, x: '50%', y: '10%', delay: 1.5, duration: 6.5 },
  { Icon: Code2, x: '90%', y: '50%', delay: 3, duration: 7.5 },
];

const HeroSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 60px',
        overflow: 'hidden',
      }}
    >
      {/* Gradient Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '20%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y, delay, duration }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
            y: [0, -15, 0, 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: x,
            top: y,
            color: 'rgba(139, 92, 246, 0.2)',
            pointerEvents: 'none',
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '100px',
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          marginBottom: '32px',
          fontSize: '13px',
          fontWeight: 500,
          color: '#d0bcff',
          letterSpacing: '0.02em',
        }}
      >
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#8b5cf6',
          animation: 'pulse-glow 2s infinite',
        }} />
        AI-Powered Developer Storytelling
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          fontSize: 'clamp(36px, 5vw, 72px)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          maxWidth: '800px',
          marginBottom: '24px',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Turn Your Commits{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #8b5cf6 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradient-shift 4s ease infinite',
          }}
        >
          Into Stories
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          fontSize: 'clamp(16px, 1.5vw, 20px)',
          lineHeight: 1.7,
          color: '#9b95a8',
          maxWidth: '600px',
          marginBottom: '16px',
          fontWeight: 400,
        }}
      >
        Paste any GitHub repo URL and watch AI transform your commit history
        into a compelling narrative of your project's journey.
      </motion.p>

      {/* Supported label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        style={{
          fontSize: '13px',
          color: '#6b6580',
          letterSpacing: '0.03em',
        }}
      >
        Supports public repositories, organizations, and personal projects.
      </motion.p>
    </section>
  );
};

export default HeroSection;

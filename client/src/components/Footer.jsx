import { motion } from 'framer-motion';
import { GitCommitHorizontal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '40px 32px',
        marginTop: '40px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <GitCommitHorizontal size={14} color="#d0bcff" />
          </div>
          <span style={{ fontSize: '14px', color: '#6b6580' }}>
            © {new Date().getFullYear()} CommitStory
          </span>
        </div>

        {/* Center */}
        <p
          style={{
            fontSize: '13px',
            color: '#4a4460',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          Made with <Heart size={12} color="#8b5cf6" fill="#8b5cf6" /> for developers
        </p>

        {/* Right */}
        <p style={{ fontSize: '12px', color: '#4a4460', letterSpacing: '0.03em' }}>
          Narrative-driven development
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

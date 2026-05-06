import { motion } from 'framer-motion';

const LoadingOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        width: '100%',
        maxWidth: '700px',
        margin: '40px auto 0',
        padding: '0 24px',
      }}
    >
      <div
        style={{
          padding: '2px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.1))',
        }}
      >
        <div
          style={{
            borderRadius: '18px',
            background: 'rgba(15, 13, 21, 0.95)',
            padding: '40px 28px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* Animated dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${i === 0 ? '#8b5cf6' : i === 1 ? '#06b6d4' : '#a78bfa'}, ${i === 0 ? '#a78bfa' : i === 1 ? '#22d3ee' : '#8b5cf6'})`,
                }}
              />
            ))}
          </div>

          {/* Loading text */}
          <div style={{ textAlign: 'center' }}>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#e7e0ed',
                marginBottom: '8px',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Crafting your story...
            </motion.p>
            <p style={{ fontSize: '13px', color: '#6b6580' }}>
              Analyzing commits and generating narrative
            </p>
          </div>

          {/* Progress shimmer bar */}
          <div
            style={{
              width: '200px',
              height: '3px',
              borderRadius: '2px',
              background: 'rgba(255, 255, 255, 0.05)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '50%',
                height: '100%',
                borderRadius: '2px',
                background: 'linear-gradient(90deg, transparent, #8b5cf6, #06b6d4, transparent)',
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingOverlay;

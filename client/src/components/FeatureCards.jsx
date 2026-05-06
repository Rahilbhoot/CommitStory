import { motion } from 'framer-motion';
import { Brain, GitBranch, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Stories',
    description: 'Our custom LLMs analyze commit frequency, complexity, and messaging to craft a human-like story of your build process.',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))',
    iconBg: 'rgba(139, 92, 246, 0.15)',
    iconColor: '#d0bcff',
    borderHover: 'rgba(139, 92, 246, 0.3)',
  },
  {
    icon: GitBranch,
    title: 'GitHub Integration',
    description: 'Deep hooks into GitHub\'s API allow us to see beyond the code—capturing the context of PRs, issues, and contributor dynamics.',
    gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(6, 182, 212, 0.05))',
    iconBg: 'rgba(6, 182, 212, 0.15)',
    iconColor: '#4cd7f6',
    borderHover: 'rgba(6, 182, 212, 0.3)',
  },
  {
    icon: Sparkles,
    title: 'Beautiful Narratives',
    description: 'Transform dry commit logs into compelling development stories. Share with stakeholders or your community.',
    gradient: 'linear-gradient(135deg, rgba(255, 184, 105, 0.15), rgba(255, 184, 105, 0.05))',
    iconBg: 'rgba(255, 184, 105, 0.15)',
    iconColor: '#ffb869',
    borderHover: 'rgba(255, 184, 105, 0.3)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const FeatureCards = () => {
  return (
    <section
      style={{
        padding: '80px 24px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '56px' }}
      >
        <p
          style={{
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#8b5cf6',
            marginBottom: '12px',
          }}
        >
          Features
        </p>
        <h2
          style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#e7e0ed',
            marginBottom: '16px',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Visualize the{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Grind
          </span>
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#9b95a8',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Every bug fix is a plot twist. Every feature is a new character. We give them life.
        </p>
      </motion.div>

      {/* Feature Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}
      >
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
              style={{
                padding: '2px',
                borderRadius: '18px',
                background: 'rgba(255, 255, 255, 0.05)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${feature.borderHover}, rgba(255, 255, 255, 0.08))`;
                e.currentTarget.style.boxShadow = `0 0 40px ${feature.borderHover.replace('0.3', '0.1')}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  padding: '32px 28px',
                  borderRadius: '16px',
                  background: 'rgba(10, 10, 15, 0.9)',
                  height: '100%',
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: feature.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <IconComponent size={22} color={feature.iconColor} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#e7e0ed',
                    marginBottom: '12px',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '-0.01em',
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: '#9b95a8',
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FeatureCards;

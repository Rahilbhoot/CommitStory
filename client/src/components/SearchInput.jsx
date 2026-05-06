import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';

const GithubIcon = ({ size = 24, style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    style={style}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const SearchInput = ({ url, setUrl, onSearch, loading }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !loading) {
      onSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      style={{
        width: '100%',
        maxWidth: '700px',
        margin: '0 auto',
        padding: '0 24px',
      }}
    >
      {/* Input Container */}
      <div
        style={{
          position: 'relative',
          borderRadius: '16px',
          padding: '2px',
          background: isFocused
            ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5))'
            : 'rgba(255, 255, 255, 0.08)',
          transition: 'all 0.4s ease',
          boxShadow: isFocused
            ? '0 0 40px rgba(139, 92, 246, 0.15), 0 0 80px rgba(6, 182, 212, 0.05)'
            : 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 20px',
            borderRadius: '14px',
            background: 'rgba(10, 10, 15, 0.95)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <GithubIcon
            size={20}
            style={{
              color: isFocused ? '#8b5cf6' : '#6b6580',
              transition: 'color 0.3s',
              flexShrink: 0,
            }}
          />

          <input
            id="repo-url-input"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder="Paste GitHub repository URL..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#e7e0ed',
              fontSize: '16px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}
          />

          <motion.button
            id="generate-story-btn"
            onClick={onSearch}
            disabled={loading || !url}
            whileHover={{ scale: loading ? 1 : 1.03 }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: '10px',
              border: 'none',
              background: loading
                ? 'rgba(139, 92, 246, 0.3)'
                : 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              cursor: loading || !url ? 'not-allowed' : 'pointer',
              opacity: !url ? 0.5 : 1,
              transition: 'all 0.3s ease',
              boxShadow: loading
                ? 'none'
                : '0 0 20px rgba(139, 92, 246, 0.25)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Loader2 size={16} />
                </motion.div>
                Generating...
              </>
            ) : (
              <>
                <Sparkles size={16} />
                Generate Story
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Helper text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          textAlign: 'center',
          marginTop: '16px',
          fontSize: '13px',
          color: '#6b6580',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
        }}
      >
        <ArrowRight size={12} />
        Try: https://github.com/facebook/react
      </motion.p>
    </motion.div>
  );
};

export default SearchInput;
import { useState } from "react"
import axios from "axios"
import { AnimatePresence } from "framer-motion"
import ParticleBackground from "./components/ParticleBackground"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import SearchInput from "./components/SearchInput"
import StoryCard from "./components/StoryCard"
import FeatureCards from "./components/FeatureCards"
import LoadingOverlay from "./components/LoadingOverlay"
import Footer from "./components/Footer"

function App() {
  const [url, setUrl] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateStory = async () => {
    if (!url) return;
    setLoading(true);
    setError('');
    setStory('');
    try {
      const response = await axios.post('http://localhost:5000/api/github/fetch-commits', {
        repoUrl: url
      });
      setStory(response.data.story);
    } catch (error) {
      setError("Error fetching the story. Please check the URL and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0f',
      color: '#e7e0ed',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated particle background */}
      <ParticleBackground />

      {/* Fixed navbar */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero section with headline */}
        <HeroSection />

        {/* Search input */}
        <SearchInput
          url={url}
          setUrl={setUrl}
          onSearch={generateStory}
          loading={loading}
        />

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <div style={{
              maxWidth: '700px',
              margin: '20px auto 0',
              padding: '0 24px',
            }}>
              <div style={{
                padding: '12px 20px',
                borderRadius: '12px',
                background: 'rgba(255, 75, 75, 0.08)',
                border: '1px solid rgba(255, 75, 75, 0.2)',
                color: '#ffb4ab',
                fontSize: '14px',
                textAlign: 'center',
              }}>
                {error}
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* Loading state */}
        <AnimatePresence>
          {loading && <LoadingOverlay />}
        </AnimatePresence>

        {/* Story output */}
        <StoryCard story={story} />

        {/* Features section */}
        <FeatureCards />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

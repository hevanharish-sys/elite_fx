import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Transformation from './components/Transformation';
import Contact from './components/Contact';
import JoinModal from './components/JoinModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <Header onJoin={handleOpenModal} />
      <main>
        <Hero onJoin={handleOpenModal} />
        <Features />
        <Transformation />
        <Contact />
      </main>
      <JoinModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

export default App;

import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 224;

// Utility to pad frame numbers (e.g., 1 -> '001')
const getFramePath = (index) => {
  const pad = index.toString().padStart(3, '0');
  return `/video/ezgif-frame-${pad}.jpg`;
};

const HeroSequence = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const requestRef = useRef();
  const indexRef = useRef(0);

  useEffect(() => {
    // Preload images
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        // Draw the first frame specifically when it loads
        if (i === 1 || indexRef.current === i - 1) {
          updateCanvas(indexRef.current, loadedImages);
        }
      };
      img.src = getFramePath(i);
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const updateCanvas = (index, imagesArray = images) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    const img = imagesArray[index];
    
    if (!img || !img.complete || img.naturalWidth === 0) return;
    
    // Use cover logic to fill the entire screen without borders
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let renderWidth = canvas.width;
    let renderHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    // Use cover logic for ALL screens to fill the entire screen without borders
    if (canvasRatio > imgRatio) {
      // Screen is wider; fit to width, crop top/bottom
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgRatio;
    } else {
      // Screen is taller; fit to height, crop left/right
      renderHeight = canvas.height;
      renderWidth = canvas.height * imgRatio;
    }
    
    // Apply a zooming factor to crop out any intrinsic black or white borders embedded into the JPG frames!
    const zoomCrop = 1.15; // Zoom 15%
    renderWidth *= zoomCrop;
    renderHeight *= zoomCrop;

    // Center the image so the focal point (braces) is always in the middle
    offsetX = (canvas.width - renderWidth) / 2;
    offsetY = (canvas.height - renderHeight) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleScroll = () => {
      // Calculate scroll progress percentage relative to the document
      // Let's dedicate 4 viewport heights to scrolling the video smoothly
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const maxScroll = windowHeight * 3;
      let scrollFraction = scrollPosition / maxScroll;
      if (scrollFraction > 1) scrollFraction = 1;
      if (scrollFraction < 0) scrollFraction = 0;

      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(scrollFraction * FRAME_COUNT)
      );

      if (frameIndex !== indexRef.current) {
        indexRef.current = frameIndex;
        // Request animation frame for performance
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        requestRef.current = requestAnimationFrame(() => updateCanvas(frameIndex));
      }

      // Hide the text and indicator as user scrolls down
      const opacity = Math.max(0, 1 - scrollPosition / (windowHeight * 0.8));
      setScrollOpacity(opacity);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateCanvas(indexRef.current);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial setup
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [images]);

  return (
    <div className="hero-fixed">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-overlay" style={{ opacity: scrollOpacity > 0 ? 1 : 0, pointerEvents: scrollOpacity > 0 ? 'auto' : 'none', transition: 'opacity 0.3s' }}>
        <div style={{ opacity: scrollOpacity > 0 ? scrollOpacity : 0, transform: `translateY(${(1 - scrollOpacity) * 50}px)`, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', transition: 'all 0.3s' }}>
          <h1 className="hero-title" style={{ marginBottom: '0.5rem' }}>
            Seu sorriso merece o cuidado da <span style={{ color: 'var(--sapphire-accent)' }}>OdontoFav</span>
          </h1>
          <p style={{ color: 'var(--pristine-white)', fontSize: '1.2rem', maxWidth: '700px', lineHeight: '1.6', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Especialistas em transformar vidas através da saúde bucal. Atendimento humanizado e tecnologia de ponta no coração de Serra e Vitória.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5527998654698&text=Ol%C3%A1%2C+vim+pelo+site%2C+quero+agendar+uma+consulta%21"
            className="btn-primary"
            target="_blank" rel="noreferrer"
            style={{ marginTop: '1rem', display: 'inline-block' }}
          >
            Agendar Avaliação
          </a>
        </div>
        <div className="scroll-indicator" style={{ opacity: scrollOpacity }}>
          <span className="scroll-text">Role para descobrir</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSequence;

import '../css/Section3.css';
import { useEffect, useRef } from 'react';
import SkillsPeVideo from '../assets/skillspe-video.mp4';

export default function Section3() {
  const videoRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className='private-challenges-section'>
      <div className='video-container'>
        <video
          ref={videoRef}
          src={SkillsPeVideo}
          width='100%'
          height='100%'
          muted
          playsInline
          autoPlay
          controls
        />
      </div>
    </div>
  );
}

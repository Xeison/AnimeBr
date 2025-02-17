import React, { useState, useRef, useEffect } from "react";
import ControlsOverlay from "./ControlsOverlay";
import ResumePrompt from "./ResumePrompt";

interface VideoPlayerProps {
  src?: string;
  title?: string;
  savedProgress?: number;
}

const VideoPlayer = ({
  src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  title = "Sample Video",
  savedProgress = 0,
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showResumePrompt, setShowResumePrompt] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (savedProgress > 0) {
      setShowResumePrompt(true);
    }
  }, [savedProgress]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value;
      setVolume(value);
    }
  };

  const handleSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleFullscreen = () => {
    const videoContainer = document.getElementById("video-container");
    if (videoContainer) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoContainer.requestFullscreen();
      }
    }
  };

  const handleResume = () => {
    if (videoRef.current && savedProgress) {
      videoRef.current.currentTime = savedProgress;
      setCurrentTime(savedProgress);
    }
    setShowResumePrompt(false);
  };

  const handleStartOver = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
    }
    setShowResumePrompt(false);
  };

  return (
    <div
      id="video-container"
      className="relative aspect-video w-full max-w-[1152px] bg-black"
    >
      <video
        ref={videoRef}
        className="h-full w-full"
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={handlePlayPause}
      />

      <ControlsOverlay
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        onPlayPause={handlePlayPause}
        onVolumeChange={handleVolumeChange}
        onSeek={handleSeek}
        onToggleFullscreen={handleFullscreen}
      />

      <ResumePrompt
        isOpen={showResumePrompt}
        onResume={handleResume}
        onStartOver={handleStartOver}
        timestamp={savedProgress.toString()}
        onOpenChange={setShowResumePrompt}
      />
    </div>
  );
};

export default VideoPlayer;

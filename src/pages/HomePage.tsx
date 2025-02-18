import { Play, TrendingUp, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimeCard from "@/components/anime/AnimeCard";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { animeList, trailers } from "@/data";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  const [currentTrailerIndex, setCurrentTrailerIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTrailerIndex((prev) => (prev + 1) % trailers.length);
    }, 30000); // Change trailer every 30 seconds

    return () => clearInterval(timer);
  }, []);

  const handleVideoEnd = () => {
    setCurrentTrailerIndex((prev) => (prev + 1) % trailers.length);
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-screen"
      >
        {/* Hero Background */}
        <div className="absolute inset-0">
          <motion.video
            key={trailers[currentTrailerIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0 }}
            transition={{ duration: 1 }}
            autoPlay
            muted
            loop={false}
            onEnded={handleVideoEnd}
            onLoadedData={handleVideoLoad}
            className="w-full h-full object-cover"
          >
            <source
              src={trailers[currentTrailerIndex].videoUrl}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </motion.video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-full container mx-auto px-4 flex flex-col justify-center"
        >
          <h1 className="text-6xl font-bold text-white mb-4 max-w-2xl">
            {trailers[currentTrailerIndex].title}
          </h1>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl">
            {trailers[currentTrailerIndex].description}
          </p>
          <Link to={`/watch/${trailers[currentTrailerIndex].id}`}>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Play className="w-5 h-5" /> Watch Now
            </Button>
          </Link>
        </motion.div>

        {/* Trailer Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {trailers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTrailerIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTrailerIndex ? "bg-blue-500 w-6" : "bg-white/50 hover:bg-white/75"}`}
            />
          ))}
        </div>
      </motion.section>

      <section className="py-16 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h2 className="text-3xl font-bold text-white">Popular Anime</h2>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <TrendingUp className="w-4 h-4 mr-2" /> Trending
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <Star className="w-4 h-4 mr-2" /> Top Rated
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <Clock className="w-4 h-4 mr-2" /> Recently Added
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            <AnimatePresence>
              {animeList.map((anime, index) => (
                <motion.div
                  key={anime.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <AnimeCard
                    id={anime.id}
                    title={anime.title}
                    image={anime.image}
                    episodes={anime.totalEpisodes}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

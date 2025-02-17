import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimeCard from "@/components/anime/AnimeCard";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const featuredAnime = [
  {
    id: "1",
    title: "Attack on Titan",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?fit=crop&w=800&h=600",
    episodes: 24,
  },
  {
    id: "2",
    title: "Demon Slayer",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?fit=crop&w=800&h=600",
    episodes: 26,
  },
  {
    id: "3",
    title: "One Punch Man",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?fit=crop&w=800&h=600",
    episodes: 12,
  },
];

const HomePage = () => {
  return (
    <Layout>
      <section className="relative h-screen">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578632767115-351597cf2477?fit=crop&w=1920&h=1080"
            alt="Attack on Titan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-white mb-4 max-w-2xl">
            Attack on Titan: Final Season
          </h1>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl">
            The war for Paradis zeroes in on Shiganshina just as Jaegerists have
            seized control. After taking a huge blow from a surprise attack led
            by Eren, Marley swiftly acts to return the favor. With Zeke's true
            plan revealed and a military forced under new rule, this battle...
          </p>
          <Link to="/watch/1">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            >
              <Play className="w-5 h-5" /> Watch Now
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-12 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Anime</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {featuredAnime.map((anime) => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

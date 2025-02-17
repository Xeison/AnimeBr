import Layout from "@/components/layout/Layout";
import AnimeCard from "@/components/anime/AnimeCard";

const animeList = [
  {
    id: "1",
    title: "Demon Slayer",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?fit=crop&w=800&h=600",
    episodes: 26,
  },
  {
    id: "2",
    title: "Attack on Titan",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?fit=crop&w=800&h=600",
    episodes: 24,
  },
  {
    id: "3",
    title: "One Punch Man",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?fit=crop&w=800&h=600",
    episodes: 12,
  },
  // Add more anime entries here
];

const CatalogPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Anime Catalog</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {animeList.map((anime) => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CatalogPage;

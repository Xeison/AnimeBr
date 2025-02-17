import { Link } from "react-router-dom";

interface AnimeCardProps {
  id: string;
  title: string;
  image: string;
  episodes: number;
}

const AnimeCard = ({ id, title, image, episodes }: AnimeCardProps) => {
  return (
    <Link to={`/watch/${id}`} className="group">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 p-4 w-full">
          <h3 className="text-white font-semibold truncate">{title}</h3>
          <p className="text-sm text-zinc-400">{episodes} Episodes</p>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;

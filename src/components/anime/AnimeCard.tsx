import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface AnimeCardProps {
  id: string;
  title: string;
  image: string;
  episodes: number;
}

const AnimeCard = ({ id, title, image, episodes }: AnimeCardProps) => {
  return (
    <Link to={`/watch/${id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 p-4 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-semibold truncate mb-1">{title}</h3>
          <p className="text-sm text-zinc-400 flex items-center">
            <Play className="w-4 h-4 mr-1" />
            {episodes} Episodes
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default AnimeCard;

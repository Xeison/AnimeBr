import { useState } from "react";
import { Home, Film, LogIn, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { useAuth } from "@/lib/auth";

const Navbar = () => {
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 w-full bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          AnimeStream
        </Link>

        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/catalog"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Film className="w-4 h-4" />
              <span>Catalog</span>
            </Link>
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-zinc-400">
                <User className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut()}
                className="text-zinc-400 hover:text-white"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAuthDialog(true)}
              className="text-zinc-400 hover:text-white"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
          )}
        </div>
      </div>

      <AuthDialog isOpen={showAuthDialog} onOpenChange={setShowAuthDialog} />
    </nav>
  );
};

export default Navbar;

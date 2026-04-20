import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function AnimatedThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed top-4 right-4 md:top-8 md:right-8 z-50 w-12 h-12 rounded-full bg-[var(--card)] border border-[var(--card-border)] flex items-center justify-center shadow-lg overflow-hidden group hover:scale-105 transition-transform"
      aria-label="Toggle Theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            y: isDark ? 0 : 30,
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute"
        >
          <Moon className="w-5 h-5 text-white" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            y: isDark ? -30 : 0,
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute"
        >
          <Sun className="w-5 h-5 text-black" />
        </motion.div>
      </div>
    </button>
  );
}

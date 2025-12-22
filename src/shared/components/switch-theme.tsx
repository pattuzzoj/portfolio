import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Show from "./flow/show";
import { isServer } from "@utilify/core";

function SwitchTheme() {
  if (isServer()) return;

  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  return (
    <Show when={theme == "light"} fallback={
      <button title="Dark Mode" className="w-full flex justify-center md:w-auto p-2 rounded-xl hover:text-ink-accent-hover hover:bg-fill-accent/10" onClick={() => setTheme("light")}>
        <Moon className="size-5"/>
      </button>
    }>
      <button title="Light Mode" className="w-full flex justify-center md:w-auto p-2 rounded-xl hover:text-ink-accent-hover hover:bg-fill-accent/10" onClick={() => setTheme("dark")}>
        <Sun className="size-5"/>
      </button>
    </Show>
  );
}

export default SwitchTheme;
import { useEffect } from "react";
import { useTranslation } from "@/shared/i18n";
import type { Heading } from "@/features/blog/utils/blog";

interface TreeProps {
  tree: Heading[]
}

export default function HeadingTree(props: TreeProps) {
  const { t } = useTranslation();
  
  useEffect(() => {
    const menuLinks = document.querySelectorAll("[data-blog-menu-id]");

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            menuLinks.forEach((link) => {
              if (link.getAttribute("data-blog-menu-id") === id) {
                link.setAttribute("data-blog-menu-active", "true");
                const menuRect = document.getElementById('track-line')!.getBoundingClientRect();
                const rect = link.getBoundingClientRect();
                const track = document.getElementById("track-mark")!;
                const trackRect = track.getBoundingClientRect();
                const offset = ((rect.top + rect.height / 2) - trackRect.height / 2) - menuRect.top;
                track.style.top = offset + 'px';
              } else {
                link.setAttribute("data-blog-menu-active", "false");
              }
            });
          }
        });
      },
      {
        rootMargin: "10px 0px -80% 0px",
      },
    );

    menuLinks.forEach((element) => {
      const sectionId = element.getAttribute("data-blog-menu-id")!;
      const section = document.getElementById(sectionId) as Element;

      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-4">
      <h5>{t("blog:page.sidebar.index")}</h5>
      <div className="flex">
        <div id="track-line" className="relative w-0.5 bg-slate-600">
          <div id="track-mark" className="absolute top-0 left-0 h-8 w-full bg-blue-600 transition-all duration-300"></div>
        </div>
        <TreeList tree={props.tree} />
      </div>
    </div>
  );
}

export function TreeList(props: TreeProps) {
  return (
    <nav>
      <ol className="space-y-1">
        {props.tree?.map(({ depth, slug, text, children }) => (
          <li key={slug} className="space-y-1" style={{ "marginLeft": depth > 1 ? "16px" : "" }}>
            <a data-blog-menu-id={slug} data-blog-menu-active="false" className="block w-full px-2 py-1 text-left text-sm transition-all text-slate-400 hover:text-slate-200 data-[blog-menu-active=true]:text-slate-50 data-[blog-menu-active=true]:font-semibold" href={`#${slug}`}>{text}</a>
            {children?.length > 0 && <TreeList tree={children} />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
import { useEffect } from "react";

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
};

// Lightweight per-page SEO: updates document title + meta description + canonical.
export default function Seo({ title, description, path = "/" }: SeoProps) {
  useEffect(() => {
    document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://arstudio.example.com${path}`);
    }
  }, [title, description, path]);

  return null;
}

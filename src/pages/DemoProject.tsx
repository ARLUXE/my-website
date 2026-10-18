import { useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import LuxoraDemo from "@/pages/demo/LuxoraDemo";
import NoirFrameDemo from "@/pages/demo/NoirFrameDemo";
import AtelierDemo from "@/pages/demo/AtelierDemo";
import NovaDigitalDemo from "@/pages/demo/NovaDigitalDemo";
import HavenEstatesDemo from "@/pages/demo/HavenEstatesDemo";
import AurelSkinDemo from "@/pages/demo/AurelSkinDemo";

const demos: Record<string, React.ComponentType> = {
  luxora: LuxoraDemo,
  "noir-frame": NoirFrameDemo,
  atelier: AtelierDemo,
  "nova-digital": NovaDigitalDemo,
  "haven-estates": HavenEstatesDemo,
  "aurel-skin": AurelSkinDemo,
};

// Resolves a /projects/:id URL to the matching demo page component.
export default function DemoProject() {
  const { id } = useParams<{ id: string }>();
  const Component = demos[id ?? ""];
  if (!Component) return <NotFound />;
  return <Component />;
}

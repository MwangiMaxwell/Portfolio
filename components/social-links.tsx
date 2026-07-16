import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { XIcon } from "@/components/icons/x-icon";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  const iconClass = "text-current";

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <a
        href={siteConfig.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
      >
        <Github size={iconSize} className={iconClass} />
      </a>
      <a
        href={siteConfig.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
      >
        <Linkedin size={iconSize} className={iconClass} />
      </a>
      <a
        href={siteConfig.socials.x}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
      >
        <XIcon className="w-5 h-5" />
      </a>
      <a
        href={siteConfig.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
      >
        <Instagram size={iconSize} className={iconClass} />
      </a>
      <a
        href={`mailto:${siteConfig.email}`}
        aria-label="Email"
        className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
      >
        <Mail size={iconSize} className={iconClass} />
      </a>
    </div>
  );
}

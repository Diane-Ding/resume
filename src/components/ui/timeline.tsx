import { CalendarIcon, MapPinIcon, BuildingIcon } from "lucide-react";
import Image from "next/image";

// Function to get company brand colors
function getCompanyColor(company: string): string {
  const colors: { [key: string]: string } = {
    Remitly: "#00A3E0",
    Amazon: "#FF9900",
    "Dolby Laboratories": "#000000",
    Microsoft: "#00A4EF",
    Google: "#4285F4",
    Apple: "#000000",
    Meta: "#1877F2",
    Netflix: "#E50914",
    Spotify: "#1DB954",
    Uber: "#000000",
    Airbnb: "#FF5A5F",
    Stripe: "#6772E5",
    Shopify: "#95BF47",
    Salesforce: "#00A1E0",
    Adobe: "#FF0000",
    Intel: "#0071C5",
    IBM: "#0066CC",
    Oracle: "#F80000",
    Cisco: "#1BA0D7",
    VMware: "#607078",
  };

  return colors[company] || "#6B7280"; // Default gray if company not found
}

export interface TimelineItem {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies?: string[];
  logo?: string; // Path to company logo (e.g., "/logos/remitly.png")
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Timeline dot with company branding */}
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full overflow-hidden">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              ) : (
                <div
                  className="flex items-center justify-center w-full h-full text-white text-sm font-semibold"
                  style={{ backgroundColor: getCompanyColor(item.company) }}
                >
                  {item.company
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 space-y-2">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BuildingIcon className="h-4 w-4" />
                    <span>{item.company}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>
                      {item.startDate} - {item.endDate || "Present"}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted text-foreground px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

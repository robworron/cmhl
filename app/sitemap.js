const BASE_URL = "https://www.cmhlniagara.com";

export default function sitemap() {
  const routes = [
    { path: "/", changeFrequency: "daily", priority: 1.0 },
    { path: "/schedule", changeFrequency: "daily", priority: 0.9 },
    { path: "/standings", changeFrequency: "daily", priority: 0.9 },
    { path: "/stats", changeFrequency: "daily", priority: 0.9 },
    { path: "/news", changeFrequency: "weekly", priority: 0.7 },
    { path: "/information", changeFrequency: "monthly", priority: 0.7 },
    { path: "/rules", changeFrequency: "monthly", priority: 0.6 },
    { path: "/gallery", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

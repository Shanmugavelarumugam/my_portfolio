import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "hospital-management",
    index: "01",
    category: "Mobile App",
    title: "Hospital Management System",
    summary:
      "A healthcare application supporting patient workflows and hospital operations, with role-based screens and API-driven data.",
    tech: ["Flutter", "Dart", "BLoC", "REST API", "Clean Architecture"],
    image: "/images/projects/hospital-management.webp",
    visual: "mobile",
    problem:
      "Hospital staff juggled patient records, appointments, and ward activity across disconnected tools, slowing daily operations.",
    solution:
      "A Flutter mobile app with role-based screens backed by REST APIs — admissions, patient lists, and daily rounds in one structured flow.",
    features: [
      "Role-based screens for staff workflows",
      "Patient records with API-driven search and detail views",
      "Appointment and visit tracking",
      "Offline-tolerant list caching for low-connectivity wards",
    ],
    architecture: [
      "Clean Architecture with feature-first folders",
      "BLoC for predictable state management",
      "Repository pattern over REST API data sources",
      "Reusable widgets for forms, lists, and status states",
    ],
    contribution: [
      "Designed the app module structure and navigation flow",
      "Built BLoC state flows for patient and appointment screens",
      "Integrated REST endpoints with error and loading states",
    ],
    role: "Flutter Developer — app architecture, state management, API integration",
  },
  {
    slug: "pharmacy-pos",
    index: "02",
    category: "POS System",
    title: "Pharmacy POS & Inventory",
    summary:
      "A pharmacy solution focused on medicine inventory, billing workflows, stock management, and point-of-sale operations.",
    tech: ["Flutter", "Riverpod", "Dio", "SQLite"],
    image: "/images/projects/pharmacy-pos.webp",
    visual: "pos",
    problem:
      "Pharmacy counters needed fast billing plus reliable stock control — overselling or miscounted inventory directly cost money.",
    solution:
      "A Flutter POS with local SQLite inventory, Dio-powered sync, and a billing flow optimized for speed at the counter.",
    features: [
      "Point-of-sale billing with quick item lookup",
      "Medicine inventory with batch and expiry tracking",
      "Stock alerts and low-stock reports",
      "Local-first SQLite storage with API sync",
    ],
    architecture: [
      "Riverpod providers for cart, inventory, and sync state",
      "Dio client with interceptors for auth and retries",
      "SQLite as local source of truth for stock",
      "Separated billing, inventory, and reporting modules",
    ],
    contribution: [
      "Built the POS billing flow and cart state",
      "Implemented SQLite inventory schema and queries",
      "Wired Dio sync with conflict-safe updates",
    ],
    role: "Flutter Developer — POS flow, local data, API sync",
  },
  {
    slug: "weighbridge",
    index: "03",
    category: "Desktop App",
    title: "Weighbridge Billing System",
    summary:
      "An offline desktop application for recording vehicle weighing transactions and managing billing workflows on a single computer.",
    tech: ["Flutter", "BLoC", "Drift", "SQLite"],
    image: "/images/projects/weighbridge.webp",
    visual: "desktop",
    problem:
      "Weighbridge operators recorded vehicle weighing by hand — slow, error-prone, and hard to reconcile at billing time.",
    solution:
      "An offline-first Flutter desktop app capturing weigh transactions locally with printable bills and daily summaries.",
    features: [
      "Vehicle entry and weigh-in / weigh-out capture",
      "Automatic net-weight calculation",
      "Bill generation with daily transaction history",
      "Fully offline operation on a single computer",
    ],
    architecture: [
      "BLoC for weigh-session and billing state",
      "Drift (SQLite) for typed local persistence",
      "Offline-first — no network dependency",
      "Printable bill templates from local records",
    ],
    contribution: [
      "Designed the weigh transaction data model",
      "Built weigh-in/out flows with validation",
      "Implemented billing history and print-ready output",
    ],
    role: "Flutter Developer — desktop flows, local database, billing",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

import { projects, projectsById } from "@/lib/content/source/local";
import type { ProjectDocument } from "@/types";

export function getAllProjects(): ProjectDocument[] {
  return projects;
}

export function getProjectById(id: string): ProjectDocument | undefined {
  return projectsById[id];
}

export function getProjectsByIds(ids: string[]): ProjectDocument[] {
  return ids
    .map((id) => projectsById[id])
    .filter((project): project is ProjectDocument => Boolean(project));
}

export function getFeaturedProjects(): ProjectDocument[] {
  return projects.filter((project) => project.featured);
}

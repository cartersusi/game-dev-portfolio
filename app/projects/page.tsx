import { SmallerProjects } from "@/components/projects";
import { GithubRepos } from "@/components/repos";

export default async function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Projects Section */}
      <SmallerProjects />

      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Repos</h2>
        <GithubRepos username="PopSusi" repositories={["Shrimp-Fried-Rice", "Frest", "Robo-Venture", "FFF-unity-archive", "Vampire-Die-ers"]} />
      </div>
    </div>

    
  )
};

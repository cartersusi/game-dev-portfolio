import { SmallProjects } from '@/components/projects';
import { SkillsComponent } from '@/components/skills'
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Braeden Susi</h1>
          <p className="text-xl md:text-2xl mb-8">Gameplay Programmer</p>
          <Link href="/projects" className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">View My Work</Link>
        </div>
      </section>

      {/* Projects Section */}
      <SmallProjects />
        
      {/* Skills Section */}  
    </div>
  )
};
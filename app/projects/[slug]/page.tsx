
import Image from 'next/image';
import { Calendar } from 'lucide-react';

import { projects } from '@/content/projects';
 
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  //const [projectName, setProjectName] = useState(false);
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
    <div className="relative h-64 md:h-96 lg:h-128">
    <Image
      src={project.image}
      alt={project.title}
      layout="fill"
      objectFit="cover"
      priority
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">{project.title}</h1>
    </div>
  </div>

  {/* Project Details */}
  <section className="py-12 md:py-20">
    <div className="container mx-auto px-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Project Overview</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
        
        <h3 className="text-xl font-semibold mb-3">Skills Used</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((skill, index) => (
            <span key={index} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">{skill}</span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-3">Development Timeline</h3>
        <div className="space-y-6">
          {project.timeline.map((event, index) => (
            <div key={index} className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                {index !== project.timeline.length - 1 && (
                  <div className="w-px h-full bg-indigo-300 dark:bg-indigo-700"></div>
                )}
              </div>
              <div className="pb-6">
                <p className="text-sm text-indigo-600 dark:text-indigo-400">{event.date}</p>
                <h4 className="text-lg font-semibold mt-1">{event.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  </div>
    )
}
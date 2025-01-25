import Header from '@/components/header'
import { Icons } from '@/components/icons'
import Project from '@/components/project'
import { Button } from '@/components/ui/button'
import { CONFIG } from '@/config'
import Link from 'next/link'
import Image from 'next/image';

export default function Home() {
    return (
        <div className='flex flex-col gap-12'>
            <Header />
            {/* Animation GIF or Waving Hand */}
            <div className="flex justify-center bg-white rounded-lg">
                <Image
                    src="/wave.gif" // Replace with the path to your GIF
                    alt="Waving Hand"
                    width={200}
                    height={100}
                    // className="animate-bounce"
                />
            </div>
            <div className='animate-slide-from-down-and-fade-4 space-y-2 px-2'>
                <h2 className='font-semibold'>GET TO KNOW ME ? </h2>
                <p className="leading-6 border border-muted-foreground p-4 rounded-md animate-slide-from-down-and-fade-5">
                    {CONFIG.description}
                </p>

            </div>
            <div className='flex animate-slide-from-down-and-fade-6 flex-col gap-3'>
                <h2 className='px-4 font-semibold'>Featured Projects</h2>
                {CONFIG.projects
                    .filter((project) => project.featured)
                    .map((project, idx) => (
                        <Project
                            key={idx}
                            name={project.name}
                            icon={project.icon}
                            description={project.description}
                            image={project.image}
                            url={project.url}
                            tags={project.tags}
                            testimonial={project.testimonial}
                            github={project.github}
                        />
                    ))}
                <Button
                    asChild
                    className='ml-auto items-end text-muted-foreground underline hover:text-foreground'
                    variant={'link'}
                >
                    <Link href='/projects'>
                        All projects
                        <Icons.arrowUpRight className='inline-block size-4' />
                    </Link>
                </Button>
            </div>

        </div>
    )
}

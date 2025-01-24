"use client"; // Mark this component as a Client Component
import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import { CONFIG } from '@/config';
import { cn, getInitials } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [showIcons, setShowIcons] = useState(false);

    const handleToggleIcons = () => {
        setShowIcons(true); // Set to true when clicked
    };

    return (
        <header className='flex flex-col w-full gap-6 p-4 bg-gray-900 p-4 dark:bg-gray-900 shadow-md rounded-lg animate-slide-from-down-and-fade-1'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Avatar className='w-15 h-15'>
                        <AvatarImage src={CONFIG.avatar} asChild>
                            <Image
                                src={CONFIG.avatar}
                                alt={`${CONFIG.name}`}
                                width={50}
                                height={50}
                                priority={true}
                                className='rounded-full'
                            />
                        </AvatarImage>
                        <AvatarFallback className='bg-gray-700 text-white'>
                            {getInitials(CONFIG.name)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className='text-lg font-semibold text-white'>{CONFIG.name}</h1>
                        <p className='mt-1 text-sm text-gray-300'>{CONFIG.title}</p>
                    </div>
                </div>
                <ModeToggle />
            </div>
            <div className='flex items-center gap-4'>
                <TooltipProvider delayDuration={70}>
                    {!showIcons && (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={handleToggleIcons}
                                    aria-label='Get in touch'
                                    className={cn(
                                        buttonVariants({
                                            variant: 'outline',
                                            size: 'sm',
                                        }),
                                        'bg-transparent text-xs text-white md:text-sm'
                                    )}
                                >
                                    GET IN TOUCH
                                </button>
                            </TooltipTrigger>
                            <TooltipContent
                                side='bottom'
                                className='bg-gray-900 text-xs text-white rounded p-2'
                            >
                                {'Connect with me'}
                            </TooltipContent>
                        </Tooltip>
                    )}
                    {showIcons && CONFIG.socials.map((social, idx) => {
                        const Icon = Icons[social.icon];
                        return (
                            <Tooltip key={idx}>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url}
                                        target='_blank'
                                        aria-label={social.name}
                                        className='p-2 transition-colors duration-200 hover:text-white'
                                    >
                                        <Icon className='w-6 h-6 md:w-7 md:h-7 text-white transition duration-200' />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent
                                    side='bottom'
                                    className='bg-gray-900 text-xs text-white rounded border border-1 border-red-600'
                                >
                                    {social.name}
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}
                </TooltipProvider>
            </div>
        </header>
    );
}

export default Header;

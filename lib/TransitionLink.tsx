"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode, MouseEvent } from 'react';
import { useEffect } from 'react';

interface TransitionLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  onClick?: () => void; 
}

export function TransitionLink({ href, children, className, onClick }: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition =  (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return; 
    }
    event.preventDefault();
    document.body.classList.add('page-transition');
    
    router.push(href as string); 

    setTimeout(() => {
      document.body.classList.remove('page-transition');
    }, 500); // Adjust timing based on your CSS transition duration
  };
  
  useEffect(() => {
    document.body.classList.remove('page-transition');
  }, [router]);

  return (
    <Link legacyBehavior href={href}>
      <a onClick={handleTransition} className={className}>{children}</a> 
    </Link>
  );
}

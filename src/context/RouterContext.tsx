import React, { createContext, useContext, useState, useEffect } from 'react';

export type RoutePath =
  | '/'
  | '/tools-gear'
  | '/tools/systeme-io-review'
  | '/compare/pictory-vs-invideo'
  | '/blog/how-to-start-a-faceless-channel-2026'
  | '/how-we-test'
  | '/about'
  | '/affiliate-disclosure'
  | '/privacy-policy'
  | '/contact';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string, options?: { searchFocus?: boolean; initialCategory?: string }) => void;
  searchFocused: boolean;
  setSearchFocused: (val: boolean) => void;
  selectedCategoryFilter: string | null;
  setSelectedCategoryFilter: (cat: string | null) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

function getPathFromLocation(): string {
  if (typeof window === 'undefined') return '/';
  
  // First check hash routing (e.g. #/tools-gear or #/tools/systeme-io-review)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/')) {
    return hash.slice(1);
  }
  
  // Or check pathname if direct path is used
  const path = window.location.pathname;
  if (path && path !== '') {
    return path;
  }
  
  return '/';
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => getPathFromLocation());
  const [searchFocused, setSearchFocused] = useState<boolean>(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = getPathFromLocation();
      setCurrentPath(newPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigate = (
    path: string,
    options?: { searchFocus?: boolean; initialCategory?: string }
  ) => {
    if (options?.searchFocus) {
      setSearchFocused(true);
    } else {
      setSearchFocused(false);
    }

    if (options?.initialCategory !== undefined) {
      setSelectedCategoryFilter(options.initialCategory);
    }

    // Ensure hash is updated cleanly for static preview compatibility
    if (window.location.hash !== `#${path}`) {
      window.location.hash = path;
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
        searchFocused,
        setSearchFocused,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
  categoryFilter?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  className = '',
  children,
  categoryFilter,
  onClick,
  ...rest
}) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // If external link or anchor hash on same page, don't hijack
    if (href.startsWith('http') || href === '#' || href.startsWith('#section-')) {
      return;
    }

    e.preventDefault();
    navigate(href, { initialCategory: categoryFilter });
  };

  const formattedHref = href.startsWith('/') ? `#${href}` : href;

  return (
    <a href={formattedHref} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
};

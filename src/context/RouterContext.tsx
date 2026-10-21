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

const KNOWN_ROUTES = [
  '/',
  '/tools-gear',
  '/tools/systeme-io-review',
  '/compare/pictory-vs-invideo',
  '/blog/how-to-start-a-faceless-channel-2026',
  '/how-we-test',
  '/about',
  '/affiliate-disclosure',
  '/privacy-policy',
  '/contact',
];

function getPathFromLocation(): string {
  if (typeof window === 'undefined') return '/';

  // Clean URLs are canonical (History API) — Vercel rewrites serve index.html for them.
  const path = window.location.pathname;
  if (path && KNOWN_ROUTES.includes(path)) {
    return path;
  }

  // Legacy hash links (e.g. #/tools-gear) still resolve for backward compatibility.
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/')) {
    const hashPath = hash.slice(1);
    if (KNOWN_ROUTES.includes(hashPath)) return hashPath;
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

    // Update the URL with the History API so links stay clean (/tools-gear, not #/tools-gear)
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
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

  const formattedHref = href;

  return (
    <a href={formattedHref} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
};

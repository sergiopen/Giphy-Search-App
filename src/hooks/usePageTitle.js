import { useEffect } from 'react';
import { useLocation } from 'wouter';

const usePageTitle = (title) => {
  const [location] = useLocation();

  const defaultTitle = 'Giphy Search App';

  useEffect(() => {
    document.title = defaultTitle + ' | ' + title;
  }, [location, title]);
};

export default usePageTitle;

import { useMediaQuery } from 'react-responsive';

const ResponsiveExample = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <div>
      {isMobile && <p>This is mobile view 📱</p>}
      {isTablet && <p>This is tablet view 📲</p>}
      {isDesktop && <p>This is desktop view 💻</p>}
    </div>
  );
};

export default ResponsiveExample;

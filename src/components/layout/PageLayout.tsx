import Header from './Header';
import Footer from './Footer';
import BottomBar from './BottomBar';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="w-full max-w-[1536px] flex flex-1 mx-auto p-5">
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
      <BottomBar />
    </div>
  );
};

export default PageLayout;

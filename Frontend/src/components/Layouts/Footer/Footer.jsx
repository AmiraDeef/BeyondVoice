import { Link } from 'react-router-dom';

function Footer() {
  return (
   <footer className="w-full  bg-white border-t border-gray-100 mt-auto">
      <div className="container flex flex-col gap-4 items-center justify-between mx-auto py-8 sm:flex-row">
        
       
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <Link 
            to="/" 
            className="text-[var(--main-color)] text-lg font-bold tracking-tight"
          >
            BeyondVoice
          </Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <p className="text-[var(--grey-color)] text-sm">
            Building inclusive hiring, one conversation at a time.
          </p>
        </div>

     
        <div className="flex items-center gap-4 text-xs text-[var(--grey-color)] font-medium">
          <p>&copy; 2026 BeyondVoice.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
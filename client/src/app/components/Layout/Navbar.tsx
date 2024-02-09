import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-amber-300 p-8">
        <div className="container mx-auto flex justify-between">
          <div>
            <Link href="/">
              <a className="text-purple-800 mr-4">MyBook</a>
            </Link>
          </div>
          <div>
            <Link href="/login">
              <a className="text-green-900 mr-4">Login</a>
            </Link>
            <Link href="/register">
              <a className="text-orange-900 mr-4">Register</a>
            </Link>
          </div>
        </div>
      </nav>
    );
  };
    
    export default Navbar;
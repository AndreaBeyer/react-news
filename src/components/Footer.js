import React from 'react';

export default function Footer() {
  return (
    <footer className=" fixed bottom-0 h-10 pt-2 w-screen bg-slate-800 text-white">
      <p className="text-center">
        Made with ❤️ by Andréa Beyer {new Date().getFullYear()}
      </p>
    </footer>
  );
}

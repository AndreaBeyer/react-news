import React from 'react';

export default function Footer() {
  return (
    <footer className=" fixed h-9 pt-2 bottom-0 w-screen bg-slate-800 text-white">
      <p className="text-center">
        Made with ❤️ by Andréa Beyer {new Date().getFullYear()}
      </p>
    </footer>
  );
}

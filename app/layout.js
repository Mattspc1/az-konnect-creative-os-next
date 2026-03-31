'use client';
import { useState } from 'react';
import { ProjectProvider } from '@/lib/context';
import Sidebar from '@/components/Sidebar';
import CreateProjectModal from '@/components/CreateProjectModal';
import './globals.css';

export default function RootLayout({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>Creative OS — AZ Konnect</title>
        <meta name="description" content="AZ Konnect Creative OS — Multi-platform content generation system" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ProjectProvider>
          <div className="app">
            <Sidebar onCreateClick={() => setModalOpen(true)} />
            <div className="main">
              <div className="content">
                {children}
              </div>
            </div>
          </div>
          <CreateProjectModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </ProjectProvider>
      </body>
    </html>
  );
}

import { Icon } from '@iconify/react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center" style={{ background: "var(--bg-primary)" }}>
      <Icon icon="mingcute:unhappy-dizzy-line" width="100" height="100" />
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">The page you're looking for doesn't exist.</p>
    </div>
  );
}

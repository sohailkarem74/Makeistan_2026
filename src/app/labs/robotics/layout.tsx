import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robotics & AI Lab',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

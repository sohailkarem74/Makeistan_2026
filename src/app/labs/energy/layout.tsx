import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Green Energy Lab',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

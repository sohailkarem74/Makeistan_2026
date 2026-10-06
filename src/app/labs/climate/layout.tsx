import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Climate Innovation Lab',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

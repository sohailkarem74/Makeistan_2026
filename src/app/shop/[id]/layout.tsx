import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Details',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

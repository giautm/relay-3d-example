import '@/styles/globals.css';
import {Layout} from '@/components/common/LayoutComponents';
import {ThemeProvider} from 'next-themes';
import {RelayProvider} from './RelayProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <ThemeProvider attribute="class">
          <RelayProvider>
            <Layout>{children}</Layout>
          </RelayProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

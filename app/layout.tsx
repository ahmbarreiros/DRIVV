import "./globals.css";
import { NextAuthProvider } from "@/components/SessionProvider";

export const metadata = {
    title: "Learn matchups / DRIVV",
    description: "Learn matchups and play them like a challenger!",
};

type Props = {
    children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body>
                <NextAuthProvider>{children}</NextAuthProvider>
            </body>
        </html>
    );
}

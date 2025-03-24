import "./globals.css";

export const metadata = {
  title: "Rersevia",
  description: "Find and book unique stays, vacation rentals, and experiences worldwide. Explore cozy homes, beachfront villas, and city apartments with ease. Start your next adventure today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=''
      >
        {children}
      </body>
    </html>
  );
}

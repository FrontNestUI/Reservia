import "./globals.css";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export const metadata = {
  title: "Rersevia | Locations de vacances, cabanes, maison, manoir",
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

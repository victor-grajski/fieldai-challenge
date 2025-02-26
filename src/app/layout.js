import "./globals.css";
import DPad from '../components/DPad'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">
        <DPad />
        {/* {children} */}
      </body>
    </html>
  );
}

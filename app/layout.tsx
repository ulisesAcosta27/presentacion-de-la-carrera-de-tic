import type { Metadata } from "next";
import { DM_Serif_Display, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer, Hero, Navbar } from "@/components";

const dm_Serif_Display = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif-desplay",
});

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "IES N°6 - Precentacion de la Carrera en TICs",
  description: `Nuestra Carrera en Tecnologías de la Información y la Comunicación (TICs) 
  te capacita para ser un educador preparado en el uso de la tecnología en el aula. 
  Con un enfoque en diseño digital, ética y habilidades de enseñanza, 
  te convertirás en un líder de la educación del futuro. 
  Únete a nosotros y forma parte de la revolución educativa. 
  Tu camino hacia un mundo digital comienza aquí. ¡Inscríbete ahora!`,
  authors: {  
    name: "Ulises David Acosta",
    url: "https://github.com/ulisesAcosta27",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dm_Serif_Display.variable} ${montserrat.variable} bg-[#fcf7f1]`}
      >
        <nav>
          <Navbar />
        </nav>

        <div>
          <Hero />
        </div>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

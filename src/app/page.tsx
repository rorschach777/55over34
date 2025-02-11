import Image from "next/image";

export const metadata = {
  title: '55OVER34',
  description: '| Elevate Your Brand',
}

export default function Home() {
  return (
    <div>
     <main>
      <Image className="logo" src="./logo-2.png" alt="55OVER34"/>
     </main>
    </div>
  );
}

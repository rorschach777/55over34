import Card from './components/Card';

export const metadata = {
  title: '55OVER34',
  description: '| Elevate Your Brand',
}

const content = "Whether it’s pixel-perfect websites or seamless user experiences, we balance form and function with purpose."


export default function Home() {
  return (
    <div>
     <main>
      <Card 
      headline="Numbers don’t lie, and neither do great designs."
      content={content}>
          <img className="logo" src="./logo-2.png" alt="55OVER34" />
      </Card>
    
     </main>

    </div>
  );
}

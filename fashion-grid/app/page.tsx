import Image from "next/image";
import Counter from "@/components/Counter"

export default function Home() {
  return (
    <main>
      <h1>Fashion Grid</h1>
      <p>Build outfits using the 3x3 method.</p>
      <Counter />
    </main>
  );
}

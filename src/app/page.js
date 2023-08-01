import Image from "next/image";
import styles from "./page.module.css";
import Show from "@/components/Show";

export default function Home() {
  return (
    <section>
      <div className="flex justify-center items-center">
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>      
      <Show />
    </section>
  );
}

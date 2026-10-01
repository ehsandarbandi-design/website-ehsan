import Image from "next/image";
import styles from "./Logo.module.css";

/** ED logo — the square source is cropped the way Figma does (121.43% height, −10.71% offset). */
export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`${styles.logo} ${className ?? ""}`}>
      <Image src="/images/logo.png" alt="ED" width={580} height={580} preload />
    </div>
  );
}

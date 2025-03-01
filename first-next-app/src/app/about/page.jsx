import Link from "next/link";
import styles from "../page.module.css";

export default function About() {
    return (
        <main className={styles.main}>
            <div className="About">
                <h1>About</h1>
                <p>This is the About page.
                    Nothing to see, go <Link href="/">Home</Link>
                </p>
            </div>
        </main>
    )
}
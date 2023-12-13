import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/product"}>
        <Button>Go to Product Page</Button>
      </Link>
    </main>
  );
}

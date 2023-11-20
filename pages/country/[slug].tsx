import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <p>Country: {router.query.slug}</p>;
}

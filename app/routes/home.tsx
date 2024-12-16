import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Button } from "@nextui-org/react";

export async function loader() {
  // wait 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return { message: "hello world" };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({ loaderData }: any) {
  const { message } = loaderData;

  return (
    <>
      <Button color="primary">{message}</Button>
      <Welcome />;
    </>
  );
}

import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Button } from "@nextui-org/react";

export async function loader() {
  return { message: "label from loader" };
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
      <Welcome />
    </>
  );
}

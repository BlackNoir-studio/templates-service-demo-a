import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Button } from "@nextui-org/react";
import $fetch from "lib/fetch";

export async function loader() {
  const { data } = await $fetch("/settings");
  return { message: data.project_name };
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
      <Welcome title={message} />
    </>
  );
}

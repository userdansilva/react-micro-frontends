import axios from "axios";
import useSWRImmutable from "swr/immutable";
import { Card } from "./Card";

interface Repo {
  id: number;
  name: string;
}

const fetcher = (url: string) => axios.get<Repo[]>(url).then(({ data }) => data);

function CardGroup() {
  const username = localStorage.getItem("username");

  const { data: repos } = useSWRImmutable(`https://api.github.com/users/${username}/repos`, fetcher, {
    suspense: true,
  });

  return (
    <div className="rp-grid rp-grid-cols-4 rp-gap-5">
      {repos?.map(({ id, name }) => (
        <Card name={name} key={id} />
      ))}
    </div>
  );
}

export { CardGroup };

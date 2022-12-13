import axios from "axios";
import { Suspense } from "react";
import useSWRImmutable from "swr/immutable";
import { CardGroup } from "../components/CardsGroup";

interface User {
  name: string;
}

const fetchUser = (url: string) => axios.get<User>(url).then(({ data }) => data);

function Repos() {
  const username = localStorage.getItem("username");

  const { data: user } = useSWRImmutable(`https://api.github.com/users/${username}`, fetchUser, {
    suspense: true,
  });

  return (
    <div className="rp-space-y-5">
      <h1 className="rp-font-bold rp-text-slate-800 rp-text-xl">
        {`Showing Repos: ${user?.name}`}
      </h1>

      <Suspense fallback={<h1>Loading repos...</h1>}>
        <CardGroup />
      </Suspense>
    </div>
  );
}

export default Repos;

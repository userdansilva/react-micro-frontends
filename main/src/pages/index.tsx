import axios from "axios";
import useSWRImmutable from "swr/immutable";

interface User {
  name: string;
}

const fetcher = (url: string) => axios.get<User>(url).then(({ data }) => data);

function Welcome() {
  const username = localStorage.getItem("username");

  const { data: user } = useSWRImmutable(`https://api.github.com/users/${username}`, fetcher, {
    suspense: true,
  });

  return (
    <h1 className="font-bold text-3xl text-slate-800">
      {`Welcome, ${user?.name}!`}
    </h1>
  );
}

export default Welcome;

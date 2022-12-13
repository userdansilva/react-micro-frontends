import { Header } from "./Header";
import { Items } from "./Items";

function Navigation() {
  return (
    <div
      className={`
        w-72 h-screen px-8 py-12 space-y-9
      `}
    >
      <Header />

      <Items />
    </div>
  );
}

export { Navigation };

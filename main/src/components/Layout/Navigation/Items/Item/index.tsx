import { ReactNode } from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";

interface ItemProps {
  to: string;
  children: ReactNode;
  selected?: boolean;
}

function Item({
  to, children, selected,
}: ItemProps) {
  return (
    <li>
      <Link
        to={to}
        className={clsx(
          selected && "bg-slate-800",
          "p-3 rounded-md flex",
        )}
      >
        {children}
      </Link>
    </li>
  );
}

export { Item };

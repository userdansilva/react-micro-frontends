interface CardProps {
  name: string;
}

function Card({ name }: CardProps) {
  return (
    <div className={`
      rp-p-5 rp-bg-slate-100 rp-truncate rp-rounded-lg 
      rp-border-2 rp-border-slate-300
    `}
    >
      {name}
    </div>
  );
}

export { Card };

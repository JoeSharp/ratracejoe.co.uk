import ExternalLinkCard, {
  type Props as ExternalLinkProps,
} from "./ExternalLinkCard";

type Props = {
  title: string;
  links: ExternalLinkProps[];
};

function ExternalLinkContainer({ title, links }: Props) {
  return (
    <section>
      <h2>{title}</h2>
      <div className="card-container">
        {links.map((p) => (
          <ExternalLinkCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}

export default ExternalLinkContainer;

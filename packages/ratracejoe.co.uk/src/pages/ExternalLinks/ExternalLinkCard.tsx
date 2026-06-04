export type Props = {
  name: string;
  url: string;
  description: string;
};

function ExternalLinkCard({ name, url, description }: Props) {
  return (
    <div className="card">
      <a href={url}>{name}</a>
      <p>{description}</p>
    </div>
  );
}

export default ExternalLinkCard;

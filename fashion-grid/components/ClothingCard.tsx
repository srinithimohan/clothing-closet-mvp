type ClothingCardProps = {
  name: string;
  onDelete: (name: string) => void;
};



export default function ClothingCard({ name, onDelete }: ClothingCardProps) {
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => onDelete(name)}>Delete</button>
    </div>
  );
}

import './Tag.css';

function Tag({ text, color }: { text: string; color?: string }) {
  return (
    <span className={`tag tag--${color}`}>
      {text}
    </span>
  );
}

export default Tag;


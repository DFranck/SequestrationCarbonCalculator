interface TooltipType {
  visible: boolean;
  content: string;
  position: { x: number; y: number };
}
export const Tooltip = ({ visible, content, position }: TooltipType) => {
  if (!visible) return null;

  return (
    <div
      className="fixed bg-card border shaadow text-card-foreground p-2 rounded flex"
      style={{ top: position.y, left: position.x }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

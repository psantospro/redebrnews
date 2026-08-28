interface AdSlotProps {
  size: '1920x400' | '970x250' | '970x90' | '300x250';
  adUnitId?: string;
  label?: string; // exibido enquanto vazio/carregando
}

const SIZE_CLASS: Record<AdSlotProps['size'], string> = {
  '1920x400': 'ad-slot--billboard',
  '970x250': 'ad-slot--billboard',
  '970x90': 'ad-slot--leaderboard',
  '300x250': 'ad-slot--box',
};

export function AdSlot({ size, label }: AdSlotProps) {
  return (
    <div className={`ad-slot ${SIZE_CLASS[size]}`} role="complementary" aria-label="Publicidade">
      {label ?? `${size} · publicidade`}
    </div>
  );
}

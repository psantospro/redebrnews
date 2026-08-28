interface AdSlotProps {
  size: '1920x400' | '970x250' | '970x90' | '300x250' | '1x1';
  adUnitId?: string;
  imageUrl?: string; // banner pronto (arquivo em /public); se ausente, exibe placeholder
  label?: string; // exibido enquanto vazio/carregando
}

const SIZE_CLASS: Record<AdSlotProps['size'], string> = {
  '1920x400': 'ad-slot--billboard',
  '970x250': 'ad-slot--billboard',
  '970x90': 'ad-slot--leaderboard',
  '300x250': 'ad-slot--box',
  '1x1': 'ad-slot--square',
};

export function AdSlot({ size, imageUrl, label }: AdSlotProps) {
  const src = imageUrl ? `${import.meta.env.BASE_URL}${imageUrl}` : undefined;

  return (
    <div className={`ad-slot ${SIZE_CLASS[size]}`} role="complementary" aria-label="Publicidade">
      {src ? <img src={src} alt="Publicidade" loading="lazy" /> : (label ?? `${size} · publicidade`)}
    </div>
  );
}

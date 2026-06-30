import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAr?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleAr,
  subtitle,
  center = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12',
        center && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
          style={{ backgroundColor: '#F5C51820', color: '#D4A800' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight',
          light ? 'text-white' : 'text-gray-900'
        )}
      >
        {title}
      </h2>
      {titleAr && (
        <p
          className={cn(
            'text-lg font-medium mt-1',
            light ? 'text-white/60' : 'text-gray-400'
          )}
          dir="rtl"
        >
          {titleAr}
        </p>
      )}
      {/* Yellow accent line */}
      <div
        className={cn(
          'h-1 w-16 rounded-full mt-4',
          center && 'mx-auto'
        )}
        style={{ backgroundColor: '#F5C518' }}
        aria-hidden="true"
      />
      {subtitle && (
        <p
          className={cn(
            'mt-5 text-base md:text-lg leading-relaxed max-w-2xl',
            center && 'mx-auto',
            light ? 'text-white/70' : 'text-gray-500'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

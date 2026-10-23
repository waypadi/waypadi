import Link from 'next/link';

type TabItem = { href: string; label: string; count?: number };

export function Tabs({ items, active }: { items: TabItem[]; active: 'rides' | 'requests' }) {
  return (
    <nav className="mb-6 flex w-fit gap-1 rounded-xl border border-[#f1e9dc] bg-[#fbf7ef] p-1 max-[760px]:w-full" aria-label="Switch between rides and requests">
      {items.map((item) => {
        const isActive = item.href === (active === 'rides' ? '/rides' : '/requests');
        return (
          <Link
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-[16px] py-[10px] text-[10px] font-bold transition-colors ${
              isActive ? 'bg-[#f9bd3f] text-[#392616] shadow-[0_2px_5px_rgba(99,61,12,0.1)]' : 'text-[#807364] hover:text-[#392616]'
            }`}
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}
            {typeof item.count === 'number' && (
              <span className={`rounded-full px-[7px] py-[2px] text-[9px] ${isActive ? 'bg-[#392616]/10' : 'bg-[#efe6d8]'}`}>
                {item.count}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { ChangeEvent } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <select
      defaultValue={locale}
      onChange={onSelectChange}
      className="bg-transparent border border-primary/20 text-primary text-sm rounded-md py-1 px-2 outline-none cursor-pointer focus:ring-1 focus:ring-primary"
    >
      <option value="hi">हिन्दी</option>
      <option value="en">English</option>
      <option value="ja">日本語</option>
    </select>
  );
}

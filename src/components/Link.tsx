import NextLink from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  href: string;
};

export function Link({ children, href, onClick, ...props }: LinkProps) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    return (
      <a {...props} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <NextLink {...props} href={href} onClick={onClick}>
      {children}
    </NextLink>
  );
}

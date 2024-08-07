"use client";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navVariants = cva("", {
  variants: {
    dir: {
      row: "",
      col: "lg:block w-fit relative md:p-4 min-w-max",
    },
  },
  defaultVariants: {
    dir: "row",
  },
});
const ulVariants = cva("", {
  variants: {
    dir: {
      row: "flex flex-row",
      col: "flex flex-col gap-2",
    },
    pos: {
      default: "justify-center items-center",
      fixed: "lg:fixed",
    },
  },
  defaultVariants: {
    dir: "row",
    pos: "default",
  },
});
const linkVariants = cva(
  "text-lg lg:p-2 rounded duration-100 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 w-full block text-center",
  {
    variants: {
      variant: {
        default: "",
        primary: "",
        secondary: "",
      },
      isActive: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        isActive: true,
        className: "bg-primary text-primary-foreground",
      },
      {
        variant: "primary",
        isActive: false,
        className: "hover:bg-primary/50 hover:text-primary-foreground",
      },
      {
        variant: "secondary",
        isActive: true,
        className: "bg-accent text-accent-foreground",
      },
      {
        variant: "secondary",
        isActive: false,
        className: "hover:bg-accent rounded w-full text-center cursor-pointer",
      },
    ],
    defaultVariants: {
      variant: "default",
      isActive: false,
    },
  }
);

type NavProps = {
  t?: string; // Translation key
  render?: string; // Display array or object key
  root?: number[]; // Root indices (only applicable if d is an array)
  links?: string[] | { [key: string]: string }; // Direct links array or object
  path?: string; // Base path for non-root links
  active?: boolean; // If true, applies active styles based on the current pathname
  navClass?: string; // Custom class
  ulClass?: string; // Custom class
  liClass?: string; // Custom class
  variant?: VariantProps<typeof linkVariants>["variant"];
  pos?: VariantProps<typeof ulVariants>["pos"];
  dir?: VariantProps<typeof navVariants>["dir"];
};

const Nav: React.FC<NavProps> = ({
  t,
  render,
  root = [],
  links,
  navClass = "",
  ulClass = "",
  liClass = "",
  path = "",
  pos,
  active = false,
  variant = "default",
  dir,
}) => {
  const locale = useLocale();
  const pathname = usePathname();
  const intl = useTranslations(t || "");
  const rawLinks = t && render ? intl.raw(render) : links;

  if (!rawLinks) return null;

  const linkList = Array.isArray(rawLinks) ? rawLinks : Object.values(rawLinks);
  const linkKeys = Array.isArray(rawLinks) ? linkList : Object.keys(rawLinks);

  return (
    <nav
      className={cn(navVariants({ dir }), "w-full md:w-fit", navClass)}
      aria-label="Main navigation"
    >
      <ul className={cn(ulVariants({ dir, pos }), ulClass)}>
        {linkList.map((link, index) => {
          const linkPath = Array.isArray(rawLinks)
            ? root.includes(index)
              ? `/${locale}`
              : `/${locale}/${path}/${link.toLowerCase()}`
            : `/${locale}/${path}/${linkKeys[index].toLowerCase()}`;
          const isActive = pathname.startsWith(linkPath);

          return (
            <li key={`${link}-${index}`} className={cn("w-full", liClass)}>
              <Link
                href={linkPath}
                aria-label={link}
                className={cn(
                  linkVariants({ variant, isActive: active && isActive }),
                  liClass
                )}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      {dir === "col" && (
        <ul className={cn(pos === "fixed" ? "invisible" : "hidden")}>
          {linkList.map((link, index) => (
            <li key={`${link}-${index}`} className="text-lg p-2">
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;

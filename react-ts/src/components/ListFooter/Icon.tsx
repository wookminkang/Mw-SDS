import { cn } from "../../lib/utils";

// 1. 사용할 아이콘들을 정의 (SVG Path)
const ICONS = {
  "icon-plus-small-mono": (
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "icon-arrow-down-mono": (
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "icon-arrow-up-mono": (
    <path
      d="M18 15L12 9L6 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export type IconName = keyof typeof ICONS;

interface IconProps {
  name: IconName;
  className?: string;
  color?: string; // Tailwind 클래스(text-blue-500) 혹은 색상 코드(#000)
}

export const Icon = ({ name, className, color }: IconProps) => {
  const SvgContent = ICONS[name];

  if (!SvgContent) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={cn("w-5 h-5", color, className)} // color가 Tailwind 클래스면 적용됨
      style={color?.startsWith("#") ? { color } : undefined} // #색상코드면 style로 적용
    >
      {SvgContent}
    </svg>
  );
};

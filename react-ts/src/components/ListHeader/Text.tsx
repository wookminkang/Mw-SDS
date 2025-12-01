import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// 디자인 토큰 정의 (토스 스타일 흉내내기)
const textVariants = cva("m-0 transition-colors", {
  variants: {
    typography: {
      t1: "text-3xl font-bold",
      t2: "text-2xl font-bold",
      t3: "text-xl font-bold",
      t4: "text-lg font-semibold",
      t5: "text-base font-medium", // 본문 강조
      t6: "text-sm font-medium",
      t7: "text-xs font-normal", // 작은 텍스트
    },
    color: {
      grey900: "text-slate-900",
      grey800: "text-slate-800",
      grey700: "text-slate-600",
      grey600: "text-slate-500",
      blue: "text-blue-500",
      red: "text-red-500",
    },
    fontWeight: {
      bold: "font-bold",
      medium: "font-medium",
      regular: "font-normal",
    },
  },
  defaultVariants: {
    typography: "t5",
    color: "grey900",
    fontWeight: "medium",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
}

export const Text = ({
  typography,
  color,
  fontWeight,
  className,
  children,
}: TextProps) => {
  return (
    <span
      className={cn(textVariants({ typography, color, fontWeight }), className)}
    >
      {children}
    </span>
  );
};

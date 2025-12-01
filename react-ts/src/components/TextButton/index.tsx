function TextButton() {
  return <button>TextButton</button>;
}
export { TextButton };

// import { cva } from "class-variance-authority";
// import { forwardRef } from "react";
// import { cn } from "../../lib/utils";

// // 1. 스타일 로직 (구현부에서는 편의상 남겨둡니다)
// const textButtonVariants = cva(
//   "inline-flex items-center justify-center font-medium transition-colors hover:opacity-70 disabled:pointer-events-none disabled:opacity-40",
//   {
//     variants: {
//       size: {
//         xsmall: "text-xs gap-0.5",
//         small: "text-sm gap-1",
//         medium: "text-base gap-1.5",
//         large: "text-lg gap-1.5",
//         xlarge: "text-xl gap-2",
//         xxlarge: "text-2xl gap-2",
//       },
//       variant: {
//         clear: "",
//         underline: "underline underline-offset-4",
//         arrow: "",
//       },
//     },
//     defaultVariants: {
//       size: "medium",
//       variant: "clear",
//     },
//   }
// );

// // 2. 타입 정의 (여기가 원하시는 대로 바뀐 부분입니다!) ⭐
// // 복잡한 extends 로직 대신, 속성을 눈에 보이게 쫙 펼쳐드렸습니다.
// export interface TextButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   /** 텍스트 버튼의 사이즈를 결정해요. */
//   size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";

//   /** TextButton 컴포넌트의 형태를 결정해요. */
//   variant?: "clear" | "arrow" | "underline";

//   /** 비활성화 여부 (HTML 기본 속성이지만 명시적으로 적어둡니다) */
//   disabled?: boolean;
// }

// // 3. 컴포넌트 구현
// export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
//   (
//     {
//       className,
//       size = "medium",
//       variant = "clear",
//       disabled,
//       children,
//       ...props
//     },
//     ref
//   ) => {
//     return (
//       <button
//         ref={ref}
//         type="button"
//         disabled={disabled}
//         className={cn(textButtonVariants({ size, variant, className }))}
//         {...props}
//       >
//         <span>{children}</span>
//         {variant === "arrow" && <ArrowIcon className={getSizeClass(size)} />}
//       </button>
//     );
//   }
// );

// // --- (아래 헬퍼 함수들은 그대로 유지) ---
// function getSizeClass(size: TextButtonProps["size"]) {
//   switch (size) {
//     case "xsmall":
//       return "w-3 h-3";
//     case "small":
//       return "w-3.5 h-3.5";
//     case "xxlarge":
//       return "w-6 h-6 stroke-[2.5px]";
//     case "xlarge":
//       return "w-5 h-5 stroke-[2px]";
//     default:
//       return "w-4 h-4";
//   }
// }

// function ArrowIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       className={className}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M9 18l6-6-6-6" />
//     </svg>
//   );
// }

function Button() {
  return <button>button</button>;
}
export { Button };

// import * as React from "react";
// import { cva } from "class-variance-authority";
// import { cn } from "../../lib/utils";

// // 1. 스타일 정의 (CVA는 CSS 클래스 관리용으로만 사용)
// const buttonVariants = cva(
//   "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       color: {
//         primary: "",
//         danger: "",
//         light: "",
//         dark: "",
//       },
//       variant: {
//         fill: "border-transparent shadow-sm text-white",
//         weak: "border-transparent bg-opacity-10",
//       },
//       display: {
//         inline: "inline-flex",
//         block: "flex w-full",
//         full: "flex w-full h-full",
//       },
//       size: {
//         small: "h-8 px-3 text-xs",
//         medium: "h-10 px-4 py-2 text-sm",
//         large: "h-12 px-6 text-base",
//         xlarge: "h-14 px-8 text-lg",
//       },
//     },
//     // 복합 변형 (색상 + 스타일 조합)
//     compoundVariants: [
//       {
//         color: "primary",
//         variant: "fill",
//         class: "bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-600",
//       },
//       {
//         color: "primary",
//         variant: "weak",
//         class: "bg-blue-50 text-blue-600 hover:bg-blue-100",
//       },
//       {
//         color: "danger",
//         variant: "fill",
//         class: "bg-red-600 hover:bg-red-700 focus-visible:ring-red-600",
//       },
//       {
//         color: "danger",
//         variant: "weak",
//         class: "bg-red-50 text-red-600 hover:bg-red-100",
//       },
//       {
//         color: "light",
//         variant: "fill",
//         class:
//           "bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-400",
//       },
//       {
//         color: "light",
//         variant: "weak",
//         class: "bg-gray-50 text-gray-700 hover:bg-gray-100",
//       },
//       {
//         color: "dark",
//         variant: "fill",
//         class:
//           "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900",
//       },
//       {
//         color: "dark",
//         variant: "weak",
//         class: "bg-slate-100 text-slate-900 hover:bg-slate-200",
//       },
//     ],
//   }
// );

// // 2. 타입 정의 (직관적인 방식 ⭐)
// // 여기만 보면 버튼의 모든 스펙을 알 수 있습니다.
// interface ButtonBaseProps {
//   /** * 버튼의 태그를 변경해요.
//    * @default "button"
//    */
//   as?: "button" | "a" | React.ElementType;

//   /** * 버튼의 컬러 테마를 결정해요.
//    * @default "primary"
//    */
//   color?: "primary" | "danger" | "light" | "dark";

//   /** * 버튼의 형태(채우기/투명)를 결정해요.
//    * @default "fill"
//    */
//   variant?: "fill" | "weak";

//   /** * 버튼의 너비 방식을 결정해요.
//    * @default "inline"
//    */
//   display?: "inline" | "block" | "full";

//   /** * 버튼의 크기를 결정해요.
//    * @default "xlarge"
//    */
//   size?: "small" | "medium" | "large" | "xlarge";

//   /** * 로딩 중인지 여부를 나타내요. true면 스피너가 돌고 클릭이 막혀요.
//    */
//   loading?: boolean;

//   /** * 비활성화 여부
//    */
//   disabled?: boolean;

//   /** * href 속성 (as="a"일 때만 사용)
//    */
//   href?: string;

//   /** * target 속성 (as="a"일 때만 사용)
//    */
//   target?: string;
// }

// // HTML 기본 속성(`onClick`, `type` 등)을 합쳐주는 타입 마법
// // (as="a"일 때는 href를, as="button"일 때는 type을 받을 수 있게 해줍니다)
// type ButtonProps<T extends React.ElementType> = ButtonBaseProps &
//   Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonBaseProps>;

// // 3. 컴포넌트 구현
// export const Button = <T extends React.ElementType = "button">({
//   as,
//   color = "primary",
//   variant = "fill",
//   display = "inline",
//   size = "xlarge",
//   loading = false,
//   disabled,
//   className,
//   children,
//   ...props
// }: ButtonProps<T>) => {
//   const Component = as || "button";
//   const isDisabled = disabled || loading;

//   return (
//     <button
//       className={cn(
//         buttonVariants({ color, variant, display, size, className })
//       )}
//       disabled={isDisabled}
//       aria-disabled={isDisabled}
//       data-loading={loading}
//       {...props}
//     >
//       {loading && (
//         <span className="mr-2 animate-spin">
//           <svg
//             className="h-4 w-4"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             />
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//             />
//           </svg>
//         </span>
//       )}
//       {children}
//     </button>
//   );
// };

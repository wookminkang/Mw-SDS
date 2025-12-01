function ListFooter() {
  return <div>ListFooter</div>;
}

export { ListFooter };

// import { cn } from "../../lib/utils";
// import { Icon, IconName } from "./Icon";

// // 1. Props 정의
// interface ListFooterProps {
//   children: React.ReactNode;
//   // icon은 이름(string)일 수도 있고, <ListFooter.Icon />(ReactNode)일 수도 있음
//   icon?: IconName | React.ReactNode;
//   iconColor?: string;
//   textColor?: string;
//   className?: string;
//   onClick?: () => void;
// }

// // 2. 메인 컴포넌트
// const ListFooterMain = ({
//   children,
//   icon,
//   iconColor,
//   textColor,
//   className,
//   onClick,
// }: ListFooterProps) => {
//   return (
//     <button
//       onClick={onClick}
//       className={cn(
//         "flex w-full items-center justify-center gap-1 py-4 text-sm font-medium transition-colors hover:bg-gray-50",
//         // textColor가 없으면 기본값 slate-500
//         textColor ? textColor : "text-slate-500",
//         className
//       )}
//       style={textColor?.startsWith("#") ? { color: textColor } : undefined}
//     >
//       {/* 텍스트 렌더링 */}
//       <span>{children}</span>

//       {/* 아이콘 렌더링 로직 */}
//       {icon && (
//         <>
//           {typeof icon === "string" ? (
//             // 1. icon이 문자열("icon-plus...")이면 내부 Icon 컴포넌트 사용
//             <Icon name={icon as IconName} color={iconColor} />
//           ) : (
//             // 2. icon이 컴포넌트(<Icon />)면 그대로 렌더링
//             icon
//           )}
//         </>
//       )}
//     </button>
//   );
// };

// // 3. 서브 컴포넌트 (ListFooter.Icon)
// // 사용자가 커스텀하게 아이콘을 넣고 싶을 때 사용
// const FooterIcon = (props: React.ComponentProps<typeof Icon>) => {
//   return <Icon {...props} />;
// };

// // 4. 합치기
// export const ListFooter = Object.assign(ListFooterMain, {
//   Icon: FooterIcon,
// });

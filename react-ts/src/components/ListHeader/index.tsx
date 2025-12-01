import { cn } from "../../lib/utils";

type ListHeaderProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
  children?: React.ReactNode | string;
};

const ListHeaderMain = ({
  title,
  description,
  right,
  className,
}: ListHeaderProps) => {
  return (
    <div className="flex items-center justify-between py-4 px-5 bg-white w-full">
      <div className={cn("flex flex-col gap-1", className)}>
        {title}
        {description}
      </div>
      {right && <>{right}</>}
    </div>
  );
};

const title = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("text-xl font-bold", className)}> {children}</div>;
};

const description = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("text-sm text-gray-500", className)}> {children}</div>
  );
};

const right = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center h-full text-xs">{children}</div>;
};

// 3. 합치기!
export const ListHeader = Object.assign(ListHeaderMain, {
  title,
  description,
  right,
});

// const ListHeader = ({
//   title,
//   description,
//   right,
//   className,
//   children,
// }: ListHeaderProps) => {
//   return (
//     <div className="flex items-start justify-between py-4 px-5 bg-white w-full">
//       {title}
//     </div>
//   );
// }

// export { ListHeader };

// import { cn } from "../../lib/utils";
// import { Text } from "./Text";

// // 1. 부모 컴포넌트 (레이아웃)
// interface ListHeaderProps {
//   title: React.ReactNode;
//   description?: React.ReactNode;
//   right?: React.ReactNode;
//   className?: string;
// }

// const ListHeaderMain = ({
//   title,
//   description,
//   right,
//   className,
// }: ListHeaderProps) => {
//   return (
//     <div
//       className={cn(
//         "flex items-start justify-between py-4 px-5 bg-white w-full",
//         className
//       )}
//     >
//       <div className="flex flex-col gap-1">
//         {title}
//         {description}
//       </div>
//       {right && <div className="ml-4 flex items-center h-full">{right}</div>}
//     </div>
//   );
// };

// // 2. 자식 컴포넌트들 (Text를 래핑해서 의미 부여)
// const TitleParagraph = (props: React.ComponentProps<typeof Text>) => (
//   <Text typography="t1" fontWeight="bold" {...props} />
// );

// const DescriptionParagraph = (props: React.ComponentProps<typeof Text>) => (
//   <Text typography="t6" color="grey600" {...props} />
// );

// const RightText = (props: React.ComponentProps<typeof Text>) => (
//   <Text typography="t6" color="grey700" {...props} />
// );

// // 3. 합치기!
// export const ListHeader = Object.assign(ListHeaderMain, {
//   TitleParagraph,
//   DescriptionParagraph,
//   RightText,
// });

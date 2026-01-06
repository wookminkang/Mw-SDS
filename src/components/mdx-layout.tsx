export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none 
      prose-headings:font-bold prose-headings:tracking-tight
      prose-h1:text-3xl sm:prose-h1:text-4xl md:prose-h1:text-5xl
      prose-h2:text-2xl sm:prose-h2:text-3xl md:prose-h2:text-4xl
      prose-h3:text-xl sm:prose-h3:text-2xl md:prose-h3:text-3xl
      prose-p:leading-7 prose-li:leading-7">
      {children}
    </div>
  )
}

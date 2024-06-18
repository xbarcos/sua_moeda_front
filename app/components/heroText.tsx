export default function HeroText(props: any) {
  const { title, subtitle, dark, biggest } = props;
  return (
    <>
      <h1 className={`mb-4 ${biggest ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-xl lg:text-3xl'} font-extrabold tracking-tight leading-none  ${dark ? "text-gray-900" : "text-white"}`}>
        {title}
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
        {subtitle}
      </p>
    </>
  );
}

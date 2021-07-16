function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      {/* Height with 8 and margin bottom 1 */}
      <Icon className="h-8 mb-1 group-hover:h-9" />
      <p className="opacity-0 tracking-widest group-hover:opacity-100">{title}</p>
    </div>
  );
}

export default HeaderItem;

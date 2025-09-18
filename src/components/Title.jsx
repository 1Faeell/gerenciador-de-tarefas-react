function Title({ children, ...props }) {
  return (
    <h1
      className={`text-3xl text-slate-100 font-bold text-center rounded-md shadow-xl p-4`}
      {...props}
    >
      {children}
    </h1>
  );
}

export default Title;

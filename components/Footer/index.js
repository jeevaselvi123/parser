export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 bg-[#eaa03f] p-4 text-xs text-white md:flex-row md:justify-center">
      <div>Copyright &copy; {new Date().getFullYear()} Nearley Parser</div>
    </footer>
  );
}

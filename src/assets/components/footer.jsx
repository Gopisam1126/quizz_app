function Footer() {
  const date = new Date();
  const yr = date.getFullYear();

  return (
    <>
      <div className="fixed bottom-0 left-0 w-screen flex items-center justify-center h-10">
        <p className="opacity-30">copyright @QuantumStax {yr}</p>
      </div>
    </>
  );
}

export default Footer;

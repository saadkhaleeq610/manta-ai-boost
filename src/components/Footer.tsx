const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <div className="flex justify-center mb-8">
            <div
              className="w-15 h-15 lg:w-28 lg:h-28 rounded-full bg-primary border-4 border-primary flex items-center justify-center transition-transform duration-500 ease-out hover:scale-110 hover:rotate-6"
              style={{
                boxShadow: "0 8px 25px 4px hsla(199, 89%, 58%, 0.6)",
              }}
            >
              <img
                src="/lovable-uploads/a42b1506-349c-4671-bc58-b5acd43957bc.png"
                alt="Blue Manta Labs Logo"
                className="w-14 h-14 lg:w-14 lg:h-24 object-contain transition-transform duration-500 ease-out hover:scale-110"
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-accent mb-4">Blue Manta Labs</h3>
          
          <div className="space-y-2 text-muted-foreground">
            <p>support@bluemantalabs.com</p>
            <p>(714) 769-0249</p>
            <p className="mt-4">© 2025 Copyright - Blue Manta Labs</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
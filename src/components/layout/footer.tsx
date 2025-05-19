export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background py-6 text-center text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-sm">&copy; {currentYear} Varun Kumar Trehan. All rights reserved.</p>
        <p className="text-xs mt-1">Designed with passion and code.</p>
      </div>
    </footer>
  );
}

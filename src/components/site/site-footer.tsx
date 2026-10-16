import { Brand } from '@/components/ui/brand';

export function SiteFooter() {
  return (
    <footer className="site-footer" id="safety">
      <Brand compact />
      <p>Share your route. Split your ride.</p>
      <div className="footer-links">
        <a href="#how">How it works</a><a href="#safety">Safety</a><a href="mailto:hello@waypadi.com">Contact</a>
      </div>
      <span className="copyright">© 2026 WayPadi</span>
    </footer>
  );
}

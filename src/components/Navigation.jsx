import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, profile } from "../data/portfolio";

export default function Navigation() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = useRef(null);
  const initials = profile.name
    .trim()
    .split(/\s+/)
    .map((part) => part[0].toLowerCase());
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    navItems.forEach(({ id }) => {
      const target = document.getElementById(id);
      if (target) observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);
  function close() {
    menu.current.close();
    setMenuOpen(false);
  }
  function open() {
    menu.current.showModal();
    setMenuOpen(true);
  }
  function links(mobile = false) {
    return navItems.map((item) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        aria-current={active === item.id ? "location" : undefined}
        className={active === item.id ? "is-active" : ""}
        onClick={() => {
          setActive(item.id);
          if (mobile) close();
        }}
      >
        {item.label}
        {mobile && <ArrowUpRight size={20} aria-hidden="true" />}
      </a>
    ));
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a href="#home" className="brand" aria-label={`${profile.name}, home`}>
          {initials[0]}
          <span className="brand-slash">/</span>
          {initials.at(-1)}
          <span className="brand-dot">.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links()}
        </nav>
        <a href={`mailto:${profile.email}`} className="header-contact">
          Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="mobile-toggle icon-button"
          aria-label="Open navigation"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          onClick={open}
        >
          <Menu size={22} />
        </button>
      </header>
      <dialog
        ref={menu}
        className="mobile-dialog"
        aria-labelledby="mobile-menu-title"
        onClose={() => setMenuOpen(false)}
        onClick={(e) => {
          if (e.target === menu.current) close();
        }}
      >
        <div className="mobile-dialog-inner">
          <div className="flex items-center justify-between">
            <span id="mobile-menu-title" className="eyebrow">
              Explore the portfolio
            </span>
            <button
              className="icon-button"
              onClick={close}
              aria-label="Close navigation"
            >
              <X />
            </button>
          </div>
          <nav aria-label="Mobile navigation">{links(true)}</nav>
          <p>
            Code with curiosity.
            <br />
            Build with intention.
          </p>
        </div>
      </dialog>
    </>
  );
}

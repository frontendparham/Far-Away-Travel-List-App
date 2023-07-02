import { LinkedinLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react";

export default function SideBar({ theme, setTheme }) {
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className="sidebar">
      <label class="sidebar__toggle-theme">
        <input type="checkbox" value={theme} onChange={toggleTheme} />
        <div class="sidebar__toggle-theme-slider">
          <div class="sidebar__toggle-theme-circle"></div>
        </div>
      </label>
      <div className="sidebar__socials">
        <ul className="sidebar__socials-list">
          <li>
            <a href="https://www.linkedin.com/in/parham-tavakolian/">
              <LinkedinLogo
                size={32}
                style={{ color: theme === "light" ? "#313131" : "#eee" }}
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/frontendparham">
              <GithubLogo
                size={32}
                style={{ color: theme === "light" ? "#313131" : "#eee" }}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ecofrontend/">
              <InstagramLogo
                size={32}
                style={{ color: theme === "light" ? "#313131" : "#eee" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

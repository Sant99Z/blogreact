
import { Logout } from "./Logout";

export const Header = () => {
  return (
    <header className="app-header">
      <h1>Mi Blog de Destinos</h1>
      <nav>
        <Logout /> {/* Botón de cerrar sesión */}
      </nav>
    </header>
  );
};

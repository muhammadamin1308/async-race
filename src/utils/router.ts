import renderGarageView from '../views/garage';
import renderWinnersView from '../views/winners';

type RouteHandler = (container: HTMLElement) => void;

const routes: Record<string, RouteHandler> = {
  garage: renderGarageView,
  winners: renderWinnersView,
};

export function initRouter(containerId: string = 'app'): void {
  document.getElementById(containerId);
  const renderRoute = (): void => {
    const container = document.getElementById(containerId) as HTMLElement;
    if (!container) {
      throw new Error(`Container with ID "${containerId}" not found`);
    }

    const route = window.location.hash.slice(2) || 'garage';
    const handler = routes[route];
    console.log(handler);
    if (handler) {
      handler(container);
    } else {
      container.innerHTML = '<h2>404 Page Not Found</h2>';
    }
  };

  window.addEventListener('hashchange', renderRoute);
  window.addEventListener('load', renderRoute);
}

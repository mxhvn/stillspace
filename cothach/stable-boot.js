(() => {
  'use strict';
  const put = (k, v) => localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v));
  try {
    const q = new URLSearchParams(location.search);
    if (q.get('reset') === '1') {
      ['seed', 'start-node', 'restore-progress', 'ct-stable-started'].forEach(k => localStorage.removeItem(k));
    }
    put('config-vehicle-type', 'Bike');
    put('config-vehicle-mode', 2);
    put('config-vehicle-input', 0);
    put('config-vehicle-speed', 1);
    put('config-vehicle-grip', 1);
    put('config-vehicle-show-wheel', true);

    put('config-view-lod-index', 2);
    put('config-detail-lod-index', 1);
    put('config-render-scale', 2);
    put('config-antialias', true);
    put('config-vertical-fov', 68);

    // Fixed known-good scene. No extra context panel and no seed manipulation.
    put('config-scene-name', 'Hills');
    put('config-scene-topography', 'casual');
    put('config-scene-skin', 'summer');
    put('config-scene-weather-index', 1);

    put('Units', 1);
    put('ShowWorm', 2);
    put('AutoPause', 0);
    put('Barriers', true);
    put('has-autodrive', true);
    put('speed-control_enabled', true);
    put('speed-control_speed', 100 / 3.6);
    put('speed-control_control', 0);
    put('analytics_disable', true);
    put('analytics-nowrite', true);
  } catch (e) {
    console.warn('[Still Space] boot defaults skipped', e);
  }
})();

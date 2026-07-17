(() => {
  'use strict';

  const $ = (selector) => document.querySelector(selector);

  function clickFirst(selectors) {
    for (const selector of selectors) {
      const element = $(selector);
      if (!element) continue;
      element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
      if (typeof element.click === 'function') element.click();
      return true;
    }
    return false;
  }

  function startGame() {
    const started = clickFirst([
      '#home-begin',
      '#home-button',
      '#ui-mouse-prompt',
      '[id*="begin"]',
      '#home button'
    ]);

    if (started) {
      document.body.classList.add('ct-running');
      localStorage.setItem('ct-stable-started', '1');
    }
  }

  function addStartButton() {
    if ($('#ct-start')) return;
    const button = document.createElement('button');
    button.id = 'ct-start';
    button.type = 'button';
    button.textContent = 'BẮT ĐẦU';
    button.addEventListener('click', startGame);
    document.body.appendChild(button);
  }

  function watchdog() {
    const autoDriveButton = $('#autodrive-button');
    if (autoDriveButton && /off/i.test(autoDriveButton.textContent || '')) {
      autoDriveButton.parentElement?.dispatchEvent(
        new MouseEvent('mousedown', { bubbles: true })
      );
    }

    if ($('canvas') && !$('#home')) {
      document.body.classList.add('ct-running');
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    addStartButton();

    setTimeout(() => {
      if (localStorage.getItem('ct-stable-started') === '1') startGame();
    }, 1800);

    setInterval(watchdog, 3000);
  });
})();

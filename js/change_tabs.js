document.addEventListener('DOMContentLoaded', function () {
  const tabs = [
    {
      button: document.getElementById('tab-description'),
      panel: document.getElementById('tab-content-description')
    },
    {
      button: document.getElementById('tab-specs'),
      panel: document.getElementById('tab-content-specs')
    },
    {
      button: document.getElementById('tab-documentation'),
      panel: document.getElementById('tab-content-documentation')
    }
  ];

  function activateTab(activeIndex) {
    tabs.forEach((tab, index) => {
      if (!tab.button || !tab.panel) return;

      const isActive = index === activeIndex;
      tab.button.setAttribute('aria-selected', isActive ? 'true' : 'false');
      tab.button.classList.toggle('text-blue-600', isActive);
      tab.button.classList.toggle('text-slate-600', !isActive);
      tab.button.classList.toggle('border-blue-600', isActive);
      tab.button.classList.toggle('border-transparent', !isActive);
      tab.panel.classList.toggle('hidden', !isActive);
    });
  }

  tabs.forEach((tab, index) => {
    if (!tab.button) return;
    tab.button.addEventListener('click', function () {
      activateTab(index);
    });
  });

  activateTab(0);
});

function viewImage(src) {
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  if (!modal || !modalImage) return;

  modalImage.src = src;
  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('image-modal');
  if (!modal) return;
  modal.classList.add('hidden');
}

function toExchangeImage(button) {
  const thumbnail = button.querySelector('img');
  const mainImage = document.getElementById('img_main');
  if (!thumbnail || !mainImage) return;
  mainImage.src = thumbnail.src;
}

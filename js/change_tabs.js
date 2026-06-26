document.addEventListener('DOMContentLoaded', function () {
  const productTab = document.getElementById('product-tab');
  const imagesTab = document.getElementById('images-tab');
  const informationSection = document.getElementById('information-section');
  const imagesSection = document.getElementById('images-section');

  if (productTab && imagesTab && informationSection && imagesSection) {
    productTab.addEventListener('click', function () {
      productTab.classList.add('bg-blue-600', 'text-white');
      productTab.classList.remove('bg-gray-100', 'text-gray-700');
      imagesTab.classList.add('bg-gray-100', 'text-gray-700');
      imagesTab.classList.remove('bg-blue-600', 'text-white');
      informationSection.classList.remove('hidden');
      imagesSection.classList.add('hidden');
    });

    imagesTab.addEventListener('click', function () {
      imagesTab.classList.add('bg-blue-600', 'text-white');
      imagesTab.classList.remove('bg-gray-100', 'text-gray-700');
      productTab.classList.add('bg-gray-100', 'text-gray-700');
      productTab.classList.remove('bg-blue-600', 'text-white');
      informationSection.classList.add('hidden');
      imagesSection.classList.remove('hidden');
    });
  }
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

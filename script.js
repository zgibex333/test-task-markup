const PRODUCTS = [
  {
    id: 1,
    currentPrice: 100,
    oldPrice: 120,
    img: "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/b/2/d/295155-web_1010x1180_transparent_png.png",
    description:
      "Nivea Creme: Classic moisturizer for all skin types, deeply hydrating and soothing.",
  },
  {
    id: 2,
    currentPrice: 100,
    oldPrice: undefined,
    img: "https://images-eu.nivea.com/-/media/miscellaneous/media-center-items/f/b/b/5668a49773e64d8587c8d84561665135-web_1010x1180_transparent_png.png",
    description:
      "Nivea Q10 Firming Lotion: Firms and tightens skin with Q10 and Vitamin C, improves elasticity.",
  },
  {
    id: 3,
    currentPrice: 100,
    oldPrice: 120,
    img: "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/b/2/d/295155-web_1010x1180_transparent_png.png",
    description:
      "Nivea Men Sensitive: Soothes irritation, hydrates, and calms sensitive skin with chamomile extract.",
  },
  {
    id: 4,
    currentPrice: 100,
    oldPrice: 120,
    img: "https://images-eu.nivea.com/-/media/miscellaneous/media-center-items/f/b/b/5668a49773e64d8587c8d84561665135-web_1010x1180_transparent_png.png",
    description:
      "Nivea Men Sensitive: Soothes irritation, hydrates, and calms sensitive skin with chamomile extract.",
  },
  {
    id: 5,
    currentPrice: 100,
    oldPrice: undefined,
    img: "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/b/2/d/295155-web_1010x1180_transparent_png.png",
    description:
      "Nivea Micellar Water: Gentle cleanser, removes makeup and impurities, no rinsing required.",
  },
  {
    id: 6,
    currentPrice: 100,
    oldPrice: 120,
    img: "https://images-eu.nivea.com/-/media/miscellaneous/media-center-items/f/b/b/5668a49773e64d8587c8d84561665135-web_1010x1180_transparent_png.png",
    description:
      "Nivea In-Shower Body Lotion: Moisturizes in the shower, leaves skin silky and smooth.",
  },
];

function addToCart(button) {
  button.classList.add("btn-loading");
  const cardContainer = button.parentNode.parentNode;
  setTimeout(() => {
    button.classList.remove("btn-loading");
    cardContainer.innerHTML += `<div class="error">Error: try later</div>`;
  }, 1000);
}

const formatPrice = (price) => {
  return `$${parseFloat(price).toFixed(2)}`;
};

const createProductCard = ({ currentPrice, oldPrice, description, img }) => {
  return `
    <div class="product">
          <div class="product-header">
            <img
              class="product-image"
              src="${img}"
              alt="product"
            />
          </div>
          <div class="product-footer">
            <p class="product-description">${description}</p>
            <div class="product-controls">
              <div class="price">
                ${
                  oldPrice === undefined
                    ? ""
                    : `<span class="old-price">${formatPrice(oldPrice)}</span>`
                }
                <span class="current-price">${formatPrice(currentPrice)}</span>
              </div>
              <button class="add-to-cart-button" onclick="addToCart(this)">
                <span class="loader"></span>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
`;
};

const productsContainer = document.querySelector(".products");

productsContainer &&
  PRODUCTS.forEach((product) => {
    productsContainer.innerHTML += createProductCard(product);
  });

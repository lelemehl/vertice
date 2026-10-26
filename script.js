// ==========================================
// VÉRTICE — JAVASCRIPT COMPLETO
// ==========================================

// ==========================================
// CATÁLOGO SEM PEÇAS DUPLICADAS
// ==========================================

const products = [
  {
    id: 1,
    name: "Camiseta Boxy Vértice",
    category: "camisetas",
    price: 89.90,
    tag: "MAIS VENDIDO",
    description: "Camiseta de caimento amplo para compor looks urbanos.",
    image: "images/1.jpg"
  },
  {
    id: 2,
    name: "Moletom Essential",
    category: "moletons",
    price: 189.90,
    tag: "ESSENCIAL",
    description: "Moletom confortável, com visual minimalista e versátil.",
    image: "images/2.jpg"
  },
  {
    id: 3,
    name: "Camiseta Urban",
    category: "camisetas",
    price: 99.90,
    tag: "NOVO",
    description: "Uma peça básica com presença para usar todos os dias.",
    image: "images/3.jpg"
  },
  {
    id: 4,
    name: "Boné Vértice 06",
    category: "acessorios",
    price: 69.90,
    tag: "EDIÇÃO LIMITADA",
    description: "Acessório casual para finalizar seu visual.",
    image: "images/4.jpg"
  },
  {
    id: 5,
    name: "Calça Cargo Utility",
    category: "calcas",
    price: 169.90,
    tag: "URBAN FIT",
    description: "Calça inspirada na utilidade urbana, com estilo descontraído.",
    image: "images/5.jpg"
  },
  {
    id: 6,
    name: "Moletom Cloud",
    category: "moletons",
    price: 199.90,
    tag: "CONFORTO",
    description: "Camada confortável para dias mais frios e noites na cidade.",
    image: "images/6.jpg"
  },
  {
    id: 7,
    name: "Bolsa Crossbody",
    category: "acessorios",
    price: 79.90,
    tag: "FUNCIONAL",
    description: "Bolsa compacta e prática para levar o essencial.",
    image: "images/7.jpg"
  },
  {
    id: 8,
    name: "Camiseta Graphic",
    category: "camisetas",
    price: 109.90,
    tag: "ARTE URBANA",
    description: "Camiseta gráfica para dar personalidade ao look.",
    image: "images/8.jpg"
  },
  {
    id: 9,
    name: "Camiseta Oversized Listrada",
    category: "camisetas",
    price: 119.90,
    tag: "NOVO",
    description: "Listras e modelagem ampla para um visual urbano.",
    image: "images/9.jpg"
  },
  {
    id: 10,
    name: "Camiseta Raglan Street",
    category: "camisetas",
    price: 129.90,
    tag: "NOVO",
    description: "Recortes raglan e caimento oversized.",
    image: "images/10.jpg"
  },
  {
    id: 11,
    name: "Camiseta Ringer Bordô",
    category: "camisetas",
    price: 109.90,
    tag: "NOVO",
    description: "Gola contrastante e corte boxy com inspiração retrô.",
    image: "images/11.jpg"
  },
  {
    id: 12,
    name: "Baby Tee Estonada",
    category: "camisetas",
    price: 89.90,
    tag: "NOVO",
    description: "Modelagem curta com acabamento estonado.",
    image: "images/12.jpg"
  },
  {
    id: 13,
    name: "Calça Jeans Baggy",
    category: "calcas",
    price: 219.90,
    tag: "NOVO",
    description: "Jeans de pernas amplas inspirado na cultura skate.",
    image: "images/13.jpg"
  },
  {
    id: 14,
    name: "Calça Baggy Tech Marrom",
    category: "calcas",
    price: 189.90,
    tag: "NOVO",
    description: "Modelagem baggy com estética utilitária.",
    image: "images/14.jpg"
  },
  {
    id: 15,
    name: "Shorts Curve Verde",
    category: "bermudas",
    price: 99.90,
    tag: "NOVO",
    description: "Shorts leves de pegada esportiva e urbana.",
    image: "images/15.jpg"
  },
  {
    id: 16,
    name: "Bermuda Baggy Camuflada",
    category: "bermudas",
    price: 139.90,
    tag: "NOVO",
    description: "Bermuda ampla com estampa camuflada.",
    image: "images/16.jpg"
  },
  {
    id: 17,
    name: "Minissaia Street Estampada",
    category: "saias",
    price: 109.90,
    tag: "NOVO",
    description: "Minissaia casual para composições streetwear.",
    image: "images/17.jpg"
  },
  {
    id: 18,
    name: "Conjunto Moletom Oversized",
    category: "conjuntos",
    price: 299.90,
    tag: "NOVO",
    description: "Conjunto de moletom com modelagem ampla e visual estonado.",
    image: "images/18.jpg"
  },
  {
    id: 20,
    name: "Polo Cropped Feminina Listrada",
    category: "camisetas",
    price: 129.90,
    tag: "NOVO",
    description: "Polo cropped listrada com modelagem ampla e inspiração esportiva.",
    image: "images/20.jpg"
  },
  {
    id: 21,
    name: "Microshorts Feminino Street Cinza",
    category: "bermudas",
    price: 99.90,
    tag: "NOVO",
    description: "Microshorts de moletom cinza para combinar com baby tee ou camiseta oversized.",
    image: "images/21.jpg"
  },
  {
    id: 23,
    name: "Minissaia Feminina Cargo Camuflada",
    category: "saias",
    price: 119.90,
    tag: "STREET",
    description: "Minissaia camuflada em tons de areia, com estética utilitária para looks streetwear.",
    image: "images/23.jpg"
  },
  {
    id: 24,
    name: "Baby Tee Feminina Rosa Estonada",
    category: "camisetas",
    price: 89.90,
    tag: "NOVO",
    description: "Baby tee rosa estonada para trazer cor ao look com jeans baggy, shorts ou saia.",
    image: "images/24.jpg"
  }
];

// ==========================================
// ELEMENTOS DO HTML
// ==========================================

const productGrid = document.querySelector("#productGrid");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const filters = document.querySelector("#filters");

const cartDrawer = document.querySelector("#cartDrawer");
const overlay = document.querySelector("#overlay");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const drawerCount = document.querySelector("#drawerCount");
const cartTotal = document.querySelector("#cartTotal");

const productDialog = document.querySelector("#productDialog");
const dialogContent = document.querySelector("#dialogContent");
const toast = document.querySelector("#toast");

const favoritesDrawer = document.querySelector("#favoritesDrawer");
const favoritesItems = document.querySelector("#favoritesItems");

const checkoutDialog = document.querySelector("#checkoutDialog");
const checkoutForm = document.querySelector("#checkoutForm");
const orderResult = document.querySelector("#orderResult");
const paymentFields = document.querySelector("#paymentFields");
const stateSelect = document.querySelector("#stateSelect");
const citySelect = document.querySelector("#citySelect");

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

// ==========================================
// ESTADOS DA LOJA
// ==========================================

let activeCategory = "todos";
let favorites = new Set();
let cart = [];
let toastTimeout;
let lastDrawerTrigger = null;

let locations = window.VERTICE_LOCATIONS || [];

const categoryNames = {
  camisetas: "Camisetas",
  moletons: "Moletons",
  calcas: "Calças",
  acessorios: "Acessórios",
  bermudas: "Bermudas",
  saias: "Saias",
  conjuntos: "Conjuntos"
};

// ==========================================
// ESTILO DO CORAÇÃO
// Não exige alterações no CSS.
// ==========================================

const favoriteStyle = document.createElement("style");

favoriteStyle.textContent = `
  #productGrid .product-image {
    position: relative !important;
    isolation: isolate;
  }

  #productGrid .favorite-button {
    position: absolute !important;
    top: 12px !important;
    right: 12px !important;
    bottom: auto !important;
    left: auto !important;

    z-index: 10 !important;

    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;

    width: 42px !important;
    height: 42px !important;
    min-width: 42px !important;

    margin: 0 !important;
    padding: 9px !important;

    border: 1px solid #dddddd !important;
    border-radius: 50% !important;

    background: #ffffff !important;
    color: #202020 !important;

    opacity: 1 !important;
    visibility: visible !important;

    transform: none !important;
    pointer-events: auto !important;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    appearance: none;
  }

  #productGrid .favorite-button svg {
    display: block !important;
    width: 24px !important;
    height: 24px !important;
    flex-shrink: 0;
    pointer-events: none !important;
  }

  #productGrid .favorite-button.is-favorite {
    color: #d62845 !important;
    background: #ffffff !important;
    border-color: #d62845 !important;
  }

  #productGrid .favorite-button:focus-visible {
    outline: 3px solid #151515 !important;
    outline-offset: 3px;
  }
`;

document.head.appendChild(favoriteStyle);

// ==========================================
// FUNÇÕES AUXILIARES
// ==========================================

function money(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function sizesFor(product) {
  return product.category === "acessorios"
    ? ["Único"]
    : ["P", "M", "G", "GG"];
}

function cartTotalValue() {
  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

function heartIcon(isFavorite) {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="${isFavorite ? "currentColor" : "none"}"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="
        M20.84 4.61
        a5.5 5.5 0 0 0-7.78 0
        L12 5.67
        l-1.06-1.06
        a5.5 5.5 0 0 0-7.78 7.78
        l1.06 1.06
        L12 21.23
        l7.78-7.78
        1.06-1.06
        a5.5 5.5 0 0 0 0-7.78
        Z
      "/>
    </svg>
  `;
}

// ==========================================
// CARTÃO DO PRODUTO
// ==========================================

function productCard(product) {
  const isFavorite = favorites.has(product.id);

  return `
    <article class="product-card">
      <div
        class="product-image"
        data-view="${product.id}"
        tabindex="0"
        role="button"
        aria-label="Ver ${product.name}"
      >
        <img
          class="product-photo"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x800/f0efe9/222222?text=VERTICE';"
        >

        <span class="product-tag">
          ${product.tag}
        </span>

        <button
          type="button"
          class="favorite-button ${isFavorite ? "is-favorite" : ""}"
          data-favorite="${product.id}"
          aria-pressed="${isFavorite}"
          aria-label="${
            isFavorite
              ? `Remover ${product.name} dos favoritos`
              : `Adicionar ${product.name} aos favoritos`
          }"
          title="${
            isFavorite
              ? "Remover dos favoritos"
              : "Adicionar aos favoritos"
          }"
        >
          ${heartIcon(isFavorite)}
        </button>

        <button
          type="button"
          class="quick-view"
          data-view="${product.id}"
        >
          VER DETALHES
        </button>
      </div>

      <div class="product-info">
        <p class="product-category">
          ${categoryNames[product.category]}
        </p>

        <div class="product-title-row">
          <h3 class="product-title">
            ${product.name}
          </h3>

          <span class="product-price">
            ${money(product.price)}
          </span>
        </div>

        <p class="product-description">
          ${product.description}
        </p>

        <button
          type="button"
          class="add-button"
          data-choose="${product.id}"
        >
          ESCOLHER ${
            product.category === "acessorios"
              ? "PEÇA"
              : "TAMANHO"
          } +
        </button>
      </div>
    </article>
  `;
}

// ==========================================
// MOSTRAR, PESQUISAR E FILTRAR
// ==========================================

function renderProducts() {
  const query = searchInput.value
    .trim()
    .toLocaleLowerCase("pt-BR");

  const list = products.filter(product => {
    const matchesCategory =
      activeCategory === "todos" ||
      product.category === activeCategory;

    const searchableText = `
      ${product.name}
      ${product.description}
      ${categoryNames[product.category]}
    `.toLocaleLowerCase("pt-BR");

    return (
      matchesCategory &&
      searchableText.includes(query)
    );
  });

  if (sortSelect.value === "low") {
    list.sort((a, b) => a.price - b.price);
  }

  if (sortSelect.value === "high") {
    list.sort((a, b) => b.price - a.price);
  }

  if (sortSelect.value === "name") {
    list.sort((a, b) =>
      a.name.localeCompare(b.name, "pt-BR")
    );
  }

  productGrid.innerHTML = list.map(productCard).join("");

  resultCount.textContent =
    `${list.length} ${
      list.length === 1
        ? "peça encontrada"
        : "peças encontradas"
    }`;

  emptyState.hidden = list.length !== 0;
}

// ==========================================
// FAVORITAR E DESFAVORITAR
// ==========================================

function toggleFavorite(id, button) {
  const productId = Number(id);

  if (favorites.has(productId)) {
    favorites.delete(productId);
    showToast("Removido dos favoritos.");
  } else {
    favorites.add(productId);
    showToast("Adicionado aos favoritos.");
  }

  const isFavorite = favorites.has(productId);
  const product = products.find(item => item.id === productId);

  // Atualiza o próprio botão sem recriar o catálogo.
  if (button && product) {
    button.classList.toggle("is-favorite", isFavorite);

    button.setAttribute(
      "aria-pressed",
      String(isFavorite)
    );

    button.setAttribute(
      "aria-label",
      isFavorite
        ? `Remover ${product.name} dos favoritos`
        : `Adicionar ${product.name} aos favoritos`
    );

    button.title = isFavorite
      ? "Remover dos favoritos"
      : "Adicionar aos favoritos";

    button.innerHTML = heartIcon(isFavorite);
  }

  renderFavorites();
}

function renderFavorites() {
  document.querySelector("#favoritesCount")
    .textContent = favorites.size;

  document.querySelector("#favoritesDrawerCount")
    .textContent = `(${favorites.size})`;

  const selected = products.filter(product =>
    favorites.has(product.id)
  );

  favoritesItems.innerHTML = selected.map(product => `
    <article class="cart-item favorite-item">
      <img
        src="${product.image}"
        alt="${product.name}"
        onerror="this.onerror=null;this.src='https://placehold.co/200x250/f0efe9/222222?text=VERTICE';"
      >

      <div>
        <h3>${product.name}</h3>
        <p>${money(product.price)}</p>

        <button
          type="button"
          class="add-button"
          data-choose="${product.id}"
        >
          ESCOLHER PEÇA
        </button>

        <button
          type="button"
          class="remove-item"
          data-unfavorite="${product.id}"
        >
          REMOVER DOS FAVORITOS
        </button>
      </div>
    </article>
  `).join("") || `
    <p class="cart-empty">
      Você ainda não tem favoritos.<br>
      Toque no coração de uma peça para salvá-la.
    </p>
  `;
}

function openFavorites() {
  closeCart(false);

  lastDrawerTrigger = document.activeElement;

  renderFavorites();

  favoritesDrawer.inert = false;
  favoritesDrawer.classList.add("open");
  favoritesDrawer.setAttribute("aria-hidden", "false");

  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";

  document.querySelector("#favoritesClose").focus();
}

function closeFavorites(restoreFocus = true) {
  const wasOpen = favoritesDrawer.classList.contains("open");

  favoritesDrawer.classList.remove("open");
  favoritesDrawer.inert = true;
  favoritesDrawer.setAttribute("aria-hidden", "true");

  if (!cartDrawer.classList.contains("open")) {
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
  }

  if (wasOpen && restoreFocus && lastDrawerTrigger) {
    lastDrawerTrigger.focus();
  }
}

document.querySelector(".favorites-open")
  .addEventListener("click", openFavorites);

document.querySelector("#favoritesClose")
  .addEventListener("click", () => {
    closeFavorites();
  });

favoritesItems.addEventListener("click", event => {
  const remove = event.target.closest("[data-unfavorite]");
  const choose = event.target.closest("[data-choose]");

  if (remove) {
    favorites.delete(Number(remove.dataset.unfavorite));
    renderFavorites();
    renderProducts();
    return;
  }

  if (choose) {
    openProduct(choose.dataset.choose);
  }
});

// ==========================================
// CARRINHO
// ==========================================

function addToCart(id, size) {
  const product = products.find(
    item => item.id === Number(id)
  );

  if (!product) return;

  if (!sizesFor(product).includes(size)) {
    showToast("Escolha um tamanho.");
    return;
  }

  const existing = cart.find(
    item =>
      item.id === product.id &&
      item.size === size
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      size,
      key: `${product.id}-${size}`,
      quantity: 1
    });
  }

  renderCart();

  showToast(
    `${product.name} (${size}) adicionada à sacola.`
  );
}

function renderCart() {
  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  cartCount.textContent = count;
  drawerCount.textContent = `(${count})`;
  cartTotal.textContent = money(cartTotalValue());

  if (!cart.length) {
    cartItems.innerHTML = `
      <p class="cart-empty">
        Sua sacola está vazia.<br>
        Encontre sua próxima peça.
      </p>
    `;
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <article class="cart-item">
      <img
        src="${item.image}"
        alt="${item.name}"
        onerror="this.onerror=null;this.src='https://placehold.co/200x250/f0efe9/222222?text=VERTICE';"
      >

      <div>
        <h3>${item.name}</h3>

        <p>
          Tamanho: ${item.size} · ${money(item.price)}
        </p>

        <div class="quantity-controls">
          <button
            type="button"
            data-quantity="${item.key}"
            data-change="-1"
            aria-label="Diminuir quantidade"
          >
            −
          </button>

          <span>${item.quantity}</span>

          <button
            type="button"
            data-quantity="${item.key}"
            data-change="1"
            aria-label="Aumentar quantidade"
          >
            +
          </button>
        </div>

        <button
          type="button"
          class="remove-item"
          data-remove="${item.key}"
        >
          REMOVER
        </button>
      </div>

      <span class="cart-item-price">
        ${money(item.price * item.quantity)}
      </span>
    </article>
  `).join("");
}

function openCart() {
  closeFavorites(false);

  lastDrawerTrigger = document.activeElement;

  cartDrawer.inert = false;
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");

  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";

  document.querySelector("#cartClose").focus();
}

function closeCart(restoreFocus = true) {
  const wasOpen = cartDrawer.classList.contains("open");

  cartDrawer.inert = true;
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");

  overlay.classList.remove("visible");
  document.body.style.overflow = "";

  if (wasOpen && restoreFocus && lastDrawerTrigger) {
    lastDrawerTrigger.focus();
  }
}

document.querySelectorAll(".cart-open")
  .forEach(button => {
    button.addEventListener("click", openCart);
  });

document.querySelector("#cartClose")
  .addEventListener("click", () => {
    closeCart();
  });

overlay.addEventListener("click", () => {
  closeCart();
  closeFavorites();
});

cartItems.addEventListener("click", event => {
  const quantityButton =
    event.target.closest("[data-quantity]");

  const removeButton =
    event.target.closest("[data-remove]");

  if (quantityButton) {
    const item = cart.find(
      product =>
        product.key === quantityButton.dataset.quantity
    );

    if (!item) return;

    item.quantity += Number(
      quantityButton.dataset.change
    );

    if (item.quantity <= 0) {
      cart = cart.filter(product =>
        product.key !== item.key
      );
    }

    renderCart();
  }

  if (removeButton) {
    cart = cart.filter(
      product =>
        product.key !== removeButton.dataset.remove
    );

    renderCart();
    showToast("Produto removido da sacola.");
  }
});

// ==========================================
// DETALHES E ESCOLHA DE TAMANHO
// ==========================================

function openProduct(id) {
  const product = products.find(
    item => item.id === Number(id)
  );

  if (!product) return;

  dialogContent.innerHTML = `
    <div class="dialog-layout">
      <img
        src="${product.image}"
        alt="${product.name}"
        onerror="this.onerror=null;this.src='https://placehold.co/600x800/f0efe9/222222?text=VERTICE';"
      >

      <div class="dialog-info">
        <p class="eyebrow">
          ${categoryNames[product.category]} / VÉRTICE
        </p>

        <h2>${product.name}</h2>

        <div class="dialog-price">
          ${money(product.price)}
        </div>

        <p>${product.description}</p>

        <p>
          Uma peça pensada para combinar com diferentes
          momentos e expressar seu estilo pessoal.
        </p>

        <label
          class="size-label"
          for="productSize"
        >
          ${
            product.category === "acessorios"
              ? "Tamanho único"
              : "Escolha seu tamanho"
          }
        </label>

        <select
          id="productSize"
          class="size-select"
          required
        >
          <option value="">Selecione</option>

          ${sizesFor(product).map(size => `
            <option value="${size}">
              ${size}
            </option>
          `).join("")}
        </select>

        <button
          type="button"
          class="add-button"
          data-add="${product.id}"
        >
          ADICIONAR À SACOLA +
        </button>
      </div>
    </div>
  `;

  closeFavorites(false);
  productDialog.showModal();
}

productGrid.addEventListener("click", event => {
  const favoriteButton =
    event.target.closest("[data-favorite]");

  const chooseButton =
    event.target.closest("[data-choose]");

  const viewButton =
    event.target.closest("[data-view]");

  // O coração é tratado antes da abertura dos detalhes.
  if (favoriteButton) {
    event.preventDefault();
    event.stopPropagation();

    toggleFavorite(
      favoriteButton.dataset.favorite,
      favoriteButton
    );

    return;
  }

  if (chooseButton) {
    event.preventDefault();
    openProduct(chooseButton.dataset.choose);
    return;
  }

  if (viewButton) {
    openProduct(viewButton.dataset.view);
  }
});

productGrid.addEventListener("keydown", event => {
  if (
    (event.key === "Enter" || event.key === " ") &&
    event.target.matches(".product-image[data-view]")
  ) {
    event.preventDefault();
    openProduct(event.target.dataset.view);
  }
});

document.querySelector("#dialogClose")
  .addEventListener("click", () => {
    productDialog.close();
  });

productDialog.addEventListener("click", event => {
  if (event.target === productDialog) {
    productDialog.close();
  }
});

dialogContent.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");

  if (!button) return;

  const sizeSelect = document.querySelector("#productSize");

  if (!sizeSelect.reportValidity()) return;

  addToCart(
    button.dataset.add,
    sizeSelect.value
  );

  productDialog.close();
});

// ==========================================
// FILTROS SOMENTE POR TIPO DE PEÇA
// ==========================================

document.querySelectorAll(
  '[data-category="feminino"], ' +
  '[data-category="masculino"]'
).forEach(button => {
  button.remove();
});

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");

  if (!button) return;

  activeCategory = button.dataset.category;

  filters.querySelectorAll(".filter")
    .forEach(item => {
      item.classList.toggle(
        "active",
        item === button
      );
    });

  renderProducts();
});

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

document.querySelector("#searchToggle")
  .addEventListener("click", () => {
    document.querySelector("#colecao")
      .scrollIntoView({
        behavior: "smooth"
      });

    searchInput.focus({
      preventScroll: true
    });
  });

// ==========================================
// MENU PARA CELULAR
// ==========================================

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(mainNav.classList.contains("open"))
  );
});

mainNav.querySelectorAll("a")
  .forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

// ==========================================
// NEWSLETTER DEMONSTRATIVA
// ==========================================

document.querySelector("#newsletterForm")
  .addEventListener("submit", event => {
    event.preventDefault();

    const email = document.querySelector("#emailInput")
      .value.trim();

    if (!email) return;

    document.querySelector("#newsletterMessage")
      .textContent =
        "Inscrição demonstrativa realizada! " +
        "Obrigado por acompanhar a VÉRTICE.";

    event.target.reset();
  });

// ==========================================
// NAVEGAÇÃO POR TECLADO
// ==========================================

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
    closeFavorites();
  }

  if (event.key !== "Tab") return;

  const drawer = document.querySelector(".cart-drawer.open");

  if (!drawer) return;

  const controls = [
    ...drawer.querySelectorAll(
      "button:not([disabled]), a[href], input, select"
    )
  ];

  const first = controls[0];
  const last = controls.at(-1);

  if (!first || !last) return;

  if (
    event.shiftKey &&
    document.activeElement === first
  ) {
    event.preventDefault();
    last.focus();
  } else if (
    !event.shiftKey &&
    document.activeElement === last
  ) {
    event.preventDefault();
    first.focus();
  }
});

// ==========================================
// CHECKOUT DEMONSTRATIVO
// ==========================================

function renderPayment() {
  const method = checkoutForm.elements.pagamento.value;

  if (method === "cartao") {
    paymentFields.innerHTML = `
      <p class="field-note">
        Cartão fictício. Use o número
        0000 0000 0000 0000 e CVV 000.
        Não use um cartão real.
      </p>

      <div class="form-grid">
        <label>
          Nome impresso
          <input
            name="titular"
            required
            autocomplete="off"
            placeholder="CLIENTE EXEMPLO"
          >
        </label>

        <label>
          Número de teste
          <input
            name="cartao"
            required
            inputmode="numeric"
            autocomplete="off"
            pattern="0{4} ?0{4} ?0{4} ?0{4}"
            value="0000 0000 0000 0000"
            maxlength="19"
          >
        </label>

        <label>
          Validade de teste
          <input
            name="validade"
            required
            inputmode="numeric"
            autocomplete="off"
            pattern="(0[1-9]|1[0-2])/[0-9]{2}"
            placeholder="12/30"
            maxlength="5"
          >
        </label>

        <label>
          CVV fictício
          <input
            name="cvv"
            required
            inputmode="numeric"
            autocomplete="off"
            pattern="000"
            value="000"
            maxlength="3"
          >
        </label>

        <label>
          Parcelas
          <select name="parcelas">
            <option value="1">
              1× de ${money(cartTotalValue())}
            </option>

            <option value="2">
              2× de ${money(cartTotalValue() / 2)}
              (simulação sem juros)
            </option>

            <option value="3">
              3× de ${money(cartTotalValue() / 3)}
              (simulação sem juros)
            </option>
          </select>
        </label>
      </div>
    `;

    return;
  }

  paymentFields.innerHTML = `
    <p class="field-note">
      ${
        method === "pix"
          ? "Um QR Code fictício será exibido ao finalizar. Ele contém apenas um texto de demonstração."
          : "Um boleto fictício, sem validade bancária, será exibido ao finalizar."
      }
    </p>
  `;
}

checkoutForm.elements.pagamento.forEach(radio => {
  radio.addEventListener("change", renderPayment);
});

function clearCheckout() {
  checkoutForm.reset();
  paymentFields.replaceChildren();
  orderResult.replaceChildren();
  orderResult.hidden = true;
}

document.querySelector("#checkoutClose")
  .addEventListener("click", () => {
    checkoutDialog.close();
  });

checkoutDialog.addEventListener("close", clearCheckout);

document.querySelector("#checkoutButton")
  .addEventListener("click", () => {
    if (!cart.length) {
      showToast("Adicione uma peça antes de finalizar.");
      return;
    }

    closeCart(false);

    checkoutForm.reset();
    checkoutForm.hidden = false;

    orderResult.hidden = true;
    orderResult.replaceChildren();

    citySelect.innerHTML = `
      <option value="">
        Selecione primeiro o estado
      </option>
    `;

    citySelect.disabled = true;

    document.querySelector("#locationStatus")
      .textContent = "";

    renderPayment();

    document.querySelector("#checkoutSummary")
      .textContent = cart.map(item =>
        `${item.quantity} × ${item.name} (${item.size})`
      ).join(" · ") +
      ` — Total: ${money(cartTotalValue())}` +
      " | Frete: grátis (simulação)";

    checkoutDialog.showModal();
  });

// ==========================================
// ESTADOS E CIDADES
// ==========================================

function loadLocations() {
  if (!locations.length) {
    document.querySelector("#locationStatus")
      .textContent =
        "Base de municípios indisponível. Confira se " +
        "data/localidades.js está na pasta do projeto " +
        "e recarregue.";

    return;
  }

  locations
    .sort((a, b) =>
      a.nome.localeCompare(b.nome, "pt-BR")
    )
    .forEach(state => {
      stateSelect.add(
        new Option(state.nome, state.sigla)
      );
    });
}

stateSelect.addEventListener("change", () => {
  citySelect.innerHTML = `
    <option value="">
      Selecione a cidade
    </option>
  `;

  const state = locations.find(
    item => item.sigla === stateSelect.value
  );

  citySelect.disabled = !state;

  if (state) {
    state.cidades.forEach(city => {
      citySelect.add(
        new Option(city, city)
      );
    });
  }

  document.querySelector("#locationStatus")
    .textContent = state
      ? `${state.cidades.length} municípios disponíveis em ${state.nome}.`
      : "";
});

// ==========================================
// FINALIZAR PEDIDO FICTÍCIO
// ==========================================

checkoutForm.addEventListener("submit", event => {
  event.preventDefault();

  if (
    !checkoutForm.reportValidity() ||
    !cart.length
  ) {
    return;
  }

  const form = new FormData(checkoutForm);
  const method = form.get("pagamento");
  const total = cartTotalValue();

  const code =
    `DEMO-${Date.now().toString(36).toUpperCase()}`;

  orderResult.replaceChildren();

  const title = document.createElement("h3");
  title.textContent = "Pedido fictício criado!";
  orderResult.append(title);

  const info = document.createElement("p");

  info.textContent =
    `${code} · Total: ${money(total)} · ` +
    `Entrega: ${form.get("cidade")} / ` +
    `${form.get("estado")}.`;

  orderResult.append(info);

  const note = document.createElement("p");
  note.className = "simulation-note";

  note.textContent =
    "SIMULAÇÃO PARA APRESENTAÇÃO — nenhum " +
    "pagamento, envio ou pedido real foi realizado.";

  orderResult.append(note);

  if (method === "pix") {
    const qr = document.createElement("img");

    qr.src = "images/pix-demo.png";
    qr.className = "pix-qr";

    qr.alt =
      "QR Code com o texto VÉRTICE DEMONSTRAÇÃO " +
      "SEM VALOR DE PAGAMENTO";

    orderResult.append(qr);

    const text = document.createElement("p");

    text.textContent =
      "Pix fictício — QR Code apenas ilustrativo, " +
      "sem chave Pix e sem valor de pagamento.";

    orderResult.append(text);
  } else if (method === "cartao") {
    const text = document.createElement("p");

    text.textContent =
      "Cartão de teste •••• 0000 · " +
      `${form.get("parcelas")} parcela(s). ` +
      "Aprovação simulada. Nenhuma transação processada.";

    orderResult.append(text);
  } else {
    const slip = document.createElement("div");
    slip.className = "demo-boleto";

    const heading = document.createElement("h3");
    heading.textContent = "VÉRTICE / BOLETO FICTÍCIO";

    const line = document.createElement("p");

    line.textContent =
      "DEMO 00000.00000 00000.000000 " +
      "00000.000000 0 — SEM VALIDADE";

    const details = document.createElement("p");

    details.textContent =
      `Valor ilustrativo: ${money(total)} · ` +
      "Beneficiário fictício: VÉRTICE · Não pagável.";

    const bars = document.createElement("div");
    bars.className = "demo-bars";
    bars.setAttribute("aria-hidden", "true");

    slip.append(
      heading,
      line,
      details,
      bars
    );

    orderResult.append(slip);
  }

  const finish = document.createElement("button");

  finish.type = "button";
  finish.className = "button button-dark";
  finish.textContent = "VOLTAR À COLEÇÃO ↗";

  finish.addEventListener("click", () => {
    checkoutDialog.close();
  });

  orderResult.append(finish);

  checkoutForm.reset();
  paymentFields.replaceChildren();

  checkoutForm.hidden = true;
  orderResult.hidden = false;

  cart = [];

  renderCart();

  checkoutDialog.scrollTop = 0;
  finish.focus();
});

// ==========================================
// MISTURAR PRODUTOS UMA VEZ AO CARREGAR
// ==========================================

for (let i = products.length - 1; i > 0; i--) {
  const j = Math.floor(
    Math.random() * (i + 1)
  );

  [products[i], products[j]] = [
    products[j],
    products[i]
  ];
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

renderProducts();
renderCart();
renderFavorites();
loadLocations();

// ==========================================
// CORREÇÃO DAS IMAGENS DAS 22 PEÇAS
// Cole no FINAL do script.js.
// Não precisa baixar ou criar arquivos de fotos.
// ==========================================

(() => {
  const imagensCorretas = {
    // Camiseta Boxy
    1: "https://monteleste.cdn.magazord.com.br/img/2026/09/produto/8344/camiseta-boxy-oversized-ever-off-white.jpg?ims=900x1200",

    // Moletom Essential
    2: "https://monteleste.cdn.magazord.com.br/img/2023/04/produto/1311/monteleste0478.jpg?ims=900x1200",

    // Camiseta Urban
    3: "https://monteleste.cdn.magazord.com.br/img/2026/09/produto/8364/camiseta-oversized-estampada-warrior-cinza-estonada.jpg?ims=900x1200",

    // Boné
    4: "https://monteleste.cdn.magazord.com.br/img/2022/08/produto/688/acessorios-bone-dadhat-monte-leste-preto-p-1632083289345.jpg?ims=900x1200",

    // Calça Cargo
    5: "https://monteleste.cdn.magazord.com.br/img/2023/07/produto/1561/monte-leste0435-2.jpg?ims=900x1200",

    // Moletom Cloud
    6: "https://monteleste.cdn.magazord.com.br/img/2024/07/produto/2547/monte-leste0207.jpg?ims=900x1200",

    // Bolsa Crossbody
    7: "https://monteleste.cdn.magazord.com.br/img/2022/08/produto/777/acessorios-shoulder-bag-monte-leste-preta-p-1619616041764.jpg?ims=900x1200",

    // Camiseta Graphic
    8: "https://monteleste.cdn.magazord.com.br/img/2025/02/produto/3523/monte-leste-0405.jpg?ims=900x1200",

    // Camiseta Listrada
    9: "https://monteleste.cdn.magazord.com.br/img/2025/09/produto/5359/monte-leste-0018.jpg?ims=900x1200",

    // Camiseta Raglan
    10: "https://monteleste.cdn.magazord.com.br/img/2025/09/produto/6135/monte-leste-0690-1-certo.png?ims=900x1200",

    // Camiseta Ringer Bordô
    11: "https://monteleste.cdn.magazord.com.br/img/2026/09/produto/8310/camiseta-ringer-boxy-oversized-fading-brodo-jpg.jpg?ims=900x1200",

    // Baby Tee Cinza
    12: "https://monteleste.cdn.magazord.com.br/img/2026/09/produto/8431/baby-tee-kenya-cinza-estonado-jpg.jpg?ims=900x1200",

    // Calça Jeans Baggy
    13: "https://monteleste.cdn.magazord.com.br/img/2026/07/produto/8211/monte-leste-0196-1.jpg?ims=900x1200",

    // Calça Baggy Marrom
    14: "https://monteleste.cdn.magazord.com.br/img/2026/09/produto/8338/calc-a-baggy-oversized-tech-marrom.jpg?ims=900x1200",

    // Shorts Curve Verde
    15: "https://monteleste.cdn.magazord.com.br/img/2026/09/produto/8413/shorts-bermuda-d-a-gua-curve-verde-jpg.jpg?ims=900x1200",

    // Bermuda Camuflada
    16: "https://monteleste.cdn.magazord.com.br/img/2026/09/produto/8801/bermudacamufladapessoa.png?ims=900x1200",

    // Minissaia Estampada
    17: "https://monteleste.cdn.magazord.com.br/img/2026/09/produto/8422/mini-saia-castello-off-white.jpg?ims=900x1200",

    // Conjunto Moletom
    18: "https://monteleste.cdn.magazord.com.br/img/2025/07/produto/4859/ml-lookbook-inverno-63.jpg?ims=900x1200",

    // Polo Cropped Listrada
    20: "https://monteleste.cdn.magazord.com.br/img/2026/09/produto/8438/camiseta-polo-cropped-oversized-listrada-preto.jpg?ims=900x1200",

    // Microshorts Cinza
    21: "https://monteleste.cdn.magazord.com.br/img/2026/09/produto/8418/microshorts-moletom-feminino-less-cinza-estonado.jpg?ims=900x1200",

    // Minissaia Camuflada
    23: "https://monteleste.cdn.magazord.com.br/img/2026/09/produto/8423/mini-saia-camuflada-areia.jpg?ims=900x1200",

    // Baby Tee Rosa
    24: "https://monteleste.cdn.magazord.com.br/img/2026/09/produto/8432/baby-tee-kenya-rosa-estonado.jpg?ims=900x1200"
  };

  // Corrige as fotos no catálogo.
  products.forEach(produto => {
    if (imagensCorretas[produto.id]) {
      produto.image = imagensCorretas[produto.id];
    }
  });

  // Corrige também itens que já estejam na sacola.
  cart.forEach(item => {
    if (imagensCorretas[item.id]) {
      item.image = imagensCorretas[item.id];
    }
  });

  // Atualiza a tela mantendo as funções existentes.
  renderProducts();
  renderCart();
  renderFavorites();
})();

// ==========================================
// ESTADOS E CIDADES NO PRÓPRIO SCRIPT.JS
// Cole este bloco no FINAL do arquivo.
// ==========================================

(() => {
  const campoEstado = document.querySelector("#stateSelect");
  const campoCidade = document.querySelector("#citySelect");
  const mensagem = document.querySelector("#locationStatus");

  if (!campoEstado || !campoCidade) return;

  // Estados brasileiros dentro do próprio JavaScript.
  const estadosBrasil = [
    { id: 12, sigla: "AC", nome: "Acre" },
    { id: 27, sigla: "AL", nome: "Alagoas" },
    { id: 16, sigla: "AP", nome: "Amapá" },
    { id: 13, sigla: "AM", nome: "Amazonas" },
    { id: 29, sigla: "BA", nome: "Bahia" },
    { id: 23, sigla: "CE", nome: "Ceará" },
    { id: 53, sigla: "DF", nome: "Distrito Federal" },
    { id: 32, sigla: "ES", nome: "Espírito Santo" },
    { id: 52, sigla: "GO", nome: "Goiás" },
    { id: 21, sigla: "MA", nome: "Maranhão" },
    { id: 51, sigla: "MT", nome: "Mato Grosso" },
    { id: 50, sigla: "MS", nome: "Mato Grosso do Sul" },
    { id: 31, sigla: "MG", nome: "Minas Gerais" },
    { id: 15, sigla: "PA", nome: "Pará" },
    { id: 25, sigla: "PB", nome: "Paraíba" },
    { id: 41, sigla: "PR", nome: "Paraná" },
    { id: 26, sigla: "PE", nome: "Pernambuco" },
    { id: 22, sigla: "PI", nome: "Piauí" },
    { id: 33, sigla: "RJ", nome: "Rio de Janeiro" },
    { id: 24, sigla: "RN", nome: "Rio Grande do Norte" },
    { id: 43, sigla: "RS", nome: "Rio Grande do Sul" },
    { id: 11, sigla: "RO", nome: "Rondônia" },
    { id: 14, sigla: "RR", nome: "Roraima" },
    { id: 42, sigla: "SC", nome: "Santa Catarina" },
    { id: 35, sigla: "SP", nome: "São Paulo" },
    { id: 28, sigla: "SE", nome: "Sergipe" },
    { id: 17, sigla: "TO", nome: "Tocantins" }
  ];

  // Duas fontes para a mesma base de municípios.
  const fontesMunicipios = [
    "https://cdn.jsdelivr.net/gh/kelvins/municipios-brasileiros@main/json/municipios.json",
    "https://raw.githubusercontent.com/kelvins/municipios-brasileiros/main/json/municipios.json"
  ];

  let baseMunicipios = null;
  let carregamentoEmAndamento = null;
  let numeroSelecao = 0;

  function mostrarMensagem(texto) {
    if (mensagem) {
      mensagem.textContent = texto;
    }
  }

  function prepararCidade(texto) {
    campoCidade.replaceChildren(
      new Option(texto, "")
    );

    campoCidade.disabled = true;
  }

  // Preenche os estados sem depender de outro arquivo.
  const estadoAnterior = campoEstado.value;

  campoEstado.replaceChildren(
    new Option("Selecione o estado", "")
  );

  estadosBrasil.forEach(estado => {
    campoEstado.add(
      new Option(
        `${estado.nome} — ${estado.sigla}`,
        estado.sigla
      )
    );
  });

  campoEstado.disabled = false;
  campoEstado.required = true;
  campoCidade.required = true;

  if (
    estadosBrasil.some(
      estado => estado.sigla === estadoAnterior
    )
  ) {
    campoEstado.value = estadoAnterior;
  }

  prepararCidade("Selecione primeiro o estado");
  mostrarMensagem("");

  // Busca a base uma única vez durante a visita.
  async function obterMunicipios() {
    if (baseMunicipios) {
      return baseMunicipios;
    }

    if (carregamentoEmAndamento) {
      return carregamentoEmAndamento;
    }

    carregamentoEmAndamento = (async () => {
      for (const endereco of fontesMunicipios) {
        const controlador = new AbortController();

        const limite = setTimeout(() => {
          controlador.abort();
        }, 12000);

        try {
          const resposta = await fetch(endereco, {
            signal: controlador.signal
          });

          if (!resposta.ok) {
            throw new Error("Falha ao buscar municípios.");
          }

          const dados = await resposta.json();

          if (
            !Array.isArray(dados) ||
            !dados.length ||
            !dados.every(item =>
              typeof item.nome === "string" &&
              Number.isFinite(Number(item.codigo_uf))
            )
          ) {
            throw new Error("Base de municípios inválida.");
          }

          baseMunicipios = dados;

          return baseMunicipios;
        } catch (erro) {
          // Se uma fonte falhar, tenta a próxima.
        } finally {
          clearTimeout(limite);
        }
      }

      throw new Error("Não foi possível carregar as cidades.");
    })();

    try {
      return await carregamentoEmAndamento;
    } finally {
      carregamentoEmAndamento = null;
    }
  }

  async function atualizarCidades() {
    const selecaoAtual = ++numeroSelecao;

    const estado = estadosBrasil.find(
      item => item.sigla === campoEstado.value
    );

    if (!estado) {
      prepararCidade("Selecione primeiro o estado");
      mostrarMensagem("");
      return;
    }

    prepararCidade("Carregando cidades...");
    mostrarMensagem(`Carregando cidades de ${estado.nome}...`);

    try {
      const municipios = await obterMunicipios();

      // Evita mostrar cidades de uma seleção anterior.
      if (
        selecaoAtual !== numeroSelecao ||
        campoEstado.value !== estado.sigla
      ) {
        return;
      }

      const cidades = [
        ...new Set(
          municipios
            .filter(item =>
              Number(item.codigo_uf) === estado.id
            )
            .map(item => item.nome)
        )
      ].sort((a, b) =>
        a.localeCompare(b, "pt-BR")
      );

      if (!cidades.length) {
        throw new Error("Nenhuma cidade encontrada.");
      }

      campoCidade.replaceChildren(
        new Option("Selecione a cidade", "")
      );

      const opcoes = document.createDocumentFragment();

      cidades.forEach(cidade => {
        opcoes.appendChild(
          new Option(cidade, cidade)
        );
      });

      campoCidade.appendChild(opcoes);
      campoCidade.disabled = false;

      mostrarMensagem(
        `${cidades.length} municípios disponíveis em ${estado.nome}.`
      );
    } catch (erro) {
      if (
        selecaoAtual !== numeroSelecao ||
        campoEstado.value !== estado.sigla
      ) {
        return;
      }

      prepararCidade("Não foi possível carregar");

      mostrarMensagem(
        "Confira sua internet. Depois selecione " +
        "outro estado e volte ao estado desejado para tentar novamente."
      );
    }
  }

  // Substitui o comportamento antigo desse seletor.
  // Mantém os mesmos campos usados pelo checkout.
  campoEstado.addEventListener(
    "change",
    evento => {
      evento.stopImmediatePropagation();
      atualizarCidades();
    },
    true
  );

  // Limpa as cidades quando o checkout for reiniciado.
  const formulario = campoEstado.closest("form");

  if (formulario) {
    formulario.addEventListener("reset", () => {
      numeroSelecao++;

      prepararCidade("Selecione primeiro o estado");
      mostrarMensagem("");
    });
  }

  if (campoEstado.value) {
    atualizarCidades();
  }
})();

// ==========================================
// VÉRTICE — PAGAMENTOS DEMONSTRATIVOS
// Cole este bloco completo no FINAL do script.js.
// ==========================================

(() => {
  const form = document.querySelector("#checkoutForm");
  const campos = document.querySelector("#paymentFields");
  const resultado = document.querySelector("#orderResult");
  const janela = document.querySelector("#checkoutDialog");

  if (!form || !campos || !resultado || !janela) {
    return;
  }

  // ========================================
  // ESTILOS
  // ========================================

  const estilo = document.createElement("style");

  estilo.textContent = `
    .pagamento-vertice {
      margin: 20px 0;
      padding: 20px;
      border: 1px solid #dddddd;
      border-radius: 12px;
      background: #ffffff;
      color: #171717;
      text-align: center;
    }

    .pagamento-vertice img {
      display: block;
      width: 100%;
      max-width: 440px;
      height: auto;
      margin: 0 auto;
    }

    .pagamento-vertice h3 {
      margin: 0 0 15px;
      font-size: 18px;
    }

    .pagamento-vertice p {
      margin: 15px 0 0;
      font-size: 12px;
      line-height: 1.7;
    }

    .aviso-pagamento-vertice {
      margin: 16px 0;
      padding: 14px;
      background: #f1f1ed;
      border-left: 4px solid #171717;
      font-size: 12px;
      line-height: 1.7;
    }
  `;

  document.head.appendChild(estilo);

  // ========================================
  // TRANSFORMA SVG EM IMAGEM
  // ========================================

  function converterSVG(svg, descricao) {
    const imagem = document.createElement("img");

    imagem.src =
      "data:image/svg+xml;charset=utf-8," +
      encodeURIComponent(svg);

    imagem.alt = descricao;

    return imagem;
  }

  // ========================================
  // PIX — QR CODE COM MENSAGEM DE TEXTO
  //
  // Mensagem codificada:
  //
  // VÉRTICE — PIX FICTÍCIO
  //
  // Este QR Code faz parte de um projeto
  // escolar demonstrativo.
  // Nenhum pagamento será realizado.
  // Não contém chave Pix nem dados bancários.
  //
  // Obrigado por conhecer a VÉRTICE!
  // ========================================

  function criarPix() {
    const tamanho = 65;

    const linhas = [
      "0",
      "0",
      "0",
      "0",
      "1fdd3b55f9efe7f0",
      "104154e31d8b2410",
      "1745fb1e0f24e5d0",
      "17544e77b0f2a5d0",
      "1752437fe26fa5d0",
      "105effdc45734410",
      "1fd55555555557f0",
      "13f684468de000",
      "11776bcfc3ed0f90",
      "1027c911cb4ff680",
      "2f014cfcf75a660",
      "15b02c4bf0017ea0",
      "c671b331f2d0230",
      "aa64b9dd06f9e90",
      "1556da48de5c8560",
      "1586b6a2913dd820",
      "dd404969fed0e20",
      "cad0d7e3a6db620",
      "d7c3c72c9602320",
      "1219adfabf29e110",
      "bd0c7ccd5e78a30",
      "18a2247f4b4d95e0",
      "17d6825c0ab70fe0",
      "1d9f3b2a0fa2ce70",
      "134238a2f3ed2a70",
      "1a37bc3b5a2fb420",
      "11f6554fca1c9fe0",
      "151af4645aedd190",
      "558c9cd5b057510",
      "1516f9f46af671a0",
      "1ff31fa7fe4fffe0",
      "61b1d00d8aa5590",
      "7428d96d7698150",
      "1a35736af35f35b0",
      "19c98c393feca0f0",
      "799f05bd3bdd700",
      "9c8235273e50db0",
      "41a6314e9548ec0",
      "64dd875085eaa60",
      "182d3e73f7a94c10",
      "e527dc558814930",
      "d14810ada1d8660",
      "1ed9b11e2a3eab60",
      "13a2fd635d25f3c0",
      "16f4f349b723c670",
      "160fc23e1b9fbe40",
      "14f6bfbf6806a9a0",
      "1f092c2d9e29d620",
      "5b6687dfe51fa0",
      "1fccf45b4c5120",
      "1fdb73154d5f75e0",
      "1044cd1c5a21f100",
      "175a7bb7d4af1f70",
      "17451b1d5a3d89f0",
      "1748a18d8e060180",
      "104ce6653f39e940",
      "1fdb171fdb659050",
      "0",
      "0",
      "0",
      "0"
    ];

    let desenho = "";

    linhas.forEach((linha, y) => {
      const pixels = BigInt("0x" + linha)
        .toString(2)
        .padStart(tamanho, "0");

      for (let x = 0; x < tamanho; x++) {
        if (pixels[x] === "1") {
          desenho += `M${x} ${y}h1v1h-1z`;
        }
      }
    });

    const svg = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 ${tamanho} ${tamanho}"
        width="390"
        height="390"
        shape-rendering="crispEdges"
      >
        <rect
          width="${tamanho}"
          height="${tamanho}"
          fill="white"
        />

        <path
          d="${desenho}"
          fill="black"
        />
      </svg>
    `;

    const imagem = converterSVG(
      svg,
      "QR Code de texto: VÉRTICE, projeto escolar sem pagamento real."
    );

    imagem.style.maxWidth = "390px";

    return imagem;
  }

  // ========================================
  // CARTÃO FICTÍCIO
  // ========================================

  function criarCartao() {
    const svg = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 440 290"
        width="440"
        height="290"
      >
        <rect
          x="10"
          y="10"
          width="420"
          height="250"
          rx="22"
          fill="#151515"
        />

        <path
          d="M310 10H430V150Z"
          fill="#292929"
        />

        <text
          x="38"
          y="68"
          font-family="Arial, sans-serif"
          font-size="32"
          font-weight="900"
          fill="white"
        >
          VÉRTICE
        </text>

        <text
          x="40"
          y="91"
          font-family="Arial, sans-serif"
          font-size="12"
          letter-spacing="5"
          fill="#d9ff50"
        >
          DEMO
        </text>

        <rect
          x="40"
          y="112"
          width="48"
          height="35"
          rx="6"
          fill="#d9cc8e"
        />

        <path
          d="M40 124H88M40 136H88M56 112V147M72 112V147"
          stroke="#958652"
          stroke-width="1"
          fill="none"
        />

        <text
          x="38"
          y="190"
          font-family="monospace"
          font-size="25"
          fill="white"
        >
          0000 0000 0000 0000
        </text>

        <text
          x="40"
          y="218"
          font-family="Arial, sans-serif"
          font-size="9"
          fill="#aaaaaa"
        >
          TITULAR FICTÍCIO
        </text>

        <text
          x="40"
          y="239"
          font-family="Arial, sans-serif"
          font-size="14"
          fill="white"
        >
          CLIENTE EXEMPLO
        </text>

        <text
          x="330"
          y="218"
          font-family="Arial, sans-serif"
          font-size="9"
          fill="#aaaaaa"
        >
          VALIDADE
        </text>

        <text
          x="330"
          y="239"
          font-family="Arial, sans-serif"
          font-size="15"
          fill="white"
        >
          12/30
        </text>

        <text
          x="220"
          y="284"
          text-anchor="middle"
          font-family="Arial, sans-serif"
          font-size="12"
          font-weight="700"
          fill="#555555"
        >
          CARTÃO DE TESTE — SEM COBRANÇA REAL
        </text>
      </svg>
    `;

    return converterSVG(
      svg,
      "Cartão fictício da VÉRTICE, sem cobrança real."
    );
  }

  // ========================================
  // BOLETO FICTÍCIO
  // ========================================

  function criarBoleto(valor) {
    let barras = "";

    for (let i = 0; i < 80; i++) {
      const x = 30 + i * 4.7;

      // O desenho é interrompido pela palavra DEMO.
      if (x > 162 && x < 275) continue;

      const largura = i % 3 === 0 ? 3 : 1.5;

      barras += `
        <rect
          x="${x}"
          y="218"
          width="${largura}"
          height="55"
          fill="#111111"
        />
      `;
    }

    const svg = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 440 350"
        width="440"
        height="350"
      >
        <rect
          x="1"
          y="1"
          width="438"
          height="348"
          rx="14"
          fill="white"
          stroke="#dddddd"
        />

        <rect
          x="1"
          y="1"
          width="438"
          height="60"
          rx="14"
          fill="#151515"
        />

        <text
          x="220"
          y="39"
          text-anchor="middle"
          font-family="Arial, sans-serif"
          font-size="23"
          font-weight="700"
          fill="white"
        >
          VÉRTICE / BOLETO FICTÍCIO
        </text>

        <text
          x="25"
          y="91"
          font-family="Arial, sans-serif"
          font-size="11"
          fill="#666666"
        >
          BENEFICIÁRIO FICTÍCIO
        </text>

        <text
          x="25"
          y="116"
          font-family="Arial, sans-serif"
          font-size="20"
          font-weight="700"
          fill="#151515"
        >
          VÉRTICE DEMO
        </text>

        <line
          x1="25"
          y1="132"
          x2="415"
          y2="132"
          stroke="#dddddd"
        />

        <text
          x="25"
          y="158"
          font-family="Arial, sans-serif"
          font-size="11"
          fill="#666666"
        >
          VALOR ILUSTRATIVO
        </text>

        <text
          x="25"
          y="190"
          font-family="Arial, sans-serif"
          font-size="28"
          font-weight="700"
          fill="#151515"
        >
          ${money(valor)}
        </text>

        ${barras}

        <text
          x="220"
          y="254"
          text-anchor="middle"
          font-family="Arial, sans-serif"
          font-size="30"
          font-weight="900"
          fill="#151515"
        >
          DEMO
        </text>

        <text
          x="220"
          y="307"
          text-anchor="middle"
          font-family="Arial, sans-serif"
          font-size="20"
          font-weight="700"
          fill="#151515"
        >
          SEM VALIDADE BANCÁRIA
        </text>

        <text
          x="220"
          y="332"
          text-anchor="middle"
          font-family="Arial, sans-serif"
          font-size="11"
          fill="#666666"
        >
          Projeto escolar. Não realizar pagamento.
        </text>
      </svg>
    `;

    return converterSVG(
      svg,
      "Boleto fictício da VÉRTICE, sem validade bancária."
    );
  }

  // ========================================
  // MONTA A APRESENTAÇÃO DO PAGAMENTO
  // ========================================

  function montarPagamento(metodo, valor) {
    const caixa = document.createElement("div");
    caixa.className = "pagamento-vertice";

    const titulo = document.createElement("h3");
    const descricao = document.createElement("p");

    let imagem;

    if (metodo === "cartao") {
      titulo.textContent = "CARTÃO DE TESTE";
      imagem = criarCartao();

      descricao.textContent =
        "Use somente os dados fictícios indicados. " +
        "Nenhuma cobrança será realizada.";
    } else if (metodo === "boleto") {
      titulo.textContent = "BOLETO FICTÍCIO";
      imagem = criarBoleto(valor);

      descricao.textContent =
        "Boleto ilustrativo, sem validade bancária " +
        "e sem linha digitável para pagamento.";
    } else {
      titulo.textContent = "PIX FICTÍCIO";
      imagem = criarPix();

      descricao.textContent =
        "Escaneie para ler a mensagem de demonstração. " +
        "Este QR Code contém apenas texto, " +
        "não contém chave Pix e não realiza pagamentos.";
    }

    caixa.append(
      titulo,
      imagem,
      descricao
    );

    return caixa;
  }

  // ========================================
  // MOSTRA A IMAGEM AO ESCOLHER O MÉTODO
  // ========================================

  function mostrarPrevia() {
    campos.querySelectorAll(".pagamento-vertice")
      .forEach(elemento => elemento.remove());

    const metodo = form.elements.pagamento.value;

    campos.appendChild(
      montarPagamento(
        metodo,
        cartTotalValue()
      )
    );
  }

  // Preserva os campos de cartão do código principal.
  const renderPagamentoAnterior = renderPayment;

  renderPayment = function () {
    renderPagamentoAnterior();
    mostrarPrevia();
  };

  // Os eventos anteriores continuam mostrando os campos.
  // Este acrescenta a imagem correspondente.
  form.elements.pagamento.forEach(opcao => {
    opcao.addEventListener(
      "change",
      mostrarPrevia
    );
  });

  // ========================================
  // FINALIZAÇÃO DEMONSTRATIVA
  // ========================================

  form.addEventListener(
    "submit",
    evento => {
      evento.preventDefault();
      evento.stopImmediatePropagation();

      if (
        !form.reportValidity() ||
        !cart.length
      ) {
        return;
      }

      const dados = new FormData(form);
      const metodo = dados.get("pagamento");
      const total = cartTotalValue();

      const codigo =
        "DEMO-" +
        Date.now().toString(36).toUpperCase();

      resultado.replaceChildren();

      const titulo = document.createElement("h3");
      titulo.textContent = "Pedido fictício criado!";

      const resumo = document.createElement("p");

      resumo.textContent =
        `${codigo} · Total: ${money(total)}`;

      const entrega = document.createElement("p");

      entrega.textContent =
        `Entrega demonstrativa: ${dados.get("cidade")} / ` +
        `${dados.get("estado")}.`;

      const aviso = document.createElement("p");
      aviso.className = "aviso-pagamento-vertice";

      aviso.textContent =
        "SIMULAÇÃO ESCOLAR — nenhum pagamento, " +
        "envio ou pedido real foi realizado.";

      resultado.append(
        titulo,
        resumo,
        entrega,
        aviso,
        montarPagamento(metodo, total)
      );

      if (metodo === "cartao") {
        const parcelas = document.createElement("p");

        parcelas.textContent =
          "Cartão de teste •••• 0000 · " +
          `${dados.get("parcelas") || "1"} parcela(s). ` +
          "Aprovação simulada, sem transação real.";

        resultado.appendChild(parcelas);
      }

      const voltar = document.createElement("button");

      voltar.type = "button";
      voltar.className = "button button-dark";
      voltar.textContent = "VOLTAR À COLEÇÃO ↗";

      voltar.addEventListener("click", () => {
        janela.close();
      });

      resultado.appendChild(voltar);

      form.reset();
      campos.replaceChildren();

      form.hidden = true;
      resultado.hidden = false;

      cart = [];
      renderCart();

      janela.scrollTop = 0;
      voltar.focus();
    },
    true
  );

  // Também prepara a imagem caso o checkout esteja aberto.
  if (janela.open) {
    renderPayment();
  }
})();

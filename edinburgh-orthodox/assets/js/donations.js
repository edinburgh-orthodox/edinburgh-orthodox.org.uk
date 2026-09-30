function initializeDonationDetails() {
    const toggle = document.querySelector("#bank-toggle");
    const details = document.querySelector("#bank-details");

    if (!(toggle instanceof HTMLButtonElement) || !(details instanceof HTMLElement)) {
        return;
    }

    toggle.addEventListener("click", () => {
        const shouldShow = details.hidden;

        details.hidden = !shouldShow;
        toggle.textContent = shouldShow
            ? "Hide bank details"
            : "Show bank details";
    });
}

function formatCurrency(value) {
    return `£${value.toFixed(2)}`;
}

function createCartRow(title, quantity, total) {
    const row = document.createElement("div");
    const titleElement = document.createElement("span");
    const quantityElement = document.createElement("span");
    const priceElement = document.createElement("span");

    row.className = "row";
    titleElement.className = "rt";
    quantityElement.className = "rq";
    priceElement.className = "rp";
    titleElement.textContent = title;
    quantityElement.textContent = `× ${quantity}`;
    priceElement.textContent = formatCurrency(total);
    row.append(titleElement, quantityElement, priceElement);

    return row;
}

function initializeBookshopCart() {
    const titleInput = document.querySelector("#bk-title");
    const priceInput = document.querySelector("#bk-price");
    const quantityInput = document.querySelector("#bk-qty");
    const addButton = document.querySelector("#bk-add");
    const rows = document.querySelector("#bk-rows");
    const totalElement = document.querySelector("#bk-total");

    if (
        !(titleInput instanceof HTMLInputElement) ||
        !(priceInput instanceof HTMLInputElement) ||
        !(quantityInput instanceof HTMLInputElement) ||
        !(addButton instanceof HTMLButtonElement) ||
        !(rows instanceof HTMLElement) ||
        !(totalElement instanceof HTMLElement)
    ) {
        return;
    }

    let cartTotal = 0;

    addButton.addEventListener("click", () => {
        const title = titleInput.value.trim();
        const price = Number.parseFloat(priceInput.value);
        const quantity = Math.max(Number.parseInt(quantityInput.value, 10) || 1, 1);

        if (!title || !Number.isFinite(price) || price < 0) {
            return;
        }

        const lineTotal = price * quantity;

        rows.append(createCartRow(title, quantity, lineTotal));
        cartTotal += lineTotal;
        totalElement.textContent = formatCurrency(cartTotal);

        titleInput.value = "";
        priceInput.value = "";
        quantityInput.value = "1";
        titleInput.focus();
    });
}

function initializeWishlist() {
    const items = document.querySelectorAll('.item input[type="checkbox"]');
    const totalElement = document.querySelector("#wishlist-total");

    if (!(totalElement instanceof HTMLElement)) {
        return;
    }

    const updateTotal = () => {
        let total = 0;

        items.forEach((item) => {
            if (!(item instanceof HTMLInputElement) || !item.checked) {
                return;
            }

            const priceElement = item.closest(".item")?.querySelector(".price");
            const price = priceElement?.textContent?.replace(/[^0-9.]/g, "") ?? "";
            total += Number.parseFloat(price) || 0;
        });

        totalElement.textContent = `£${total.toFixed(2)}`;
    };

    items.forEach((item) => item.addEventListener("change", updateTotal));
    updateTotal();
}

initializeDonationDetails();
initializeBookshopCart();
initializeWishlist();

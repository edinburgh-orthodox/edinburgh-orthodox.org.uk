// Opens the FAQ item referenced by a URL hash (for example the cross-reference
// from "What should I expect at my first Divine Liturgy?" to the answer about
// Holy Communion). Native <details> toggling needs no JavaScript.
function openTargetedQuestion() {
    const id = window.location.hash.slice(1);

    if (!id) {
        return;
    }

    const target = document.getElementById(id);

    if (target instanceof HTMLDetailsElement) {
        target.open = true;
        target.scrollIntoView({ block: "start" });
    }
}

openTargetedQuestion();
window.addEventListener("hashchange", openTargetedQuestion);

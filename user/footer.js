class FooterComponent extends HTMLElement {
    connectedCallback() {
        fetch("footer.html") // Hardcode ke folder /user/
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            });
    }
}
customElements.define("my-footer", FooterComponent);

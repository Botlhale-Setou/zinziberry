const menuBtn = document.querySelector('#menuBtn');
const closeBtn = document.querySelector('#closeBtn');
const navLinks = document.querySelector('#nav-links');

const navOpen = () => {
	navLinks.style = `
		position: absolute;
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
		background-color: var(--borderColor);
		justify-content: center;
		gap: 30px;
		overflow: hidden;
	`;
}

const navClose = () => {
	navLinks.style = `
		display: none;
	`;
}

menuBtn.addEventListener('click', navOpen);
closeBtn.addEventListener('click', navClose);
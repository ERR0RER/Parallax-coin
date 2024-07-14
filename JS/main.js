const CIRCLE = document.getElementById('token-id');

CIRCLE.addEventListener('mousemove', (event) => {

	const RECT = CIRCLE.getBoundingClientRect();
	const CenterX = RECT.width / 2;
	const CenterY = RECT.height / 2;
	const MouseX = event.clientX - RECT.left
	const MouseY = event.clientY - RECT.top
	const OffsetX = ((MouseX - CenterX) / 5);
	const OffsetY = ((MouseY - CenterY) / 5) * -1;
	document.documentElement.style.setProperty('--OffsetX', `${OffsetX}deg`);
	document.documentElement.style.setProperty('--OffsetY', `${OffsetY}deg`);
	});

	CIRCLE.addEventListener('mouseleave', () => {
    document.documentElement.style.setProperty('--OffsetX', '0deg');
    document.documentElement.style.setProperty('--OffsetY', '0deg');
});
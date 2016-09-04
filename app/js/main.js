// POPUP
var link = document.querySelector('.user__link'),
	popup = document.querySelector('.popup'),
	close = document.querySelector('.popup__close'),
	form = popup.querySelector('form'),
	login = popup.querySelector('[name=login]'),
	password = popup.querySelector('[name=password]'),
	storage = localStorage.getItem('login');

link.addEventListener('click', function (e) {
	e.preventDefault();
	popup.classList.add('popup--show');

	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	};

});

close.addEventListener('click', function (e) {
	e.preventDefault();
	popup.classList.remove('popup--show');
	popup.classList.remove('popup--error');
});

form.addEventListener('submit', function (e) {
	if (!login.value || !password.value) {
		e.preventDefault();
		popup.classList.add('popup--error')
	} else {
		localStorage.setItem('login', login.value);
	}
});

window.addEventListener('keydown', function(e){
	if (e.keyCode === 27) {
		if (popup.classList.contains('popup--show')) {
			popup.classList.remove('popup--show');
			popup.classList.remove('popup--error');
		};
	};
});


// MAP
var mapOpen = document.querySelector('.open-map'),
	mapPopup = document.querySelector('.map'),
	mapClose = document.querySelector('.map__close');
	// form = popup.querySelector('form'),
	// login = popup.querySelector('[name=login]'),
	// password = popup.querySelector('[name=password]'),
	// storage = localStorage.getItem('login');

mapOpen.addEventListener('click', function (e) {
	e.preventDefault();
	mapPopup.classList.add('map--show');

	// if (storage) {
	// 	login.value = storage;
	// 	password.focus();
	// } else {
	// 	login.focus();
	// };

});

mapClose.addEventListener('click', function (e) {
	e.preventDefault();
	mapPopup.classList.remove('map--show');
	// popup.classList.remove('popup--error');
});

// form.addEventListener('submit', function (e) {
// 	if (!login.value || !password.value) {
// 		e.preventDefault();
// 		popup.classList.add('popup--error')
// 	} else {
// 		localStorage.setItem('login', login.value);
// 	}
// });

window.addEventListener('keydown', function(e){
	if (e.keyCode === 27) {
		if (mapPopup.classList.contains('map--show')) {
			mapPopup.classList.remove('map--show');
			// popup.classList.remove('popup--error');
		};
	};
});








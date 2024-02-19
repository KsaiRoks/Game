var roomId = 'start';

var student = {
	life: 100,
	money: 0
}

var rooms = {
	start: {
		title: "Комната",
		description: "Общажная комната",
		image: "image/1.jpg",
		actions: [{
			title: "Окно",
			id: 'window',
			cost: 100
		}, {
			title: "Коридор",
			id: 'hall',
			cost: 5
		}]
	},

	window: {
		title: "Окно",
		description: "Выход на улицу",
		image: "image/2.jpg",
	},

	hall: {
		title: "Коридор",
		description: "Общажный коридор",
		image: "image/3.jpg",
		actions: [{
			title: "Комната",
			id: 'start',
			cost: 5
		}, {
			title: "Туалет",
			id: 'toilet',
			cost: 5
		}, {
			title: "Кухня",
			id: 'kitchen',
			cost: 5
		}, {
			title: "Вахтёр",
			id: 'watchman',
			cost: 5
		}]
	},

	toilet: {
		title: "Туалет",
		description: "Общажный туалет",
		image: "image/4.jpg",
		canFoundMoney: true,
		actions: [{
			title: "Коридор",
			id: 'hall',
			cost: 5
		}]
	},

	kitchen: {
		title: "Кухня",
		description: "Общажная кухя",
		image: "image/5.jpg",
		actions: [{
			title: "Коридор",
			id: 'hall',
			cost: 5
		}]
	},

	watchman: {
		title: "Вахтёр",
		description: "Общажный вахтёр",
		image: "image/6.jpg",
		actions: [{
			title: "Коридор",
			id: 'hall',
			cost: 5
		}, {
			title: "Улица",
			id: 'street',
			cost: 5
		}]
	},

	street: {
		title: "Улица",
		description: "Улица обыкновенная",
		image: "image/7.jpg",
		actions: [{
			title: "Вахтёр",
			id: 'watchman',
			cost: 5
		}, {
			title: "Университет",
			id: 'university',
			cost: 5
		}, {
			title: "Алко-маркет",
			id: 'alcoholStore',
			cost: 5
		}, {
			title: "Аптека",
			id: 'pharmacy',
			cost: 5
		}]
	},

	university: {
		title: "Университет",
		description: "Родной универ",
		image: "image/8.jpg",
		actions: [{
			title: "Улица",
			id: 'street',
			cost: 5
		}]
	},

	alcoholStore: {
		title: "Алко-маркет",
		description: "Красное-белое",
		image: "image/9.jpg",
		actions: [{
			title: "Улица",
			id: 'street',
			cost: 5
		}]
	},

	pharmacy: {
		title: "Аптека",
		description: "Лекарства",
		image: "image/10.jpg",
		actions: [{
			title: "Улица",
			id: 'street',
			cost: 5
		}]
	}
}
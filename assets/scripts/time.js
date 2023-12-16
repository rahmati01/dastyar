const url = "https://api.dastyar.io/express/clock/current";
const urlShamsiHijri = "https://kaaryar0506reactblog.liara.run/current/time";
let timeNow = document.querySelector(".time-now");
let utcDate = document.querySelector(".AD-date");
let DayinMonth = document.querySelector(".day-now");
let shamsiMonth = document.querySelector(".mounth-now");
let islamicHijri = document.querySelector(".arabic-date");

const fetchDate = async () => {
	const response = await fetch(url);
	const data = await response.json();
	let millisecond = data.current;
	const date = new Date(millisecond);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const years = date.getFullYear();
	const months = date.getMonth();
	const days = date.getDay();

	//utc month to string
	let thisMonth;
	switch (months) {
		case 0:
			thisMonth = "Jun";
			break;
		case 1:
			thisMonth = "Feb";
			break;
		case 2:
			thisMonth = "Mar";
			break;
		case 3:
			thisMonth = "Apr";
			break;
		case 4:
			thisMonth = "May";
			break;
		case 5:
			thisMonth = "Jun";
			break;
		case 6:
			thisMonth = "Jul";
			break;
		case 7:
			thisMonth = "Aug";
			break;
		case 8:
			thisMonth = "Sep";
			break;
		case 9:
			thisMonth = "Oct";
			break;
		case 10:
			thisMonth = "Nov";
			break;
		case 11:
			thisMonth = "Dec";
			break;
	}

	timeNow.innerHTML += ` <h2>${minutes} : ${hours}</h2>`;
	utcDate.innerHTML += ` <h6>${years} / ${thisMonth} / ${days}</h6>`;
};

const fetchDateShamsiHijri = async () => {
	const response = await fetch(urlShamsiHijri);
	const data = await response.json();
	console.log(data);

	DayinMonth.innerHTML = ` <p>${data.shamsi.dayInMonth}</p>`;
	shamsiMonth.innerHTML = ` <p class="mounth-now">${data.shamsi.month}</p`;
	islamicHijri.innerHTML = ` <h6 class="arabic-date"> ${data.islamicHijri.year}/ ${data.islamicHijri.month} / ${data.islamicHijri.dayInMonth} </h6>`;
};
fetchDate();
fetchDateShamsiHijri();

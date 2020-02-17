import format from 'date-fns/format';

var span = document.querySelector('#time-now');
var header = document.querySelector('#hello');

export default function update() {
	header.textContent = "Hello World!";
	span.textContent = format(new Date(), 'h:mm:ssa');
	setTimeout(update, 1000);
}

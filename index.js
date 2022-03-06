const root = document.getElementById('root');
// root.innerHTML = `<ul>${getItems()}</ul>`
// function range(from, length) {
//     const result = [];
//     for(let i = 0; i < length; i++) {
//         result.push(i + from);
//     }
//     return result;
// }
// function getItems() {
//     return range(1, 200).map(i => `<li> <img src="priroda-derevya-trava-nebo-leto.jpg"> item ${i}</li>`).join('');
// }
function displayPage(page) {
    console.log(page);
}
const paginator = new Paginator(8, 'root', displayPage);


let tabl = document.querySelector('.main');
let details = [
   {
    id: 1,
    name: 'Iphone 14 Pro',
    price: '29.999',
    image: 'https://i.postimg.cc/VNtV9Lwg/Screenshot-2023-05-31-145621.png'
   },
   {
    id: 2,
    name: 'MacBook',
    price: '24.999',
    image: 'https://i.postimg.cc/xdjP8fCq/Screenshot-2023-05-31-145758.png'
   },
   {
    id: 3,
    name: 'Airpods Pro ',
    price: '4.899',
    image: 'https://i.postimg.cc/rwDVkWGp/Screenshot-2023-05-31-145932.png'
   },
]
details.forEach((data) => {
    tabl.innerHTML += `
    <tr>
    <th>${data.name}</th>
    <th>${data.price}</th>
    <th><img src="${data.image}" style="height:100px"/></th>
    <th><button>Add</button></th>
    <th><button>Delete</button></th>
    </tr>`
})
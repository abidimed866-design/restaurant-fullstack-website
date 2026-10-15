const data = {

    drinks: [
        {name: "Mojito", price: "$14", img: "https://i.pinimg.com/1200x/dc/7e/62/dc7e62f82833f36b6c4f812413412da9.jpg"},
        {name: "Wine", price: "$12", img: "https://i.pinimg.com/736x/ed/ac/c7/edacc7523d3ed01851637a444b25bafe.jpg"},
        {name: "Beer", price: "$8", img: "https://i.pinimg.com/736x/5a/22/ca/5a22ca7a69b0ccadee603457a10d1708.jpg"},
        {name: "jus", price: "$8", img: "https://i.pinimg.com/1200x/6c/2d/fd/6c2dfd2dfdaaa8897780e7651c8585ed.jpg"},
         {name: "Jus naturels", price: "$10", img: "https://i.pinimg.com/736x/ee/a6/f7/eea6f79fe565f6eec6ba355d794c3d97.jpg"},
          {name: "Smoothies", price: "$7", img: "https://i.pinimg.com/1200x/4e/c4/8e/4ec48e33267c97cfdb5c0a631bb00831.jpg"},
        
    ],

    desserts: [
        {name: "Tiramisu", price: "$10", img: "https://i.pinimg.com/736x/0e/c2/89/0ec289492947872976c5c52215280faa.jpg"},
        {name: "Cake", price: "$9", img: "https://i.pinimg.com/736x/9d/25/93/9d2593780fe22eba7acf1ea6e9e57110.jpg"},
         {name: "Flan", price: "$9", img: "https://i.pinimg.com/1200x/0a/a3/73/0aa373b03b7d27b13362d75a01974773.jpg"},
        {name: "Creme brulee", price: "$9", img: "https://i.pinimg.com/1200x/05/06/55/05065523b13d7f7f2bfe0d4af544e18b.jpg"},
        {name: "Glace", price: "$10", img: "https://i.pinimg.com/1200x/22/a7/d0/22a7d0ce7700f7169b5990609f5d458f.jpg"},
        {name: "Fondant au chocolat", price: "$9", img: "https://i.pinimg.com/736x/e0/0f/7b/e00f7b7fd2d11f031fe05d067efb6f70.jpg"},
    ],

    main: [
        {name: "Steak", price: "$20", img: "https://i.pinimg.com/736x/39/a6/23/39a62388311c0600ef608ab00b66c34f.jpg"},
        {name: "Pizza", price: "$18", img: "https://i.pinimg.com/736x/f0/86/c2/f086c2b68c7bc41d5371815fb4e0fc58.jpg"},
        {name: "Burger", price: "$20", img: "https://i.pinimg.com/736x/c9/c5/01/c9c5013a47c78dde12d22a8659cdb945.jpg"},
        {name: "Tacos", price: "$18", img: "https://i.pinimg.com/736x/c0/05/f1/c005f12867549656070006bf650579a2.jpg"},
        {name: "calamar frit", price: "$20", img: "https://i.pinimg.com/736x/ca/56/75/ca567571fed94e579a69c362e66c655d.jpg"},
        {name: "crevette ", price: "$18", img: "https://i.pinimg.com/736x/86/28/06/862806a3d1980336abdc251f5bbd24cd.jpg"},
    ],

    starters: [
        {name: "Soup", price: "$6", img: "https://i.pinimg.com/736x/fc/3d/d8/fc3dd8e101ee74115f0377a58e88ff6b.jpg"},
        {name: "Salad", price: "$7", img: "https://i.pinimg.com/736x/08/c7/0d/08c70d473888e35bd1c4cd9d1d2983d7.jpg"},
        {name: "Soup legumes", price: "$6", img: "https://i.pinimg.com/736x/e5/2b/22/e52b2249e654673a035a761771fa59de.jpg"},
        {name: "Soup poulet", price: "$7", img: "https://i.pinimg.com/736x/06/e5/cd/06e5cd48e4a1f2fa0504e58641f2cf42.jpg"},
        {name: "Soup cesar", price: "$6", img: "https://i.pinimg.com/1200x/c4/82/6c/c4826c2f9b791ad5d24e5f855c086977.jpg"},
        {name: "Salad nicoise", price: "$7", img: "https://i.pinimg.com/1200x/73/9c/5f/739c5f58799f0c2e82999a4c385fb492.jpg"},
    ]
};

function showMenu(category) {
    let html = "";
    data[category].forEach(item => {
        html += `
        <div class="card">
            <img src="${item.img}">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
            </div>
        </div>`;
    });

    document.getElementById("menu-grid").innerHTML = html;
}

showMenu('drinks');

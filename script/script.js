let allPlants = []
let cart = []

async function loadPlants(){
  const res = await fetch("https://openapi.programming-hero.com/api/plants")
  const data = await res.json()
  allPlants = data.plants
  showPlants(allPlants)
  showCategories(allPlants)
}

function showPlants(plants){
  const box = document.getElementById("plantContainer")
  box.innerHTML = ""
  plants.forEach(p=>{
    const card = document.createElement("div")
    card.className="bg-white rounded-xl shadow p-4 flex flex-col hover:scale-[1.02] transition"
    card.innerHTML=`
      <img src="${p.image}" alt="${p.name}" 
           class="w-full max-h-48 object-contain rounded-lg mb-3 bg-gray-50">
      <h3 class="font-semibold text-lg mb-1 text-green-700 cursor-pointer" onclick="openModal(${p.id})">${p.name}</h3>
      <p class="text-sm text-gray-600 mb-3">${p.description || "No description"}</p>
      
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">${p.category}</span>
        <div class="font-bold text-green-700">৳${p.price}</div>
      </div>
      
      <button class="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 self-center" 
              onclick="addToCart(${p.id})">Add to Cart</button>
    `
    box.appendChild(card)
  })
}

function showCategories(plants){
  const cats = ["All", ...new Set(plants.map(p=>p.category))]
  const ul = document.getElementById("categoryList")
  ul.innerHTML=""
  cats.forEach(c=>{
    const li=document.createElement("li")
    li.textContent=c
    li.className="cursor-pointer px-3 py-2 rounded-lg hover:bg-green-600 hover:text-white"
    li.onclick=()=>filterCategory(c,li)
    if(c==="All") li.classList.add("bg-green-600","text-white")
    ul.appendChild(li)
  })
}

function filterCategory(cat, li){
  document.querySelectorAll("#categoryList li").forEach(l=>l.classList.remove("bg-green-600","text-white"))
  li.classList.add("bg-green-600","text-white")
  if(cat==="All") showPlants(allPlants)
  else showPlants(allPlants.filter(p=>p.category===cat))
}

function addToCart(id){
  const plant = allPlants.find(p=>p.id===id)
  const exist = cart.find(i=>i.id===id)
  if(exist){ exist.qty++ }
  else { cart.push({...plant, qty:1}) }
  showCart()
}

function removeFromCart(id){
  cart = cart.filter(i=>i.id!==id)
  showCart()
}

function showCart(){
  const cartBox=document.getElementById("cartItems")
  cartBox.innerHTML=""
  let total=0
  cart.forEach(i=>{
    total+=i.price*i.qty
    const div=document.createElement("div")
    div.className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg"
    div.innerHTML=`
      <span>${i.name} (x${i.qty})</span>
      <div class="flex items-center gap-2">
        <span>৳${i.price*i.qty}</span>
        <button class="text-red-600 font-bold" onclick="removeFromCart(${i.id})">×</button>
      </div>
    `
    cartBox.appendChild(div)
  })
  document.getElementById("cartTotal").textContent=total
}

function openModal(id){
  const plant = allPlants.find(p=>p.id===id)
  document.getElementById("modalImage").src = plant.image
  document.getElementById("modalName").textContent = plant.name
  document.getElementById("modalDesc").textContent = plant.description || "No description available."
  document.getElementById("modalCategory").textContent = plant.category
  document.getElementById("modalPrice").textContent = plant.price
  document.getElementById("plantModal").classList.remove("hidden")
}

function closeModal(){
  document.getElementById("plantModal").classList.add("hidden")
}

loadPlants()
const API="/api/products";

async function addProduct(){

const product={

productName:document.getElementById("productName").value,
productCode:document.getElementById("productCode").value,
category:document.getElementById("category").value,
supplierName:document.getElementById("supplierName").value,
quantityInStock:document.getElementById("quantityInStock").value,
unitPrice:document.getElementById("unitPrice").value

};

await fetch(API,{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(product)

});

alert("Product Added");

getProducts();
}

async function getProducts(){

const res=await fetch(API);

const data=await res.json();

const table=document.getElementById("productTable");

table.innerHTML="";

data.forEach(p=>{

table.innerHTML+=`
<tr>
<td>${p.productName}</td>
<td>${p.category}</td>
<td>${p.quantityInStock}</td>
<td>${p.unitPrice}</td>
<td><button onclick="deleteProduct('${p._id}')">Delete</button></td>
</tr>
`;

});

}

async function deleteProduct(id){

await fetch(API+"/"+id,{
method:"DELETE"
});

getProducts();

}
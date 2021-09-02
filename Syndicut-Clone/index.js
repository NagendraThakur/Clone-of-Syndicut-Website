const logo = document.querySelector(".logo");
const items = document.querySelectorAll(".navBar_item");
const blog = document.querySelectorAll(".blog");
logo.addEventListener("mouseover", (e) =>
{
	logo.classList.add("onHover");	
}, false);

logo.addEventListener("mouseout", (e) =>
{
	logo.classList.remove("onHover");
}, false); 

items.forEach(item => item.addEventListener("mouseover", (e) =>
{
	item.classList.add("itemOnHover");
}, false));

items.forEach(item => item.addEventListener("mouseout", (e) =>
{
	item.classList.remove("itemOnHover");
}, false));

blog.forEach(blog => blog.addEventListener("mouseover", (e) =>
{
	const blogImage = blog.querySelectorAll(".blogImage");
	blogImage.forEach(img => img.classList.add("blogImageOnHover"));
}, false));


blog.forEach(blog => blog.addEventListener("mouseout", (e) =>
{
	const blogImage = blog.querySelectorAll(".blogImage");
	blogImage.forEach(img => img.classList.remove("blogImageOnHover"));
}, false));
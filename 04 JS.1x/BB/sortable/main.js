class SortableList {
	constructor(element, data) {
		this.element = element;
		this.data = data;
		this.dragOverItem = {};
		this.dragItemMouse = {};
		this.render();
	}

	renderList() {
		const list = document.createElement('ul');
		list.addEventListener('dragstart', this.onDragStart.bind(this));
		list.addEventListener('dragover', this.onDragOver.bind(this));
		list.addEventListener('drop', this.onDrop.bind(this));

		this.data.forEach(itemData => {
			const item = document.createElement('li');
			item.textContent = itemData.text;
			item.setAttribute('draggable', 'true');
			item.setAttribute('id', itemData.id);
			list.appendChild(item);
		})
		this.element.appendChild(list);
	}

	renderTitle() {
		const title = document.createElement('h1');
		title.textContent = "Sortable List";
		this.element.appendChild(title);
	}

	onDragStart(e) {
		e.dataTransfer.setData("text/plain", e.target.id);
	  e.dataTransfer.dropEffect = 'move';
	}

	onDragOver(e) {
		if (e.target.tagName === "LI") {
			e.preventDefault();
			e.dataTransfer.dropEffect = 'move';

			this.dragOverItem = e.target;
			this.dragItemMouse = {mouseX: e.pageX, mouseY: e.pageY};
		}
	}

	onDrop(e) {
		e.preventDefault();
		const dragItemId = e.dataTransfer.getData("text/plain");

	  const dragOverItemRect = this.dragOverItem.getBoundingClientRect();
	  const dragOverItemId = this.dragOverItem.id;
		const mouse = this.dragItemMouse;

		if (mouse.mouseY - dragOverItemRect.height/2 <= dragOverItemRect.top) {
			// console.log("insert before");
			this.insertBefore(dragItemId, dragOverItemId);
		} else if (mouse.mouseY + dragOverItemRect.height/2 >= dragOverItemRect.bottom) {
			// console.log("insert after");
			this.insertAfter(dragItemId, dragOverItemId);
		}
		this.render();
	}

	insertBefore(dragItemId, dragOverItemId) {
		let newData = this.data.slice();
		let dragItem = newData.find(item => item.id === dragItemId);
		newData = newData.filter(item => item.id !== dragItemId);
		let dragOverItemIndex = newData.findIndex(item => item.id === dragOverItemId);
		newData.splice(dragOverItemIndex, 0, dragItem);
		this.data = newData;
	}

	insertAfter(dragItemId, dragOverItemId) {
		let newData = this.data.slice();
		let dragItem = newData.find(item => item.id === dragItemId);
		newData = newData.filter(item => item.id !== dragItemId);
		let dragOverItemIndex = newData.findIndex(item => item.id === dragOverItemId);
		newData.splice(dragOverItemIndex + 1, 0, dragItem);
		this.data = newData;
	}

	render() {
		this.element.innerHTML = '';
		this.renderTitle();
		this.renderList();
	}
}

const data = [
	{text: "Item A", id: "ita"},
	{text: "Item B", id: "itb"},
	{text: "Item C", id: "itc"},
	{text: "Item D", id: "itd"},
	{text: "Item E", id: "ite"},
	{text: "Item F", id: "itf"},
	{text: "Item G", id: "itg"},
	{text: "Item H", id: "ith"}, 
]

new SortableList(document.querySelector("#app"), data);
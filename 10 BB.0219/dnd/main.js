class DragAndDropApp {
	constructor(element, data) {
		this.element = element;
		this.data = data;
		this.render();
	}

	addItem() {
		const itemNumber = this.data.length + 1;
		this.data.push({text: `Item ${itemNumber}`});
		this.render();
	}

	onDragStart(e) {
		e.dataTransfer.setData("text/plain", e.target.id);
	  e.dataTransfer.dropEffect = 'move';
	}

	onDragOver(e) {
		e.preventDefault();
		e.dataTransfer.dropEffect = "move";
	}

	onDrop(e) {
		e.preventDefault();
	  const data = e.dataTransfer.getData("text/plain");
	  const item = document.querySelector(`#${data}`);
	  try {
	  	e.currentTarget.appendChild(item);
	  } catch {
	  	console.warn("Can not drag into current list.");
	  }
	}

	renderList() {
		const listId = this.element.id;
		// create list element
		const list = document.createElement('ul');
		this.data.forEach((item, index) => {
			// create list item
			const listItem = document.createElement('li');
			listItem.textContent = item.text;
			listItem.setAttribute('draggable', 'true');
			// set id for items
			listItem.setAttribute('id', `${listId}-item-${index + 1}`);
			// listItem.addEventListener('dragstart', this.onDragStart);
			list.appendChild(listItem);
		});
		list.addEventListener('dragstart', this.onDragStart);
		list.addEventListener('dragover', this.onDragOver);
		list.addEventListener('drop', this.onDrop);
		return list;
	}

	renderAddItemButton() {
		const button = document.createElement('button');
		button.textContent = "+";
		button.addEventListener('click', () => {
			this.addItem();
		})
		return button;
	}

	render() {
		const list = this.renderList();
		const button = this.renderAddItemButton();
		this.element.innerHTML = '';
		this.element.appendChild(list);
		this.element.appendChild(button);
	}
}

const app1 = document.querySelector('#app1');
const app2 = document.querySelector('#app2');
const data1 = [{text: "Item 1"}];
const data2 = [{text: "Item 1"}];

new DragAndDropApp(app1, data1);
new DragAndDropApp(app2, data2);
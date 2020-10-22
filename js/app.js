class SelectComponent {

    constructor(valueInputSelect, savingOption, selectionList, valuesSelectionList, favoriteList, addingList, optionSelect){

        this.valueInputSelect = valueInputSelect;
        this.savingOption = savingOption;
        this.selectionList = selectionList;
        this.valuesSelectionList = valuesSelectionList;
        this.favoriteList = favoriteList;
        this.addingList = addingList;
        this.optionSelect = optionSelect;
    }

    addNewOption(){
        
        if(this.valueInputSelect.value !== ""){
            
            let newOption = document.createElement('option');
            newOption.value = this.valueInputSelect.value;
            newOption.textContent = newOption.value;
            this.valuesSelectionList.push(newOption.textContent);
            this.selectionList.options.add(newOption);
            this.valueInputSelect.value = "";

        }        
        
    }

    addElementList(){
       
        for (let i = 0; i < this.optionSelect.length; i++) {
            const elementOption = this.optionSelect[i];
            
            if(elementOption.selected){
    
                const newElement = document.createElement("li");
                newElement.classList.add("list-group-item");
                newElement.innerHTML = elementOption.value;
                this.favoriteList.appendChild(newElement);
                
            }
        }        
        
    }

}

export default SelectComponent 
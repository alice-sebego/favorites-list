import SelectComponent from './app.js';

const $valueInputSelect = document.getElementById("value-select"); // Input where we add a value for option
const $savingOption = document.getElementById("saving-option"); // Btn for enter a new option
let $selectionList = document.getElementById("selection-list"); // Select Element HTML
let valuesSelectionList = [];

const $favoriteList = document.getElementById("favorite");
const $addingList = document.getElementById("adding-list-btn");
let $optionSelect = document.getElementsByTagName("option");

const selectionFav = new SelectComponent($valueInputSelect, $savingOption, $selectionList, valuesSelectionList, $favoriteList, $addingList, $optionSelect);

selectionFav.valueInputSelect.addEventListener('change', function(){
   selectionFav.addNewOption(); 
});

selectionFav.addingList.addEventListener('click', function(){
    selectionFav.addElementList();
});
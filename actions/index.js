'use strict';

function addColumn (ev) {
  ev.preventDefault();
}

function addRow (ev) {
  ev.preventDefault();
  debugger
}

function changeCell (rowIndex, columnIndex, ev) {
  ev.preventDefault();
}

function focusCell (rowIndex, columnIndex) {
}

function blurCell () {
}

function removeRow (ev) {
  ev.preventDefault();
}

function removeColumn (ev) {
  ev.preventDefault();
}

module.exports = {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};

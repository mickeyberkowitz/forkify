class SearchView {
  _parentElement = document.querySelector('.search');
  _searchFieldElement = this._parentElement.querySelector('.search__field');

  getQuery() {
    const query = this._searchFieldElement.value;
    this._clearInputField();
    return query;
  }

  _clearInputField() {
    this._searchFieldElement.value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (event) {
      event.preventDefault();
      handler();
    });
  }
}

export default new SearchView();

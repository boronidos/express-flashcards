const saves = {
  "save-01": {
    name: "save-01",
    data: [
      { progress: "74%" },
    ],
  },
  "save-02": {
    name: "save-02",
    data: [
      { progress: "36%" },
    ],
  },
};

export function getCategorySummaries() {
    return Object.entries(saves).map(function (entry) {
      return entry[1];
    })
}

export function hasCategory(categoryId) {
  return card_categories.hasOwnProperty(categoryId);
}

export function getCategory(categoryId) {
  if (hasCategory(categoryId))
    return { id: categoryId, ...card_categories[categoryId] };
  return null;
}

export function addCard(categoryId, card) {
  if (hasCategory(categoryId)) card_categories[categoryId].cards.push(card);
}

export default {
  getCategorySummaries,
  hasCategory,
  getCategory,
  addCard,
};
const storageKey = "todaysThreePriorities";

const priorityItems = [1, 2, 3].map((number) => ({
  textInput: document.querySelector(`#priority-${number}-text`),
  checkbox: document.querySelector(`#priority-${number}-done`),
}));

const progressMessage = document.querySelector("#progress-message");
const startFreshButton = document.querySelector("#start-fresh");

function getSavedPriorities() {
  const savedPriorities = localStorage.getItem(storageKey);

  if (!savedPriorities) {
    return [];
  }

  try {
    return JSON.parse(savedPriorities);
  } catch (error) {
    return [];
  }
}

function savePriorities() {
  const priorities = priorityItems.map((item) => ({
    text: item.textInput.value,
    complete: item.checkbox.checked,
  }));

  localStorage.setItem(storageKey, JSON.stringify(priorities));
}

function updateProgress() {
  const completedCount = priorityItems.filter((item) => item.checkbox.checked).length;
  progressMessage.textContent = `${completedCount} of 3 complete.`;
}

function loadPriorities() {
  const savedPriorities = getSavedPriorities();

  priorityItems.forEach((item, index) => {
    const savedItem = savedPriorities[index];

    if (savedItem) {
      item.textInput.value = savedItem.text || "";
      item.checkbox.checked = Boolean(savedItem.complete);
    }
  });

  updateProgress();
}

function clearPriorities() {
  const shouldClear = window.confirm("Clear all three priorities and start fresh?");

  if (!shouldClear) {
    return;
  }

  priorityItems.forEach((item) => {
    item.textInput.value = "";
    item.checkbox.checked = false;
  });

  savePriorities();
  updateProgress();
  priorityItems[0].textInput.focus();
}

priorityItems.forEach((item) => {
  item.textInput.addEventListener("input", savePriorities);
  item.checkbox.addEventListener("change", () => {
    savePriorities();
    updateProgress();
  });
});

startFreshButton.addEventListener("click", clearPriorities);

loadPriorities();

/**
 * Clean Selection Mode Script
 * Provides element highlighting & metadata extraction without any external communication.
 */

const IMPORTANT_STYLES = [
  'display',
  'position',
  'flex-direction',
  'justify-content',
  'align-items',
  'width',
  'height',
  'padding',
  'margin',
  'border',
  'background-color',
  'color',
  'font-size',
  'font-weight',
  'font-family',
  'border-radius',
  'box-shadow',
  'gap',
  'grid-template-columns',
];

const PRIMARY_COLOR = '#7B68EE';
const DATA_SELECTION_MODE_ENABLED_ATTRIBUTE = 'data-selection-mode-enabled';
let selectionModeEnabled = false;
let overlayDiv = null;
let selectedOverlayDiv = null;
let currentHoverElement = null;
let selectedElement = null;

function injectStyles() {
  if (document.getElementById('selection-mode-styles')) return;

  const style = document.createElement('style');
  style.id = 'selection-mode-styles';
  style.textContent = `
    #selection-mode-overlay {
      position: absolute;
      border: 2px dashed ${PRIMARY_COLOR};
      pointer-events: none;
      z-index: 999999;
    }
    #selection-mode-selected-overlay {
      position: absolute;
      border: 3px solid ${PRIMARY_COLOR};
      pointer-events: none;
      z-index: 999998;
    }
  `;
  document.head.appendChild(style);
}

function createOverlay(id) {
  const overlay = document.createElement('div');
  overlay.id = id;
  document.body.appendChild(overlay);
  return overlay;
}

function showOverlay(element, overlay) {
  const rect = element.getBoundingClientRect();
  overlay.style.left = `${rect.left + window.scrollX}px`;
  overlay.style.top = `${rect.top + window.scrollY}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;
  overlay.style.display = 'block';
}

function hideOverlay(overlay) {
  if (overlay) overlay.style.display = 'none';
}

function handleMouseMove(event) {
  if (!selectionModeEnabled) return;
  const element = document.elementFromPoint(event.clientX, event.clientY);
  if (!element || element === overlayDiv || element === selectedOverlayDiv) return;

  currentHoverElement = element;
  if (!overlayDiv) overlayDiv = createOverlay('selection-mode-overlay');
  showOverlay(element, overlayDiv);
}

function handleClick(event) {
  if (!selectionModeEnabled || !currentHoverElement) return;

  event.preventDefault();
  event.stopPropagation();

  selectedElement = currentHoverElement;
  if (!selectedOverlayDiv) selectedOverlayDiv = createOverlay('selection-mode-selected-overlay');
  showOverlay(selectedElement, selectedOverlayDiv);

  console.log('Selected Element:', selectedElement);
}

function enableSelectionMode() {
  if (selectionModeEnabled) return;
  selectionModeEnabled = true;
  document.body.style.userSelect = 'none';
  injectStyles();
  document.addEventListener('mousemove', handleMouseMove, true);
  document.addEventListener('click', handleClick, true);
  document.getElementById('root')?.setAttribute(DATA_SELECTION_MODE_ENABLED_ATTRIBUTE, 'true');
}

function disableSelectionMode() {
  if (!selectionModeEnabled) return;
  selectionModeEnabled = false;
  document.body.style.userSelect = '';
  hideOverlay(overlayDiv);
  hideOverlay(selectedOverlayDiv);
  document.removeEventListener('mousemove', handleMouseMove, true);
  document.removeEventListener('click', handleClick, true);
  document.getElementById('root')?.removeAttribute(DATA_SELECTION_MODE_ENABLED_ATTRIBUTE);
}

// Optional: expose methods globally
window.SelectionMode = {
  enable: enableSelectionMode,
  disable: disableSelectionMode,
};

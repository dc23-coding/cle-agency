/**
 * Clean Edit Mode Script
 * Enables local inline editing for authorized users.
 * No external origin communication.
 */

const EDIT_API_URL = '/api/apply-edit'; // Replace with your own endpoint if needed

let areStylesInjected = false;
let globalEventHandlers = null;
let currentEditingInfo = null;
let disabledTooltipElement = null;
let currentDisabledHoverElement = null;

const translations = {
  disabledTooltipText: 'Editing disabled for this text.',
  disabledTooltipTextImage: 'Editing disabled for this image.',
};

function injectPopupStyles() {
  if (areStylesInjected) return;
  const styleElement = document.createElement('style');
  styleElement.id = 'inline-editor-styles';
  styleElement.textContent = `
    #inline-editor-disabled-tooltip {
      position: fixed;
      background: rgba(0,0,0,0.85);
      color: white;
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 13px;
      z-index: 99999;
      transition: opacity 0.2s ease;
      pointer-events: none;
    }
    .tooltip-active { opacity: 1; }
  `;
  document.head.appendChild(styleElement);
  areStylesInjected = true;
}

function handleClick(event) {
  const editableElement = event.target.closest('[data-edit-id]');
  if (!editableElement) return;

  const isImage = editableElement.tagName.toLowerCase() === 'img';
  const content = isImage
    ? editableElement.getAttribute('src') || ''
    : editableElement.textContent || '';

  currentEditingInfo = { editId: editableElement.dataset.editId, targetElement: editableElement };

  const newValue = prompt('Edit content:', content);
  if (newValue !== null) handleEditSave(newValue, isImage);
}

async function handleEditSave(updatedText, isImage = false) {
  if (!currentEditingInfo) return;

  const { editId, targetElement } = currentEditingInfo;
  try {
    const response = await fetch(EDIT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ editId, newContent: updatedText }),
    });

    const result = await response.json();
    if (result.success) {
      if (isImage) {
        targetElement.setAttribute('src', updatedText);
      } else {
        targetElement.textContent = updatedText;
      }
      console.info(`Edit applied for ${editId}`);
    } else {
      console.error(`Error saving edit: ${result.error}`);
    }
  } catch (error) {
    console.error(`Error saving edit for ${editId}:`, error);
  }
}

function enableEditMode() {
  injectPopupStyles();
  document.getElementById('root')?.setAttribute('data-edit-mode-enabled', 'true');

  globalEventHandlers = {
    click: handleClick,
  };

  Object.entries(globalEventHandlers).forEach(([eventType, handler]) => {
    document.addEventListener(eventType, handler, true);
  });

  console.info('[Edit Mode] Enabled');
}

function disableEditMode() {
  document.getElementById('root')?.removeAttribute('data-edit-mode-enabled');

  if (globalEventHandlers) {
    Object.entries(globalEventHandlers).forEach(([eventType, handler]) => {
      document.removeEventListener(eventType, handler, true);
    });
    globalEventHandlers = null;
  }

  console.info('[Edit Mode] Disabled');
}

// Optional global control
window.EditMode = { enable: enableEditMode, disable: disableEditMode };

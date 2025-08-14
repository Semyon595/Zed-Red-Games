// ... (предыдущий код остается до функции createNewChat)

// Создание нового чата
function createNewChat() {
  const defaultInterlocutor = CONFIG.CHAT.INTERLOCUTORS.find(
    i => i.id === CONFIG.CHAT.DEFAULT_INTERLOCUTOR
  ) || CONFIG.CHAT.INTERLOCUTORS[0];

  const newChat = {
    id: generateId(),
    title: `Чат с ${defaultInterlocutor.name}`,
    interlocutor: defaultInterlocutor.id,
    messages: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  state.chats.unshift(newChat);
  state.currentChatId = newChat.id;
  saveData();
  renderChatList();
  loadChat(newChat.id);
}

// Добавление сообщения в чат
function addMessageToChat(role, content, timestamp = new Date().toISOString(), isNew = true) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${role}-message`;
  
  const time = formatTime(timestamp);
  const chat = state.chats.find(c => c.id === state.currentChatId);
  const interlocutor = chat ? CONFIG.CHAT.INTERLOCUTORS.find(i => i.id === chat.interlocutor) : null;
  
  messageDiv.innerHTML = `
    <div class="avatar">${role === 'user' ? 'Вы' : interlocutor?.avatar || 'AI'}</div>
    <div class="message-content">
      ${formatMessage(content)}
      <div class="message-time">${time}</div>
    </div>
  `;
  
  elements.messagesContainer.appendChild(messageDiv);
  
  if (isNew) {
    elements.messagesContainer.scrollTop = elements.messagesContainer.scrollHeight;
  }
}

// Обновлю функцию openSettings для выбора собеседника
function openSettings() {
  const chat = state.chats.find(c => c.id === state.currentChatId);
  if (!chat) return;

  const settingsHtml = `
    <div class="settings-modal">
      <h3>Настройки чата</h3>
      <div class="setting-group">
        <label>Собеседник:</label>
        <select id="interlocutorSelect">
          ${CONFIG.CHAT.INTERLOCUTORS.map(i => `
            <option value="${i.id}" ${i.id === chat.interlocutor ? 'selected' : ''}>
              ${i.avatar} ${i.name} - ${i.description}
            </option>
          `).join('')}
        </select>
      </div>
      <div class="settings-buttons">
        <button id="saveSettingsBtn">Сохранить</button>
        <button id="cancelSettingsBtn">Отмена</button>
      </div>
    </div>
  `;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = settingsHtml;
  document.body.appendChild(modal);

  document.getElementById('saveSettingsBtn').addEventListener('click', () => {
    const select = document.getElementById('interlocutorSelect");
    const selectedInterlocutor = CONFIG.CHAT.INTERLOCUTORS.find(i => i.id === select.value);
    
    if (selectedInterlocutor) {
      chat.interlocutor = selectedInterlocutor.id;
      chat.title = `Чат с ${selectedInterlocutor.name}`;
      elements.currentChatTitle.textContent = chat.title;
      saveData();
      renderChatList();
    }
    
    document.body.removeChild(modal);
  });

  document.getElementById('cancelSettingsBtn').addEventListener('click', () => {
    document.body.removeChild(modal);
  });
}

// ... (остальной код остается без изменений)
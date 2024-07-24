document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const msgInput = document.getElementById('msg');
    const messageText = msgInput.value;
    
    if (messageText.trim()) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message');
        
        const meta = document.createElement('p');
        meta.classList.add('meta');
        meta.innerHTML = `Você <span>${new Date().toLocaleTimeString()}</span>`;
        
        const text = document.createElement('p');
        text.classList.add('text');
        text.textContent = messageText;
        
        messageContainer.appendChild(meta);
        messageContainer.appendChild(text);
        
        document.querySelector('.chat-messages').appendChild(messageContainer);
        
        msgInput.value = '';
        msgInput.focus();
        
        document.querySelector('.chat-main').scrollTop = document.querySelector('.chat-main').scrollHeight;
    }
});

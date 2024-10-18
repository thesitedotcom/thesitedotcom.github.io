const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
const supabaseSecret = 'your-supabase-secret';

const supabase = createClient(supabaseUrl, supabaseKey, supabaseSecret);

const chatContainer = document.getElementById('chat-container');
const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Listen for new messages
supabase.from('messages').on('INSERT', (payload) => {
    const message = payload.new;
    const messageHTML = `
        <div class="message">
            <span class="username">${message.username}</span>
            <span class="message-text">${message.text}</span>
        </div>
    `;
    messagesContainer.innerHTML += messageHTML;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
});

// Send message
sendButton.addEventListener('click', async () => {
    const text = messageInput.value.trim();
    if (text) {
        const { data, error } = await supabase.from('messages').insert([
            {
                username: 'Anonymous', // Replace with actual username
                text,
            },
        ]);
        if (error) console.error(error);
        messageInput.value = '';
    }
});

// Initialize chat
async function initChat() {
    const { data, error } = await supabase.from('messages').select('*');
    if (error) console.error(error);
    data.forEach((message) => {
        const messageHTML = `
            <div class="message">
                <span class="username">${message.username}</span>
                <span class="message-text">${message.text}</span>
            </div>
        `;
        messagesContainer.innerHTML += messageHTML;
    });
}

initChat();

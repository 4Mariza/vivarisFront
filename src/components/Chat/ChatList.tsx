import React from "react";

interface Chat {
    id: number;
    nome: string;
    foto_perfil: string;
    messages: { id: number; sender: string; text: string; time: string }[];
}

interface ChatListProps {
    chats: Chat[];
    onChatClick: (chatId: number) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, onChatClick }) => {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
                <h1 className="text-xl font-semibold">Meus Chats</h1>
            </div>

            {/* Lista de Chats */}
            <div className="flex-grow overflow-y-auto">
                {chats.map((chat) => (
                    <div
                        key={chat.id}
                        className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                        onClick={() => onChatClick(chat.id)}
                    >
                        <img
                            src={chat.foto_perfil}
                            alt={`${chat.nome} avatar`}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-grow ml-4">
                            <div className="flex justify-between">
                                <h2 className="text-lg font-semibold">{chat.nome}</h2>
                                <p className="text-sm text-gray-500">
                                    {chat.messages[chat.messages.length - 1]?.time}
                                </p>
                            </div>
                            <p className="text-sm text-gray-500">
                                {chat.messages[chat.messages.length - 1]?.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatList;

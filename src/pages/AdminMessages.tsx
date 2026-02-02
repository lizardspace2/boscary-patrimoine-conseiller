import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Message {
    id: number;
    created_at: string;
    name: string;
    email: string;
    subject: string;
    message: string;
}

const AdminMessages = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMessages();
    }, []);

    async function fetchMessages() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("contact_messages")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                throw error;
            }

            if (data) {
                setMessages(data);
            }
        } catch (error) {
            console.error("Error fetching messages:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 py-12 container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">Messages reçus</h1>

                {loading ? (
                    <p>Chargement...</p>
                ) : (
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Nom</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Sujet</TableHead>
                                    <TableHead>Message</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {messages.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} className="text-center">
                                            Aucun message trouvé.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    messages.map((msg) => (
                                        <TableRow key={msg.id}>
                                            <TableCell className="whitespace-nowrap">
                                                {format(new Date(msg.created_at), "dd/MM/yyyy HH:mm", {
                                                    locale: fr,
                                                })}
                                            </TableCell>
                                            <TableCell>{msg.name}</TableCell>
                                            <TableCell>{msg.email}</TableCell>
                                            <TableCell>{msg.subject}</TableCell>
                                            <TableCell className="max-w-md truncate" title={msg.message}>
                                                {msg.message}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default AdminMessages;

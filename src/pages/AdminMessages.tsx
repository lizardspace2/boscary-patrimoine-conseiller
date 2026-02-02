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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Trash, Eye, Pencil } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"; // Assuming Sonner is used based on App.tsx

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

    // State for actions
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    // Edit form state
    const [editForm, setEditForm] = useState<Partial<Message>>({});

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

            if (error) throw error;
            if (data) setMessages(data);
        } catch (error) {
            console.error("Error fetching messages:", error);
            toast.error("Erreur lors du chargement des messages");
        } finally {
            setLoading(false);
        }
    }

    const handleDelete = async () => {
        if (!selectedMessage) return;
        try {
            const { error } = await supabase
                .from("contact_messages")
                .delete()
                .eq("id", selectedMessage.id);

            if (error) throw error;

            toast.success("Message supprimé avec succès");
            setMessages(messages.filter((m) => m.id !== selectedMessage.id));
            setIsDeleteOpen(false);
        } catch (error) {
            console.error("Error deleting message:", error);
            toast.error("Erreur lors de la suppression");
        }
    };

    const handleUpdate = async () => {
        if (!selectedMessage) return;
        try {
            const { error } = await supabase
                .from("contact_messages")
                .update({
                    name: editForm.name,
                    email: editForm.email,
                    subject: editForm.subject,
                    message: editForm.message,
                })
                .eq("id", selectedMessage.id);

            if (error) throw error;

            toast.success("Message mis à jour avec succès");
            setMessages(
                messages.map((m) =>
                    m.id === selectedMessage.id ? { ...m, ...editForm } : m
                )
            );
            setIsEditOpen(false);
        } catch (error) {
            console.error("Error updating message:", error);
            toast.error("Erreur lors de la mise à jour");
        }
    };

    const openView = (msg: Message) => {
        setSelectedMessage(msg);
        setIsViewOpen(true);
    };

    const openEdit = (msg: Message) => {
        setSelectedMessage(msg);
        setEditForm(msg);
        setIsEditOpen(true);
    };

    const openDelete = (msg: Message) => {
        setSelectedMessage(msg);
        setIsDeleteOpen(true);
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 py-12 container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-foreground">Messages reçus</h1>

                <div className="rounded-md border bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Nom</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Sujet</TableHead>
                                <TableHead>Message</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-8">
                                        Chargement...
                                    </TableCell>
                                </TableRow>
                            ) : messages.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-8">
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
                                        <TableCell className="max-w-xs truncate" title={msg.message}>
                                            {msg.message}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem onClick={() => openView(msg)}>
                                                        <Eye className="mr-2 h-4 w-4" />
                                                        Voir
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => openEdit(msg)}>
                                                        <Pencil className="mr-2 h-4 w-4" />
                                                        Modifier
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        onClick={() => openDelete(msg)}
                                                        className="text-red-600 focus:text-red-600"
                                                    >
                                                        <Trash className="mr-2 h-4 w-4" />
                                                        Supprimer
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </main>
            <Footer />

            {/* View Sheet */}
            <Sheet open={isViewOpen} onOpenChange={setIsViewOpen}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Détails du message</SheetTitle>
                        <SheetDescription>
                            Reçu le {selectedMessage && format(new Date(selectedMessage.created_at), "dd/MM/yyyy à HH:mm", { locale: fr })}
                        </SheetDescription>
                    </SheetHeader>
                    {selectedMessage && (
                        <div className="grid gap-6 py-6">
                            <div>
                                <h4 className="font-medium text-sm text-muted-foreground mb-1">De</h4>
                                <p>{selectedMessage.name} &lt;{selectedMessage.email}&gt;</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-sm text-muted-foreground mb-1">Sujet</h4>
                                <p>{selectedMessage.subject}</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-sm text-muted-foreground mb-1">Message</h4>
                                <div className="p-4 bg-muted rounded-md text-sm whitespace-pre-wrap">
                                    {selectedMessage.message}
                                </div>
                            </div>
                        </div>
                    )}
                </SheetContent>
            </Sheet>

            {/* Edit Dialog */}
            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Modifier le message</DialogTitle>
                        <DialogDescription>
                            Modifier les détails du message ci-dessous.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Nom</Label>
                            <Input
                                id="name"
                                value={editForm.name || ""}
                                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                value={editForm.email || ""}
                                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="subject">Sujet</Label>
                            <Input
                                id="subject"
                                value={editForm.subject || ""}
                                onChange={(e) => setEditForm({ ...editForm, subject: e.target.value })}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                className="min-h-[100px]"
                                value={editForm.message || ""}
                                onChange={(e) => setEditForm({ ...editForm, message: e.target.value })}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditOpen(false)}>Annuler</Button>
                        <Button onClick={handleUpdate}>Enregistrer</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Alert */}
            <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Cette action est irréversible. Cela supprimera définitivement le message de {selectedMessage?.name}.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white">
                            Supprimer
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default AdminMessages;

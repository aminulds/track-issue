"use client"
import { Alert, AlertDescription, AlertTitle, } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface Props {
    title?: string;
    message: string | undefined;
}

const ErrorMessage = ({ title, message }: Props) => {
    if (!{ title, message }) return null;

    return (
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle className={!title ? 'mb-0' : ''}>{title}</AlertTitle>
            <AlertDescription>
                {message}
            </AlertDescription>
        </Alert>
    )
}

export default ErrorMessage
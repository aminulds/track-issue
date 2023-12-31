
import BackButton from '@/components/BackButton'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { Toaster } from 'react-hot-toast'
import IssueForm from '../../_components/IssueForm'
import { Status } from '@prisma/client'

interface Props {
    params: { id: string }
}

const EditIssuePage = async ({ params }: Props) => {
    const issue = await prisma.issue.findUnique({
        where: { id: params.id }
    });

    if (!issue) notFound();
    
    return (
        <>
            <Toaster />
            <div>
                <BackButton>Back</BackButton>
                <IssueForm issue={issue} />
            </div>
        </>
    )
}

export default EditIssuePage
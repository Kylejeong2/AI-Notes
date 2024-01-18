"use client"

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Plus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'

type Props = {}

const CreateNoteDialog = (props: Props) => {
  return (
    <Dialog>
        <DialogTrigger>
            <div className='border-dashed border-2 flex border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover: shadow-xl transition hover:-translate-y-1 flex-row p-4'>
                <Plus className="w-6 h-6 text-green-600" strokeWidth={3} />
                <h2 className='font-semibold text-green-600 sm:mt-2'>New Notebook</h2>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    New Notebook
                </DialogTitle>

                <DialogDescription>
                    You can create a new note by clicking the button below. 
                </DialogDescription>
            </DialogHeader>

            <form className=''>
                <Input placeholder='Name...' />
                <div className='h-4' />
                
                <div className='flex items-center gap-2'>
                    <Button type='reset' variant={"secondary"}>Cancel</Button>
                    <Button className='bg-green-600' type="submit">Create</Button>
                </div>
                

            </form>
        </DialogContent>
    </Dialog>
  )
}

export default CreateNoteDialog
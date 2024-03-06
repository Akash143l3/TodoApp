"use client";

import { useRouter } from 'next/navigation';
import React from 'react'
import {Button} from "@/components/ui/button"
import Link from 'next/link';



export default function LogOut() {
  const route = useRouter()
  return (
    <div className="bg-gray-100 w-screen min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4">Logout</h1>
        <p className="text-gray-600 mb-8">Are you sure you want to log out?</p>
        <Button variant="default"
          onClick={()=>route.push("/") }
        >
          Logout
        </Button>
        <Button variant={'link'} asChild>
  <Link href="/about">About</Link>
</Button>

      </div>
    </div>
  );
}

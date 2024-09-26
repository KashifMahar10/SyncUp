'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation'
import { signInSchema } from "@/app/schemas/signInSchema";
import axios, { AxiosError } from "axios";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { title } from "process";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";


export default function page() {
    const[isSubmitting, setIsSubmitting] = useState(false);
    const {toast} = useToast();
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(signInSchema),
        defaultValues:{
            email: '',
            password: ''
        }
    });
   const onSubmit = async (data:z.infer<typeof signInSchema>) => {
    setIsSubmitting(true);
    console.log("Submitted data:", data); // Log submitted data for debugging
    try {
        const response = await axios.post('/api/login', data);
        toast({
            title: 'Success',
            description: response.data.message,
        });
        router.push('/')
    } catch (error) {
        const axiosError = error as AxiosError;
        const errorMessage = (axiosError.response?.data as { message?: string })?.message || "Something went wrong.";
        toast({
            title: 'Failed',
            description: errorMessage,
            variant: 'destructive',
        });
    }finally {
        setIsSubmitting(false);
    }
   }

  return (
   <>
          <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold mb-4 text-gray-800">Welcome to Sync Up</h1>
                    <p className="text-lg text-gray-500">Please Sign In to continue</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your Email" 
                                    className="border border-gray-300 focus:ring-2 focus:ring-blue-500" 
                                    {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter your Password" 
                                    className="border border-gray-300 focus:ring-2 focus:ring-blue-500" 
                                    {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )} />
                        <Button 
                                type="submit" 
                                disabled={isSubmitting || !form.formState.isValid} 
                                className="w-full bg-blue-900 text-white hover:bg-purple-600 transition duration-200">
                                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sign In'}
                            </Button>
                    </form>
                </Form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">
                        New member? {''}
                        <Link href="/sign-up" className="text-blue-600 hover:text-blue-800 font-semibold">Sign Up</Link>
                    </p>
                </div>
            </div>
       </div>
   </>
  )
}

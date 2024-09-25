'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation'
import { Loader2 } from "lucide-react";
import axios, { AxiosError } from "axios";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signUpSchema } from "@/app/schemas/signUpSchema";

const Page = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: ''
        }
    });

    const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
        setIsSubmitting(true);
        console.log("Submitted data:", data); // Log submitted data for debugging
        try {
            const response = await axios.post('/api/register', data);
            console.log("Response:", response); // Log the response
            toast({
                title: 'Success',
                description: response.data.message,
            });
            router.push('/');
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorMessage = (axiosError.response?.data as { message?: string })?.message || "Something went wrong.";
            toast({
                title: 'Failed',
                description: errorMessage,
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold mb-4 text-gray-800">Welcome to Sync Up</h1>
                    <p className="text-lg text-gray-500">Please Sign Up to continue</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your Email" className="border border-gray-300 focus:ring-2 focus:ring-blue-500" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="firstName" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your First Name" className="border border-gray-300 focus:ring-2 focus:ring-blue-500" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="lastName" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your Last Name" className="border border-gray-300 focus:ring-2 focus:ring-blue-500" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter your Password" className="border border-gray-300 focus:ring-2 focus:ring-blue-500" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-900 text-white hover:bg-purple-600 transition duration-200">
                            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sign Up'}
                        </Button>
                    </form>
                </Form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">
                        Already a member? {''}
                        <Link href="/login" className="text-blue-600 hover:text-blue-800 font-semibold">Sign in</Link>
                    </p>
                </div>
            </div>
       </div>

    );
};

export default Page;
